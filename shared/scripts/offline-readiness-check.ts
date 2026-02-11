#!/usr/bin/env tsx
/**
 * Offline readiness check for the Marrakech Guide shared bundle.
 *
 * This script implements the trust/reliability gates defined in plan.md:
 * - Core content bundles are present and non-empty.
 * - Engine vectors exist for deterministic offline behavior.
 * - Seeded SQLite bundle exists and has required content + FTS tables.
 * - SQLite bundle can be opened and queried with no runtime migrations.
 */

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SHARED_DIR = path.join(__dirname, '..');
const CONTENT_DIR = path.join(SHARED_DIR, 'content');
const TESTS_DIR = path.join(SHARED_DIR, 'tests');
const OUTPUT_DB = path.join(SHARED_DIR, 'output', 'content.db');

type JsonObject = Record<string, unknown>;

const REQUIRED_CONTENT_FILES: ReadonlyArray<{ file: string; minItems: number }> = [
  { file: 'places.json', minItems: 25 },
  { file: 'price_cards.json', minItems: 12 },
  { file: 'glossary.json', minItems: 20 },
  { file: 'itineraries.json', minItems: 6 },
  { file: 'tips.json', minItems: 12 },
  { file: 'culture.json', minItems: 8 },
  { file: 'activities.json', minItems: 12 },
  { file: 'events.json', minItems: 2 },
];

const REQUIRED_VECTOR_FILES: ReadonlyArray<{ file: string; minVectors: number; path: string[] }> = [
  { file: 'pricing-engine-vectors.json', minVectors: 20, path: ['vectors'] },
  { file: 'plan-engine-vectors.json', minVectors: 4, path: ['vectors'] },
  { file: 'geo-engine-vectors.json', minVectors: 7, path: ['haversine'] },
  { file: 'hours-engine-vectors.json', minVectors: 6, path: ['cases'] },
  { file: 'route-engine-vectors.json', minVectors: 6, path: ['test_cases'] },
];

const REQUIRED_SQLITE_TABLES = [
  'places',
  'price_cards',
  'phrases',
  'itineraries',
  'tips',
  'culture',
  'activities',
  'events',
  'content_links',
  'places_fts',
  'price_cards_fts',
  'phrases_fts',
  'tips_fts',
];

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function readJson(filePath: string): JsonObject {
  const raw = readFileSync(filePath, 'utf-8');
  const parsed = JSON.parse(raw) as unknown;
  assert(parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed), `${filePath} must be a JSON object`);
  return parsed as JsonObject;
}

function getPathValue(root: JsonObject, pathParts: string[]): unknown {
  let value: unknown = root;
  for (const part of pathParts) {
    if (!value || typeof value !== 'object' || Array.isArray(value) || !(part in value)) {
      return undefined;
    }
    value = (value as JsonObject)[part];
  }
  return value;
}

function contentReadinessChecks(): string[] {
  const messages: string[] = [];

  for (const spec of REQUIRED_CONTENT_FILES) {
    const filePath = path.join(CONTENT_DIR, spec.file);
    assert(existsSync(filePath), `Missing content file: ${spec.file}`);

    const parsed = readJson(filePath);
    const items = parsed.items;
    assert(Array.isArray(items), `${spec.file} must have an items array`);
    assert(items.length >= spec.minItems, `${spec.file} must have at least ${spec.minItems} items; found ${items.length}`);

    messages.push(`${spec.file}: ${items.length} items`);
  }

  return messages;
}

function vectorReadinessChecks(): string[] {
  const messages: string[] = [];

  for (const spec of REQUIRED_VECTOR_FILES) {
    const filePath = path.join(TESTS_DIR, spec.file);
    assert(existsSync(filePath), `Missing engine vector file: ${spec.file}`);

    const parsed = readJson(filePath);
    const value = getPathValue(parsed, spec.path);

    if (Array.isArray(value)) {
      assert(value.length >= spec.minVectors, `${spec.file} must contain >= ${spec.minVectors} vectors in ${spec.path.join('.')}; found ${value.length}`);
      messages.push(`${spec.file}:${spec.path.join('.')}=${value.length}`);
      continue;
    }

    if (value && typeof value === 'object') {
      const count = Object.keys(value as JsonObject).length;
      assert(count >= spec.minVectors, `${spec.file} must contain >= ${spec.minVectors} cases in ${spec.path.join('.')}; found ${count}`);
      messages.push(`${spec.file}:${spec.path.join('.')}=${count}`);
      continue;
    }

    throw new Error(`${spec.file} missing expected vector path ${spec.path.join('.')}`);
  }

  return messages;
}

function sqliteReadinessChecks(): string[] {
  assert(existsSync(OUTPUT_DB), `Missing SQLite bundle at ${OUTPUT_DB}. Run build-bundle first.`);

  const python = `
import json, sqlite3, sys

db_path = sys.argv[1]
required = set(json.loads(sys.argv[2]))
conn = sqlite3.connect(db_path)
cur = conn.cursor()
cur.execute("SELECT name FROM sqlite_master WHERE type IN ('table','view')")
existing = {row[0] for row in cur.fetchall()}
missing = sorted(required - existing)
if missing:
    raise SystemExit('missing tables: ' + ', '.join(missing))

cur.execute('SELECT COUNT(*) FROM places')
places = cur.fetchone()[0]
cur.execute('SELECT COUNT(*) FROM price_cards')
prices = cur.fetchone()[0]
cur.execute('SELECT COUNT(*) FROM phrases')
phrases = cur.fetchone()[0]
cur.execute('SELECT COUNT(*) FROM itineraries')
itins = cur.fetchone()[0]
cur.execute('SELECT COUNT(*) FROM tips')
tips = cur.fetchone()[0]
if min(places, prices, phrases, itins, tips) <= 0:
    raise SystemExit('one or more core tables are empty')

print(json.dumps({
    'places': places,
    'price_cards': prices,
    'phrases': phrases,
    'itineraries': itins,
    'tips': tips
}))
`;

  const output = execFileSync('python3', ['-c', python, OUTPUT_DB, JSON.stringify(REQUIRED_SQLITE_TABLES)], {
    encoding: 'utf8',
  }).trim();

  const parsed = JSON.parse(output) as {
    places: number;
    price_cards: number;
    phrases: number;
    itineraries: number;
    tips: number;
  };

  return [
    `places=${parsed.places}`,
    `price_cards=${parsed.price_cards}`,
    `phrases=${parsed.phrases}`,
    `itineraries=${parsed.itineraries}`,
    `tips=${parsed.tips}`,
  ];
}

function main(): void {
  console.log('🔍 Running offline readiness checks...');
  const contentChecks = contentReadinessChecks();
  const vectorChecks = vectorReadinessChecks();
  const sqliteChecks = sqliteReadinessChecks();

  console.log('\n✅ Content readiness');
  for (const line of contentChecks) {
    console.log(`  - ${line}`);
  }

  console.log('\n✅ Engine vector readiness');
  for (const line of vectorChecks) {
    console.log(`  - ${line}`);
  }

  console.log('\n✅ SQLite readiness');
  for (const line of sqliteChecks) {
    console.log(`  - ${line}`);
  }

  console.log('\n🎉 Offline readiness check passed.');
}

main();
