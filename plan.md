# Marrakech Tourist App (iOS + Android) — React Native Plan (Offline-First + Convex Phase 2)

## 1) Product thesis

This is a **paid, offline-first "confidence companion"** for first-time tourists in Marrakech (Morocco).
It replaces the need for multiple apps (maps, blogs, phrasebooks, pricing guesses) with one trusted guide.

- Know **what to do today** (curated, not overwhelming) — plus a 1-tap **My Day plan** that fits your time/budget.
- Know **what things should cost** (MAD ranges + negotiation scripts)
- Avoid **common tourist traps**
- Act with **cultural confidence** (etiquette + do/don't)
- Reduce **language friction** (Darija glossary + optional audio)
- Works **offline** as the default mode

- Instantly sanity-check any quoted price in the moment (**Quote → Action**)
- Set a **Home Base** (riad/hotel) and get an offline compass back to it
- Follow itineraries with **Route Cards** (next stop, distance, time, offline-friendly)

### Target users & moments (personas)

- **First-time visitors (1–4 days)** who want a clear plan without endless research.
- **Families / groups** who need "safe defaults" (hours, fees, etiquette, kid-friendly).
- **Budget travelers** who care most about fair prices + negotiation confidence.
- **Anxiety-prone travelers** who want reassurance, scripts, and "what to do if…" flows.

### Jobs-to-be-done (JTBD)

- "I'm here today—give me a realistic plan for the next 6–10 hours."
- "I'm being quoted a price—help me respond confidently and fairly."
- "I have no internet—help me navigate, communicate, and avoid common traps."

### Product principles (keep decisions consistent)

- **Curation over completeness** (small set, high confidence).
- **Offline-first UX** (no dead-ends offline; online is additive).
- **Short, actionable writing** (checklists, scripts, ranges, red flags).
- **Trust cues everywhere** (review dates + clear "staleness" messaging).

### Success metrics (so you can evaluate v1)

- Activation: % of new users who view ≥1 Price Card + save ≥1 item in first session
- Activation: % who complete "offline ready" setup (downloaded recommended packs OR explicitly choose "download later")
- Reliability: % who pass **Offline Readiness Check** in onboarding (integrity OK + core flows usable offline)
- Support load: # of users who open Diagnostics/Offline Readiness (proxy for "something feels broken")
- Trust: % who view Privacy/Permissions explainer (and do not churn immediately after)
- Retention: % returning on day 2 / day 7 (tourists are short-lived—optimize for day 2)
- Helpfulness: "Was this useful?" ≥80% positive on Price Cards

**Not** a reviews app (TripAdvisor/Yelp).
**Not** a generic directory (Google Maps).
It's the "locals' practical guide" you can trust.

---

## 2) Monetization

**Monetization options (choose one early):**

**Option A — Paid up-front (current plan):**
- Users pay once to download the app and get the full core experience.
- No free tier, no subscriptions, no daily limits.
- Target price: **$4.99–$9.99** (regional pricing enabled).
- Simplest implementation; no gating logic.

**Option B — Free download + one-time unlock (recommended for conversion):**
- Free offline preview pack (small but genuinely useful: 3 price cards + 5 places + 20 phrases + arrival checklist)
- One-time purchase unlocks full Marrakech content + all offline features
- Still: no subscriptions, no accounts, no ads, no data selling

**Why these models work for this app:**
- Acquisition is influencer/IG/FB-driven (value is pre-sold before install).
- First-time tourists want reliability, not experiments.
- Competitive research shows backlash against subscriptions and restrictive free tiers.

**What the app guarantees to the user:**
- Everything essential works offline after install/unlock.
- No surprise paywalls beyond the one-time unlock (if Option B).
- No account required.
- No ads. No data selling.

**Optional add-ons (only if clearly optional, not required):**
- Audio Pack (spoken Darija phrases, mini guides)
- Extra regions / day trips pack

**Important rule:**
- Core Marrakech experience must feel complete without any add-ons.

**Downloads screen:**
- Clear messaging on what's included vs optional packs (sizes, Wi‑Fi-only toggle).
- A simple **Downloads** screen (treat packs like a product surface):
  - Determinate progress (bytes + %) + per-pack state: queued → downloading → verifying → installing → ready (or failed)
  - Pause/resume/cancel + retry with clear error reasons (no ambiguous failures)
  - "Free space required" preflight + Wi‑Fi-only toggle + cellular confirmation for large packs
  - State persists across app restarts/process death so downloads reliably resume

---

## 3) Core features (what must ship)

### A) Explore places (landmarks, monuments, neighborhoods, shopping)

Curated entities with:

- Short description (skimmable)
- Neighborhood context (Medina, Gueliz, etc.)
- "Best time to go", time needed, entry fees (if applicable)
- Hours + **Open now** indicator (offline, when structured hours are available)
- **Expected cost range in MAD** + "last reviewed" date
- "Local tips" and "watch outs"
- **Not-a-tourist-trap cues (transparent):**
  - Badge: "Local pick" / "Mixed" / "Tourist-heavy"
  - Short explanation: "Why we recommend this" (1–3 bullets)
- Directions (open in Apple Maps / Google Maps)
- **Navigate (Medina-aware):**
  - If Offline Map Pack is installed: show offline walking route guidance
  - If not installed: explain and link to Downloads (never a blank map)
- Save / share (including a clean, screenshot-friendly "share card")
- **Related** (small, curated cross-links):
  - Relevant Price Cards (e.g., fees, taxi, nearby bargaining categories)
  - Useful Darija phrases (large-text driver mode when relevant)
  - Tips & safety items tied to this place (scams, etiquette, "watch outs")

### B) Eat (restaurants & cafés + what to order)

Curated list—not giant database.
For each place:

- Why it's worth it
- What to order / what to avoid
- Typical spend range (MAD) + last reviewed
- Hours + **Open now** indicator (offline, when structured hours are available)
- Tags: budget, rooftop, family-friendly, veg-friendly, etc.

### C) Prices & negotiation (the killer differentiator)

This is where the app earns its price.
Structured "Price Cards" for common tourist spend categories:

- Taxi fares (airport, short ride, night)
- Hammam (local vs tourist)
- Souk items (lanterns, spices, rugs, babouches, argan oil, etc.)
- Food & drinks (mint tea, tagine, fresh juice, pastries)
- Guides/tours/day trips
- SIM cards / eSIM guidance (high-level)

Each price card includes:

- **Expected MAD range** (with unit like *per ride / per person / per item*) + last reviewed
- **Related "Do this safely" links** (optional): curated places or safer alternatives when relevant
- **Provenance note** (how this range was derived) + optional seasonality tags
- **Confidence + volatility** indicator (helps users interpret how strict the range is, and triggers staleness warnings sooner for volatile categories)
- "What influences price"
- Negotiation scripts (simple phrases)
- "Red flags" + "what to do instead"
- Notes for different contexts (night / peak season)

#### Quote → Action (instant quote fairness check + what to say)

A fast tool for the exact high-stress moment tourists face: *"I was quoted X MAD—am I being overcharged, and what should I say?"*

**UX flow (works offline):**

1. User selects a category (Taxi / Hammam / Souk item / Guide / Food & drink / etc.)
2. The app suggests the most relevant **Price Card** (or user picks one)
3. User enters the quoted amount (MAD) (+ quantity if relevant, e.g., per person, per item, per km)
   - The UI always shows the unit to avoid apples-to-oranges comparisons.
4. Optional context toggles adjust the expected range (e.g., night, peak season, group size, distance tier)
5. Results screen shows:
   - **Fairness meter**: Low (confirm details) / Fair / High / Very High (with a confidence note)
   - **Expected range (adjusted)** + last reviewed + provenance
   - **Suggested counter-offer range** (polite + firm)
   - **Best 1–3 scripts** (Darija + English, + optional French for taxi/restaurant contexts)
   - If **Low**: "Confirm what's included" checklist + 1–2 clarification scripts
   - **If they won't budge**: "what to do instead" alternatives
   - **Compare quotes** (optional): keep 2–3 recent quotes for the same Price Card and show a quick comparison view

**Implementation details:**

- All logic is deterministic and on-device; no AI required.
- Add a small `pricingEngine` module:
- Inputs: `priceCard.expectedCostMAD`, `priceCard.unit`, `quoteMAD` (or `homeCurrencyAmount` + stored rate), optional `quantity`, selected `contextModifiers`
- Output: `{ adjustedRange, fairnessLevel, suggestedCounterRange, scripts, explanation, confidence }`
- Fairness heuristic (simple + explainable, tunable per card):
  - `Low` if `quoteMAD < adjustedMin * lowMultiplier` (default 0.75; override per card)
  - `Fair` if `quoteMAD <= adjustedMax`
  - `High` if `quoteMAD <= adjustedMax * highMultiplier`
  - `Very High` if `quoteMAD > adjustedMax * highMultiplier`
  - Where `highMultiplier` defaults to `1.25`, `lowMultiplier` defaults to `0.75`, but can be overridden per Price Card/category.
- Suggested counter range:
  - `counterMin = adjustedMin` (or slightly above in high-friction categories)
  - `counterMax = adjustedMax` (or `adjustedMax * 0.95`)
- Store the user's last 10 Quote → Action checks locally (recents) so they can quickly re-open.
- Extend PriceCard to include optional `lowMultiplier` and `inclusionsChecklist` (short bullets shown only when helpful)

**Data requirements:**

- Extend `PriceCard` to include optional `contextModifiers` (so you can adjust ranges without changing code), for example:
  - `id`: `"night"`, `"peak_season"`, `"group_3plus"`, `"airport_fixed_fare"`, etc.
  - `label`: shown in the UI
  - `factorMin/factorMax` or `addMin/addMax`: how the expected range changes
  - `notes`: optional explanation shown to the user

Implementation note: keep modifiers *small and explainable*—the goal is confidence, not false precision.

### D) Culture & etiquette (practical, short)

Skimmable, useful:

- Dress code suggestions (contexts)
- Tipping norms
- Photography etiquette
- Ramadan etiquette basics
- Mosques / religious spaces etiquette
- Friday customs
- Respectful behavior in souks

### E) Darija survival glossary (searchable; audio optional)

- Categories: greetings, taxi, directions, bargaining, food, emergencies
- Each phrase:
  - Darija in Arabic
  - Latin transliteration
  - English meaning
  - RTL display support (Arabic shown right-to-left; "show large text" mode for taxi drivers)
  - Optional audio playback
  - Optional: **"Used in" shortcuts** (links to relevant Price Cards / Tips / Arrival flows)
- Include **numbers** and bargaining essentials (very high utility)

### F) Itineraries (opinionated, day-by-day)

Examples:

- 1-day "first timer"
- 3-day "best of"
- Shopping day
- Food day
- Relaxed / family-friendly day

#### My Day (offline daily plan builder)

A lightweight planner that fulfills the core JTBD ("give me a realistic plan for the next 6–10 hours") without needing internet or AI.

**UX flow (offline):**
1. Pick your constraints: time available (2–10h), pace (relaxed/standard), budget (budget/mid/splurge), and interests (food, shopping, museums, gardens, hammam, etc.).
2. Choose a starting point:
   - Current location (optional, if permission granted)
   - Home Base (if set)
   - A neighborhood (manual selection)
3. The app builds a plan with 3–7 stops + suggested meal/drink breaks.
   - Avoids closed stops when structured hours are available
   - Prefers geographically coherent clusters (minimize backtracking)
   - Respects "best time to go" windows when provided (morning/afternoon/evening)
4. Tap "Start" to follow it via **Route Cards**. You can skip a stop and the plan reflows.

**Implementation approach:** deterministic `planEngine` using your curated content.
- Inputs: `availableMinutes`, `startPoint`, `interests[]`, `pace`, `budgetTier`
- Data: per-place `visitMinMinutes`/`visitMaxMinutes`, `bestTimeWindows`, structured hours (if present), tags, and optional `crowdLevel`/`kidFriendly` tags
- Travel-time model (offline): region clustering + simple travel-time estimates between regions (or tuned distance heuristics)
- Output: ordered `Plan` (a list of place ids + time blocks) suitable for Route Cards

This keeps the promise of "what should I do today?" even for users who never open the itineraries list.

#### My Trip (offline 1/2/3-day builder)

- Choose 1, 2, or 3 days
- Auto-group by area (Medina/Gueliz/etc.) to keep days walkable
- Drag-reorder stops (manual override)
- Export/share a clean itinerary card (image)

Each step links to places already in the app.

#### Route Cards (execute itineraries without getting lost)

For each itinerary (and any generated plan later), provide a **Route Card** view that helps users *do the plan* with minimal friction.

**Route Card UX:**

- "Route overview" screen:
  - list of stops in order
  - estimated total time (sum of stop times + walking estimates)
  - "Start route" button
- "Next stop" screen (the core):
  - big stop name + quick facts
  - **compass arrow + distance** to the next stop (offline)
  - rough "walk time" estimate (offline heuristic)
  - **Navigate** (offline within pack areas; online handoff optional)
  - "Recenter" button (explicit; helps with GPS drift)
  - "GPS is weak here" hint state (calm guidance: keep walking 20m then re-check)
  - optional "Open in maps" button (online-only)
  - "Mark as done" → advances to next stop
- Optional: "route hints" for tricky legs (short text written by you)

**Medina Mode (fallback UX):**
- If GPS accuracy is poor or heading is unstable:
  - simplify UI (direction + distance + landmark hint text)
  - one-tap "Ask for directions" phrase card (large text)

**Implementation details:**

- Define **Routing Capability Levels** (to avoid "half-working" UX):
  - Level 0: compass + distance + landmark hint (always available)
  - Level 1: offline map display + user dot + bearing line (no routing)
  - Level 2: offline route polyline from bundled walking graph (no turn-by-turn)
  - Level 3: optional future turn-by-turn (only if reliability is proven)
- Provide point-to-point walking guidance **within installed offline map pack areas** (Medina core first).
- Cache per-leg route results locally (routeId + stepIndex → polyline + distance + ETA) for stability and performance
- Fallback when routing is unavailable: Level 0 + short "Medina Mode" hint text + one-tap "Ask for directions" phrase card
- For each leg, compute straight-line distance with Haversine and estimate walk time with tuned speeds:
  - default: ~4.5 km/h (outside medina)
  - medina multiplier: slower (dense paths)
- Use the same heading/bearing helpers as Home Base compass to render the arrow.
- Persist route progress locally so the user can leave the app and come back:
  - `{ routeId, itineraryId, currentStepIndex, startedAt }`

**Data requirements:**

- Add optional fields to `Itinerary.steps`:
  - `estimatedStopMinutes?: number`
  - `routeHint?: string` (shown only in Route mode)

### G) Tips & safety (confidence builder)

- Common scams (henna, faux guides, "helpful" strangers, etc.)
- How to say "no" politely
- Cash/ATM basics
- Emergency numbers and what to do (high-level)
- "What to do if…" quick guides (lost phone, taxi issues, etc.)

### H) Arrival mode + quick tools (high perceived value)

An opinionated "first hours in Marrakech" flow that works fully offline:

- **Airport arrival checklist:** taxi expectations, typical fare ranges, polite refusal scripts
- **SIM / eSIM checklist:** what to ask for, what to avoid (high-level)
- **Cash / ATM checklist:** what to do if an ATM fails, small-bills reminder
- **Medina orientation tips:** "how to handle 'helpful' strangers", staying calm in crowds

Offline utility tools (simple, not gimmicky):

- **MAD ↔ home currency converter** (manual rate + last-updated timestamp)
- **Tipping quick guide** (common situations + ranges)
- **Bargaining calculator** (start price → target range; show "good deal / okay / too high")
- **Home Base compass** (set your riad/hotel; offline arrow + distance + taxi-driver card)

#### Home Base compass (offline "get me back")

Users set a single "Home Base" once (their riad/hotel). Then the app can always show:

- **Compass arrow** pointing to Home Base + distance (meters/km)
- Quick actions:
  - "Copy address / name"
  - "Show taxi driver" (large Arabic/Latin destination + simple phrase)
  - "Open directions" (online-only, optional)

**Implementation details (React Native):**

- Store `homeBase` locally in `user.db` as `{ name, lat, lng, notes? }`.

**Location (react-native-geolocation-service or expo-location):**
- Use `Geolocation.getCurrentPosition()` for initial fix when screen opens (shows "last updated" time)
- Use `Geolocation.watchPosition()` **only while compass screen is visible** (start in `useEffect`, clear on unmount)
- Configure `enableHighAccuracy: true` for navigation; use `false` for general location
- Set appropriate `timeout` and `maximumAge` values for offline-first behavior
- Add a safety timeout so location updates stop automatically after X minutes if the screen is left open (prevents silent battery drain)
- Provide a manual "Refresh location" button

**Compass heading (react-native-sensors or expo-sensors):**
- Use `magnetometer` subscription for compass heading; fallback to "bearing only" if unavailable
- Subscribe to magnetometer **only while compass screen is visible** (start in `useEffect`, unsubscribe on unmount)
- Throttle UI redraw (arrow rotation) to a fixed cadence (e.g., 10–20 Hz) using `setUpdateIntervalForType()`
- Expose a "Heading confidence" state (good / weak / unavailable) that can trigger simplified guidance when sensors are unreliable

**Compute (shared TypeScript logic):**
- `distanceMeters = haversine(current, homeBase)`
- `bearingDegrees = bearing(current, homeBase)`
- `relativeAngle = bearingDegrees - headingDegrees` (for rotating the arrow)

- Privacy: no backend, no background tracking; location used only on-device when the compass/route screens are open.

---

## 4) UX & navigation (simple, premium)

### First-run onboarding (60–90 seconds, skippable, re-runnable)

Goal: prevent offline dead-ends and build trust immediately.

1. Language + home currency
2. "Offline promise" screen:
   - What works offline (almost everything)
   - What needs internet (optional updates, optional downloads)
3. Pick offline downloads (district-based packs; sizes shown; Wi‑Fi-only toggle)
3b. **Offline Readiness Check** (fast local validation + "Test in Airplane Mode" checklist)
4. Quick demo entry: Quote → Action (Taxi example)
5. Privacy + Permissions explainer:
   - No accounts required
   - No ads / no data selling
   - Location is optional and only used on-device
   - Request location only when user taps Near Me / Go Home / Navigate
   - Request **foreground/"When in Use"** location only (never background location in v1)
   - Show a short pre-permission explanation so the system prompt is never surprising; denial path must keep the app usable

### Bottom tabs (recommended)

1. **Home**
2. **Explore**
3. **Eat**
4. **Prices**
5. **More** (Darija, Itineraries, Tips, Culture, Settings)

### Platform-native navigation rules (non-negotiable)

These rules prevent "it feels off" moments that undermine trust in a paid utility app.

**React Native (both platforms)**
- Use React Navigation with a bottom tab navigator (`@react-navigation/bottom-tabs`) for top-level navigation
- Use native stack navigator (`@react-navigation/native-stack`) for drill-down flows to get native push/pop animations
- Preserve interactive swipe-back gesture on iOS (enabled by default with native-stack)
- Use modals only for focused, temporary tasks (filters, pickers), not primary navigation
- Follow Back/Up principles: hardware back button on Android pops history; never exits the app unexpectedly
- Use `react-native-screens` for native screen management and better performance
- Test gesture navigation compatibility on both platforms

### Visual design language (Marrakech identity)

The app should feel unmistakably rooted in Marrakech while staying modern and readable.

- Use **Islamic geometric patterns** as a recurring motif in surfaces and separators (cards, section headers, onboarding backgrounds, loading/skeleton states, share cards).
- Keep patterns subtle and low-contrast behind content so legibility always wins over decoration.
- Build a color system anchored in **Marrakech terracotta tones** (warm clay/earth palette), supported by neutrals and a small number of accent colors for status/action states.
- Prefer warm terracotta gradients/tints for empty states, onboarding atmosphere, and hero surfaces; avoid cold/default generic palettes.
- Define these choices as design tokens on both platforms (color, spacing, corner radius, pattern opacity) so iOS and Android remain visually consistent.
- Respect accessibility with this style: maintain contrast targets, avoid pattern noise behind body text, and ensure dark mode keeps the same identity (warm earthy base, not generic blue/purple dark themes).

### Home (paid-app feel)

- "What do you need right now?" quick actions:
  - Taxi prices
  - **My Day** (build a realistic plan for the next 6–10 hours)
  - **Quote → Action** (check a quoted price)
  - Souk bargaining
  - Arrival mode
  - **Go Home** (Home Base compass)
  - Currency converter
  - Must-see landmarks
  - Phrasebook
  - Continue route (shown only if an active Route Card is running)
- **My Day** plan builder (constraints → generated plan → Route Cards)
- **Today's Tip** (rotating)
- **Phrase of the Day**
- Optional: Weather (online-only, cached; hide gracefully offline)
- "Saved" + "Recently viewed"

### Key UX mechanics (small but high impact)

- Map/List toggle in Explore
- Fast global search across places + prices + phrases + tips
- Map screen includes a clear search bar + "Navigate to…" entrypoint (avoid "I can't find directions" confusion)
- Deep links: shared items open directly to the correct Place/PriceCard screen
- One-tap entrypoints for high-stress moments (Quote → Action, Go Home)
- "Active route" banner when following a Route Card
- Favorites + recents
- "Quick fact chips" on detail screens (hours, fee, time needed, neighborhood)
- "Open now" chips + filter (uses structured hours; falls back gracefully)
- Clear offline state UX ("No internet? Core guide still works.")
- Language support: **localized UI** (EN/FR first; Arabic UI later) + locale-aware dates/numbers/currency formatting
- RTL readiness: ensure Arabic text renders correctly (alignment, numerals, shaping) in phrasebook + taxi-driver cards
- Dark mode
- Accessibility: dynamic type, contrast, touch targets (iOS hit targets ≥44×44 pt; Android hit targets ≥48×48 dp) + correct focus order for VoiceOver/TalkBack

#### Loading, progress, and error UX (standardized)

Every screen must follow the same state model so the app never feels "stuck" or inconsistent:

- `loading` → show skeleton/placeholder content (no blank screens)
- `content` → normal state
- `refreshing` → keep content visible; show subtle progress
- `offline` → show cached content + clear "what still works" message
- `error` → explain what failed + provide a next action (Retry / Downloads / Work offline)

Progress indicator rules:
- Prefer **determinate** progress for downloads/imports (bytes + % + pause/resume/cancel).
- Use **indeterminate** spinners only for short unknown-duration work; if >10s, show recovery actions.

---

## 5) Content strategy (this is the product)

Your advantage is **trusted curation + pricing confidence**.
You are not competing on "more listings". You are competing on:

- clearer advice
- more practical info
- better structure
- offline usability
- pricing + scripts + "watch outs"

### Content scope for a strong v1

- 20–40 places (high-quality, well-written)
- 15–25 price cards (high-impact categories)
- 50–150 Darija phrases
- 5–10 itineraries
- Culture/tips: concise but complete essentials

### Localization strategy (keep it manageable)

- v1 recommendation: ship **English content** + **localized UI** (EN/FR).
- Add French content as a v1.x content update once the editorial pipeline is stable.
- Always keep a safe fallback: if a translation is missing, show English rather than blanks.

### Content operations (treat content like releases)

Minimum pipeline (even if manual at first):

- Single source of truth (repo or lightweight CMS export)
- `shared/content/` is the canonical source for most product data (places, prices, phrases, itineraries, culture, tips)
- Schema validation (TypeScript + runtime validation via Zod/JSON Schema) before shipping bundles
  - enforce invariants: unique ids, valid coordinates, price min<=max, required `updatedAt`, no missing referenced ids
- Reference validation:
  - itinerary steps reference valid place/price ids
  - internal links are not broken
- Integration requirement (must pass every content release):
  - build `content.db` from `shared/content/`
  - bundle that DB into both apps (`ios/.../Resources/SeedData/content.db` and `android/.../assets/seed/content.db`)
  - verify repositories/screens on iOS + Android render the updated content correctly
- Editorial checks:
  - every price card has updatedAt + provenance note
  - every place has `reviewedAt` (and `hours.verifiedAt` if hours are present)
  - places with hours include `hours.verifiedAt` (so you can show "hours last checked" and staleness messaging)
  - staleness warnings appear when appropriate
- Generate a small **content changelog** per release (used for "What's new" in-app + store update notes)
- Asset budgeting:
  - image compression + size caps
  - audio pack size displayed before download

### Trust UI for prices + places

- Every price range shows:
  - "Last reviewed: YYYY-MM-DD"
  - Optional warning if old (e.g., > 6 months):
    - "Prices may have changed"

- Every place detail shows (field-level trust):
  - "Verified: YYYY-MM-DD" (editor check)
  - Hours verified date (if structured hours)
  - Fees verified date (if fees shown)
  - Staleness warnings based on per-field TTL (hours usually stricter than descriptions)
  - Place status: Open / Temporarily closed / Permanently closed (with note if applicable)

Add 2 lightweight credibility boosters:

- **Provenance note** (1 short line): "based on recent quotes in 2026-01" / "posted fare" / "local hammam vs tourist hammam"
- **Report outdated info**: simple button ("Was this accurate?" yes/no) with optional note.
  - v1: store locally in an offline "feedback outbox"
    - quick reasons: closed/moved/hours wrong/price wrong/tourist-trap/other
  - phase 2: upload outbox when online (no account required)

---

## 6) Technical stack (mobile)

### Why React Native?

This app is built with React Native for these reasons:

1. **Single codebase** — One TypeScript codebase for both iOS and Android. Faster iteration, consistent behavior, and lower maintenance burden for a small team.

2. **Mature ecosystem** — React Native has a robust ecosystem for all app needs: navigation, storage, maps, sensors, and IAP. Libraries like `react-native-sqlite-storage` and `react-native-sensors` provide reliable native access.

3. **Premium feel is achievable** — With `react-native-screens`, native stack navigators, and careful attention to performance, React Native apps can feel as polished as native apps. Many successful paid apps use React Native.

4. **Shared business logic** — All engines (pricing, planning, routing, geo) are written once in TypeScript and work identically on both platforms.

5. **Faster development** — Hot reload and a single codebase mean faster feature development and bug fixes.

**Tradeoffs acknowledged:**
- Some native module setup required for sensors/location
- Performance-critical views may need optimization (compass animation, map rendering)
- IAP requires careful testing with both StoreKit and Play Billing wrappers

### React Native platform requirements

**React Native version:** 0.73+ (New Architecture ready)

**iOS**
- Minimum deployment: iOS 14.0
- **Build toolchain:** Xcode 15+, keep current with App Store submission requirements

**Android**
- Minimum SDK: 26 (Android 8.0)
- **Target SDK:** align with Google Play policy deadlines (e.g., API 34+ for submissions as required)

### Core architecture

**Architecture pattern:**
- **Feature-based folder structure** with clean separation
- **Repository pattern** for data access
- **React Context + hooks** for dependency injection and state management
- **Unidirectional data flow** (state flows down, actions flow up)

### React Native stack

**Navigation:**
- `@react-navigation/native` + `@react-navigation/native-stack` for native-feeling navigation
- `@react-navigation/bottom-tabs` for tab navigator
- `react-native-screens` for native screen management

**Localization:**
- `react-i18next` for UI localization (EN/FR)
- `react-native-localize` for device locale detection

**Maps:**
- `react-native-maps` for online map display
- Offline map packs: `@maplibre/maplibre-react-native` with MBTiles/vector tiles
- Offline routing (Medina core): on-device routing using a bundled walking graph inside the pack

**Location & Sensors:**
- `react-native-geolocation-service` (or `expo-location`) for GPS
- `react-native-sensors` (or `expo-sensors`) for magnetometer/compass heading

**Sharing:**
- `react-native-share` for native share sheets

**Image rendering:**
- `react-native-view-shot` for share card screenshots

**Database:**
- `react-native-sqlite-storage` (or `op-sqlite` for better performance) for SQLite with FTS5 support
- Same two-DB architecture: `content.db` (read-only) + `user.db` (user state)

**Networking:**
- `axios` or native `fetch` for HTTP requests
- `react-native-background-downloader` for resumable background downloads

**Storage:**
- `react-native-fs` for file system access
- `@react-native-async-storage/async-storage` for small settings only

**IAP:**
- `react-native-iap` for both StoreKit and Play Billing

**UI Components:**
- Custom components following platform conventions
- `react-native-reanimated` for smooth animations (compass arrow, transitions)
- `react-native-gesture-handler` for gesture support

### State & data

React Native uses the same data architecture on both platforms:

- **Two SQLite database files:**
  - `content.db` (mostly read-only): places, price cards, phrases, tips/articles, FTS tables
  - `user.db` (write-heavy): favorites, recents, Home Base, active route progress, downloads metadata
- Why two DBs: content updates become a fast **file swap** (less risk of corrupting user state, and no long migration).
- Preferences storage for tiny settings only:
  - `@react-native-async-storage/async-storage` for both platforms
  - Settings: language, exchange rate, Wi‑Fi-only downloads

**Offline content store:**
- Ship bundled seed content in app assets (`ios/MarrakechGuide/Resources/` and `android/app/src/main/assets/`)
- On first run, copy seed `content.db` to writable location using `react-native-fs` (**FTS tables must ship prebuilt**; if a rebuild is ever required, do it in the background and keep core search usable)
- Cache updated bundles; verify; then:
  - (Preferred) replace `content.db` with a prebuilt, verified DB file for that version
  - Atomic swap with rollback support

- Activation must be exclusive and crash-safe:
  - Close all SQLite connections via the db wrapper
  - Use `RNFS.moveFile()` for atomic rename (temp file + rollback)
  - Reopen connections after swap

**Non-blocking startup rule:**
- Never block app startup on downloads/indexing/import
- If an update/pack is incomplete, fall back to last-known-good content and show a small banner
- Avoid infinite spinners: every download/import state must have timeout + retry + cancel

### Downloads & storage (offline packs)

Treat downloads like a mini product: predictable, resumable, and easy to manage.

**React Native (both platforms):**
- Use `react-native-background-downloader` for resumable background downloads
- Resume data stored for pause/resume (library handles Range headers)
- Preflight: check available disk space via `react-native-fs` (`RNFS.getFSInfo()`)
- Use `@react-native-community/netinfo` for network state and Wi-Fi-only toggle

**Packs are a product surface:**
- Pack manifest supports **dependencies** (e.g., routing_graph depends on medina_map_tiles)
- "Recommended downloads" (based on selected itinerary / trip length / Home Base region)
- Verify downloads (sha256 from manifest) before importing/using assets
  - Use `react-native-crypto` or native module for sha256 verification
- **Signed manifest (recommended even in v1 if any packs are hosted remotely):** Ed25519 signature with pinned public key
- Safe install pipeline: download → verify → unpack to temp → validate → atomic move → register
- Rollback: keep last-known-good pack version; auto-revert on validation failure
- Cache eviction policy:
  - Show total space used by packs
  - Allow uninstall per pack
  - Keep the last 1–2 content versions for rollback, then auto-clean older ones
- Backup policy (critical for large offline packs):
  - **iOS:** exclude re-downloadable files from iCloud backup using `RNFS.pathForGroup()` or setting `NSURLIsExcludedFromBackupKey`
  - **Android:** configure backup rules in `AndroidManifest.xml` to exclude large packs
  - Backup only user intent/state (`user.db` + small settings)

**Pack types (district-based + utility-based):**
- Base Pack (ships in-app)
- Medina Pack (offline map + routing graph + core POIs)
  - Declare explicit subcomponents: tiles + routing graph + POIs (lets you diagnose failures clearly)
- Gueliz Pack (offline POIs + map)
- Day Trips Pack (offline guides; optional map)
- Audio Pack (phrases + mini guides)
- Images Pack (hi-res)

**Data saver UX:**
- Show pack sizes up front + "Wi‑Fi only" toggle
- Allow cellular download with explicit confirmation for large packs

### Search

- **SQLite full-text search** for fast, consistent on-device search (FTS5 preferred):
  - FTS across places, price cards, phrases, tips/articles
  - Add a shared **normalization spec** (Arabic/Latin/digits) applied at index + query time
  - Index `aliases` aggressively (high leverage for tourists)
  - Add lightweight ranking boosts: exact match > alias match > prefix match > contains
  - Add "Did you mean?" suggestions using aliases + prefix candidates (offline, deterministic)
  - `react-native-sqlite-storage` or `op-sqlite` support FTS5 on both platforms
  - FTS tables must be prebuilt in `content.db` (no runtime index creation)

---

## 7) Architecture (offline-first, no backend required for v1)

### v1 (no backend)

**React Native Architecture (TypeScript)**
```
src/
├─ App.tsx (entry point, providers, navigation setup)
├─ core/
│   ├─ database/
│   │   ├─ ContentDatabase.ts (SQLite wrapper, read-only content)
│   │   ├─ UserDatabase.ts (SQLite wrapper, user state)
│   │   ├─ DatabaseManager.ts (connection management, atomic swap)
│   │   └─ migrations/
│   ├─ repositories/
│   │   ├─ PlaceRepository.ts
│   │   ├─ PriceCardRepository.ts
│   │   ├─ PhraseRepository.ts
│   │   ├─ ItineraryRepository.ts
│   │   ├─ FavoritesRepository.ts
│   │   └─ RecentsRepository.ts
│   ├─ services/
│   │   ├─ LocationService.ts (geolocation wrapper)
│   │   ├─ HeadingService.ts (magnetometer/compass)
│   │   ├─ DownloadService.ts (background downloads)
│   │   ├─ ContentSyncService.ts (bundle verification + swap)
│   │   └─ SearchService.ts (FTS5 queries)
│   └─ engines/
│       ├─ PricingEngine.ts (Quote → Action logic)
│       ├─ PlanEngine.ts (My Day offline builder)
│       ├─ RouteEngine.ts (leg estimates + progress)
│       └─ GeoEngine.ts (haversine, bearing)
├─ features/
│   ├─ home/
│   │   ├─ HomeScreen.tsx
│   │   ├─ useHome.ts (hook for state/logic)
│   │   └─ components/
│   ├─ explore/
│   │   ├─ ExploreScreen.tsx
│   │   ├─ PlaceListScreen.tsx
│   │   ├─ PlaceMapScreen.tsx
│   │   ├─ PlaceDetailScreen.tsx
│   │   └─ useExplore.ts
│   ├─ eat/
│   │   ├─ EatScreen.tsx
│   │   └─ useEat.ts
│   ├─ prices/
│   │   ├─ PricesScreen.tsx
│   │   ├─ PriceCardDetailScreen.tsx
│   │   └─ usePrices.ts
│   ├─ quoteAction/
│   │   ├─ QuoteActionScreen.tsx
│   │   ├─ FairnessMeter.tsx
│   │   └─ useQuoteAction.ts
│   ├─ homeBase/
│   │   ├─ HomeBaseSetupScreen.tsx
│   │   ├─ GoHomeScreen.tsx
│   │   ├─ CompassArrow.tsx
│   │   └─ useHomeBase.ts
│   ├─ myDay/
│   │   ├─ MyDayScreen.tsx
│   │   ├─ ConstraintPicker.tsx
│   │   └─ useMyDay.ts
│   ├─ routeCards/
│   │   ├─ RouteOverviewScreen.tsx
│   │   ├─ NextStopScreen.tsx
│   │   └─ useRoute.ts
│   ├─ phrasebook/
│   │   ├─ PhrasebookScreen.tsx
│   │   ├─ PhraseDetailScreen.tsx
│   │   └─ usePhrasebook.ts
│   ├─ search/
│   │   ├─ SearchScreen.tsx
│   │   └─ useSearch.ts
│   ├─ more/
│   │   ├─ MoreScreen.tsx
│   │   ├─ CultureScreen.tsx
│   │   ├─ TipsScreen.tsx
│   │   └─ ItinerariesScreen.tsx
│   └─ settings/
│       ├─ SettingsScreen.tsx
│       ├─ DownloadsScreen.tsx
│       └─ DiagnosticsScreen.tsx
├─ shared/
│   ├─ components/
│   │   ├─ Card.tsx
│   │   ├─ Chip.tsx
│   │   ├─ PriceTag.tsx
│   │   ├─ MapPreview.tsx
│   │   ├─ SearchBar.tsx
│   │   ├─ SectionHeader.tsx
│   │   ├─ ShareCardRenderer.tsx
│   │   └─ OfflineBanner.tsx
│   ├─ hooks/
│   │   ├─ useDatabase.ts
│   │   ├─ useLocation.ts
│   │   ├─ useNetworkState.ts
│   │   └─ useStorage.ts
│   ├─ models/
│   │   ├─ Place.ts
│   │   ├─ PriceCard.ts
│   │   ├─ GlossaryPhrase.ts
│   │   ├─ Itinerary.ts
│   │   ├─ Plan.ts
│   │   └─ UserSettings.ts
│   ├─ context/
│   │   ├─ DatabaseContext.tsx
│   │   ├─ SettingsContext.tsx
│   │   └─ LocationContext.tsx
│   ├─ theme/
│   │   ├─ colors.ts
│   │   ├─ typography.ts
│   │   └─ spacing.ts
│   └─ utils/
│       ├─ formatters.ts
│       ├─ constants.ts
│       └─ i18n.ts
├─ navigation/
│   ├─ RootNavigator.tsx
│   ├─ TabNavigator.tsx
│   └─ types.ts
└─ locales/
    ├─ en.json
    └─ fr.json

ios/
├─ MarrakechGuide.xcodeproj
├─ MarrakechGuide/
│   ├─ AppDelegate.mm
│   ├─ Info.plist
│   └─ Resources/
│       ├─ SeedData/ (bundled content.db)
│       └─ Audio/
└─ Podfile

android/
├─ app/
│   ├─ build.gradle
│   ├─ src/main/
│   │   ├─ AndroidManifest.xml
│   │   ├─ java/com/marrakechguide/
│   │   │   └─ MainActivity.kt
│   │   ├─ res/
│   │   └─ assets/
│   │       └─ seed/ (bundled content.db)
└─ build.gradle
```

**Rule:** The app remains fully useful without internet.

---

## 8) Phase 2 backend: Convex (for updates + sync, not dependency)

Convex is added to:

- update content without app releases
- optionally sync favorites/bookmarks across devices (if you add auth)
- manage content with a lightweight admin workflow
- optionally ship a small curated "What's on this week" events feed (online-first + cached; never required)

### What Convex should store

**Content tables (curated):**

- `places`
- `priceCards`
- `glossaryPhrases`
- `cultureArticles`
- `itineraries`
- `tips`
- `events` (phase 2): small curated weekly list with timestamps + expiration

**Versioning:**

- `contentVersions` (latest version + release notes + rollout rules)
  - include: `latest`, `releasedAt`, `releaseNotesByLocale`, `minSupportedAppVersion`, `rolloutPercent`

**Optional user state (if you do auth):**

- `userState` (favorites, bookmarks, downloads metadata)

**Feedback (high leverage for trust):**

- `feedback` (contentId, type, note, createdAt, appVersion, locale; no account required)

### Content sync approach (keep it robust + simple)

Two good approaches:

**Option A — Bundle-based (simplest)**

- Convex stores a `contentBundle` JSON for each version (or latest only)
- App checks `contentVersions.latest`
- If newer, downloads bundle and replaces cached content
- Rebuild local search index

Pros: easiest, least code, safest.
Cons: bigger downloads (still fine if curated).

**Option B — Incremental diffs (more complex)**

- App pulls updated docs since last version
- Writes updates to local cache
- Rebuild index

Pros: smaller updates.
Cons: more edge cases.

**Recommendation:** Start with **bundle-based**.

**Events approach (phase 2, optional):**
- Small JSON feed with `expiresAt` so stale events disappear automatically
- Cache last successful fetch so it's usable briefly offline (with "Last updated" label)

### Hardening (strongly recommended once *any* remote downloads ship — packs or updates)

- Add a **signed content manifest**:
  - manifest contains: `version`, `locale`, `bundleUrl`/`dbUrl`, `sizeBytes`, `sha256`, `releasedAt`, `minSupportedAppVersion`, `expiresAt`, `signature`
  - signature: Ed25519 (app ships with pinned public key; reject unsigned/expired manifests)
  - replay protection: store the highest accepted `releasedAt` and do not accept older manifests unless explicitly allowed (prevents downgrade attacks)
  - app verifies signature **before** download/import, then verifies sha256 **after** download and **before** activation
- **Atomic import + rollback**:
  - download → verify → **swap in a new content DB file** → keep previous version for rollback (fallback: import+swap tables)
- **Staged rollout**:
  - allow a rollout percentage / "beta channel" to catch bad releases early

### Assets (images/audio)

- v1: ship a small set in-app (best offline experience)
- phase 2:
  - host assets on a CDN/object store (S3/Cloudflare R2/etc.)
  - store URLs in Convex
  - download audio packs on demand and cache locally

Important: ensure asset URLs are versioned and match the content bundle version to avoid "missing audio/image" issues.

---

## 9) Data model (shared schema, TypeScript implementations)

### Shared JSON schema (content authoring)

Content is authored in JSON with a shared schema, then bundled into SQLite.
React Native uses the same database schema and content bundles on both platforms.

### Unify "place-like" entities

Landmarks, restaurants, shops, markets can share a base shape.

**Place** (SQLite table: `places`)

| Column | Type | Notes |
|--------|------|-------|
| `id` | TEXT PK | |
| `name` | TEXT | |
| `aliases` | TEXT | JSON array of alternate spellings/names (optional but high leverage) |
| `region_id` | TEXT | pack/district id (e.g., "medina_core", "gueliz") |
| `category` | TEXT | "landmark", "museum", "garden", "neighborhood", "restaurant", "cafe", "shopping", etc. |
| `short_description` | TEXT | |
| `long_description` | TEXT | nullable |
| `reviewed_at` | TEXT | YYYY-MM-DD, nullable |
| `status` | TEXT | "open" / "temporarily_closed" / "permanently_closed" |
| `status_note` | TEXT | nullable (e.g., renovation, moved) |
| `confidence` | TEXT | "high", "medium", "low", nullable |
| `tourist_trap_level` | TEXT | "low" / "mixed" / "high" |
| `why_recommended` | TEXT | JSON array; short bullets |
| `neighborhood` | TEXT | nullable |
| `address` | TEXT | nullable |
| `lat` | REAL | nullable |
| `lng` | REAL | nullable |
| `hours_text` | TEXT | always shown |
| `hours_timezone` | TEXT | nullable |
| `hours_weekly` | TEXT | JSON array, nullable; enables "Open now" |
| `hours_exceptions` | TEXT | JSON array, nullable (Ramadan/holidays/one-off closures) |
| `hours_verified_at` | TEXT | nullable |
| `hours_stale_after_days` | INTEGER | nullable; default by category |
| `fees_min_mad` | INTEGER | nullable |
| `fees_max_mad` | INTEGER | nullable |
| `fees_notes` | TEXT | nullable |
| `expected_cost_min_mad` | INTEGER | nullable |
| `expected_cost_max_mad` | INTEGER | nullable |
| `expected_cost_notes` | TEXT | nullable |
| `expected_cost_updated_at` | TEXT | nullable |
| `expected_cost_stale_after_days` | INTEGER | nullable; default by category |
| `visit_min_minutes` | INTEGER | nullable |
| `visit_max_minutes` | INTEGER | nullable |
| `best_time_to_go` | TEXT | nullable (human-readable) |
| `best_time_windows` | TEXT | JSON array, nullable (machine: "morning"/"afternoon"/"evening") |
| `tags` | TEXT | JSON array |
| `local_tips` | TEXT | JSON array |
| `scam_warnings` | TEXT | JSON array |
| `do_and_dont` | TEXT | JSON array |
| `images` | TEXT | JSON array of asset refs or URLs |
| `related_links` | TEXT | JSON array (optional, authoring-time convenience; compiled to content_links) |

**TypeScript Model (React Native)**
```typescript
// src/shared/models/Place.ts

export type PlaceCategory =
  | 'landmark'
  | 'museum'
  | 'garden'
  | 'neighborhood'
  | 'restaurant'
  | 'cafe'
  | 'shopping';

export type Confidence = 'high' | 'medium' | 'low';

export type PlaceStatus = 'open' | 'temporarily_closed' | 'permanently_closed';

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface WeeklyHours {
  day: number; // 0-6 (Sunday-Saturday)
  open: string; // "09:00"
  close: string; // "18:00"
}

export interface Place {
  id: string;
  name: string;
  aliases: string[];
  regionId: string;
  category: PlaceCategory;
  shortDescription: string;
  longDescription: string | null;
  reviewedAt: string | null; // ISO date
  status: PlaceStatus;
  statusNote: string | null;
  confidence: Confidence | null;
  touristTrapLevel: 'low' | 'mixed' | 'high';
  whyRecommended: string[];
  neighborhood: string | null;
  address: string | null;
  location: Coordinate | null;
  hoursText: string | null;
  hoursTimezone: string | null;
  hoursWeekly: WeeklyHours[] | null;
  hoursExceptions: object[] | null;
  hoursVerifiedAt: string | null;
  hoursStaleAfterDays: number | null;
  feesMinMad: number | null;
  feesMaxMad: number | null;
  feesNotes: string | null;
  expectedCostMinMad: number | null;
  expectedCostMaxMad: number | null;
  expectedCostNotes: string | null;
  expectedCostUpdatedAt: string | null;
  visitMinMinutes: number | null;
  visitMaxMinutes: number | null;
  bestTimeToGo: string | null;
  bestTimeWindows: string[] | null;
  tags: string[];
  localTips: string[];
  scamWarnings: string[];
  doAndDont: string[];
  images: string[];
}

// Helper to map SQLite row to Place object
export function mapRowToPlace(row: any): Place {
  return {
    id: row.id,
    name: row.name,
    aliases: JSON.parse(row.aliases || '[]'),
    regionId: row.region_id,
    category: row.category as PlaceCategory,
    shortDescription: row.short_description,
    longDescription: row.long_description,
    reviewedAt: row.reviewed_at,
    status: row.status as PlaceStatus,
    statusNote: row.status_note,
    confidence: row.confidence as Confidence | null,
    touristTrapLevel: row.tourist_trap_level,
    whyRecommended: JSON.parse(row.why_recommended || '[]'),
    neighborhood: row.neighborhood,
    address: row.address,
    location: row.lat && row.lng ? { lat: row.lat, lng: row.lng } : null,
    hoursText: row.hours_text,
    hoursTimezone: row.hours_timezone,
    hoursWeekly: row.hours_weekly ? JSON.parse(row.hours_weekly) : null,
    hoursExceptions: row.hours_exceptions ? JSON.parse(row.hours_exceptions) : null,
    hoursVerifiedAt: row.hours_verified_at,
    hoursStaleAfterDays: row.hours_stale_after_days,
    feesMinMad: row.fees_min_mad,
    feesMaxMad: row.fees_max_mad,
    feesNotes: row.fees_notes,
    expectedCostMinMad: row.expected_cost_min_mad,
    expectedCostMaxMad: row.expected_cost_max_mad,
    expectedCostNotes: row.expected_cost_notes,
    expectedCostUpdatedAt: row.expected_cost_updated_at,
    visitMinMinutes: row.visit_min_minutes,
    visitMaxMinutes: row.visit_max_minutes,
    bestTimeToGo: row.best_time_to_go,
    bestTimeWindows: row.best_time_windows ? JSON.parse(row.best_time_windows) : null,
    tags: JSON.parse(row.tags || '[]'),
    localTips: JSON.parse(row.local_tips || '[]'),
    scamWarnings: JSON.parse(row.scam_warnings || '[]'),
    doAndDont: JSON.parse(row.do_and_dont || '[]'),
    images: JSON.parse(row.images || '[]'),
  };
}
```

**PriceCard** (SQLite table: `price_cards`)

| Column | Type | Notes |
|--------|------|-------|
| `id` | TEXT PK | |
| `title` | TEXT | e.g., "Taxi: Medina short ride" |
| `category` | TEXT | "taxi", "hammam", "souks", "food", "guides", etc. |
| `unit` | TEXT | "per ride", "per person", "per item", nullable |
| `volatility` | TEXT | "low", "medium", "high", nullable |
| `confidence` | TEXT | nullable |
| `expected_cost_min_mad` | INTEGER | |
| `expected_cost_max_mad` | INTEGER | |
| `expected_cost_notes` | TEXT | nullable |
| `expected_cost_updated_at` | TEXT | |
| `what_influences_price` | TEXT | JSON array |
| `negotiation_scripts` | TEXT | JSON array of {darijaLatin, arabic?, french?, english} |
| `red_flags` | TEXT | JSON array |
| `what_to_do_instead` | TEXT | JSON array |
| `context_modifiers` | TEXT | JSON array of modifier objects |
| `fairness_high_multiplier` | REAL | nullable, default 1.25 |
| `quantity_label` | TEXT | nullable |
| `quantity_default` | INTEGER | nullable |
| `quantity_min` | INTEGER | nullable |
| `quantity_step` | INTEGER | nullable |

**GlossaryPhrase** (SQLite table: `phrases`)

| Column | Type | Notes |
|--------|------|-------|
| `id` | TEXT PK | |
| `category` | TEXT | |
| `arabic` | TEXT | RTL text |
| `latin` | TEXT | transliteration |
| `english` | TEXT | |
| `audio` | TEXT | asset ref or URL, nullable |

**Itinerary** (SQLite table: `itineraries`)

| Column | Type | Notes |
|--------|------|-------|
| `id` | TEXT PK | |
| `title` | TEXT | |
| `duration` | TEXT | "1 day", "3 days", etc. |
| `steps` | TEXT | JSON array of step objects |

**UserSettings** (SQLite table in `user.db`: `user_settings`)

| Column | Type | Notes |
|--------|------|-------|
| `key` | TEXT PK | |
| `value` | TEXT | JSON-encoded value |

Keys: `homeBase`, `activeRoute`, `travelProfile`, `exchangeRate`

**Favorites** (SQLite table in `user.db`: `favorites`)

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PK | autoincrement |
| `content_type` | TEXT | "place", "price_card", "phrase", "itinerary" |
| `content_id` | TEXT | |
| `created_at` | TEXT | ISO8601 |

**Recents** (SQLite table in `user.db`: `recents`)

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PK | autoincrement |
| `content_type` | TEXT | |
| `content_id` | TEXT | |
| `viewed_at` | TEXT | ISO8601 |

**Plan** (SQLite table in `user.db`: `plans` — generated My Day plans)

| Column | Type | Notes |
|--------|------|-------|
| `id` | TEXT PK | |
| `created_at` | TEXT | ISO8601 |
| `inputs` | TEXT | JSON object |
| `steps` | TEXT | JSON array |

### Content link graph (recommended)

Add a SQLite table `content_links` in `content.db` (generated at build time):

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PK | autoincrement |
| `from_type` | TEXT | "place", "price_card", "tip", "phrase" |
| `from_id` | TEXT | |
| `to_type` | TEXT | "place", "price_card", "tip", "phrase" |
| `to_id` | TEXT | |
| `link_kind` | TEXT | "related_price", "useful_phrase", "avoid_scam", "safe_alternative" |

This powers cross-links without hardcoding per-feature logic.

### Imported dataset notes (current workspace)

The current `shared/content/*.json` files (including the newly added Lonely Planet extraction) follow this envelope:

```json
{
  "meta": { "generated_at": "...", "source_document": "...", "notes": [] },
  "items": [ ... ]
}
```

- `items[].id` is the stable primary key used for joins and user state references.
- `source_refs` is used as editorial provenance (for the imported guide content, values map to guide page numbers).
- Current populated domains are `places`, `price_cards`, `activities`, `itineraries`, `tips`, `culture`, `glossary`, and `events`.
- Relationship conventions in current data:
- `itineraries.items[].steps[]` references `place_id` (for `type: "place"` or `type: "meal"`) and `activity_id` (for `type: "activity"`).
- `tips` can include `related_place_ids` and/or `related_price_card_ids`.
- `favorites`/`recents` (in `user.db`) reference content by `content_type` + `content_id`.

**Image linkage in current imported data**

- Place records now use an `images` array (for example in `shared/content/places.json`) and currently point to local extraction paths.
- Use `docs/lonely_planet_extracted/images_rgb_canonical/` as the preferred upload source (RGB-safe + deduplicated).
- Do not use `docs/lonely_planet_extracted/images/` as the primary upload source for production; it includes raw extraction outputs that may contain CMYK color artifacts.
- Image manifests and mapping files:
- `docs/lonely_planet_extracted/images_rgb/manifest_rgb.json` (RGB extraction inventory + hashes)
- `docs/lonely_planet_extracted/images_rgb/canonical_upload_list.json` (deduplicated upload list)
- `docs/lonely_planet_extracted/images/place_image_candidates.json` (place-to-image mapping, including `suggested_relative_path_rgb`; fallback mappings are flagged with `suggested_match_type: "nearest_page_fallback"`)

**Implementation guidance (when wiring the app)**

- During asset upload, replace local `images` paths with stable remote URLs, but keep the same place IDs so app/database joins remain unchanged.
- Treat `images[0]` as hero image and additional entries as optional gallery images.
- If mapping is marked as fallback (`nearest_page_fallback`), treat it as provisional and queue it for editorial review.
- Never block rendering on missing images; always fall back to text-first cards/placeholders.
- Keep imports deterministic: same input JSON + same asset map should produce the same `content.db`.

**How to use each `shared/content` file in app implementation**

- `shared/content/places.json`
- Primary source for Explore/Eat place cards and detail screens.
- Also used by Route Cards, My Day planner inputs, map markers, and related-item chips.
- `shared/content/price_cards.json`
- Source for Prices list/detail and Quote → Action engine inputs (`expected_cost_*`, scripts, modifiers, fairness multipliers).
- Should be joinable from place/tip UI via related IDs or `content_links`.
- `shared/content/activities.json`
- Source for day-trip/experience cards and itinerary `activity` steps.
- Use for optional “book later” and planning modules; keep offline summaries first.
- `shared/content/itineraries.json`
- Source for itinerary list/detail and Route Card execution flows.
- Parse `steps[]` by `type` and resolve referenced `place_id` / `activity_id` before render.
- `shared/content/tips.json`
- Source for safety, scam awareness, arrival, accessibility, family, and practical decision cards.
- Use `related_place_ids` / `related_price_card_ids` to surface contextual tips in detail pages.
- `shared/content/culture.json`
- Source for concise etiquette/culture do-don’t modules in More/Culture screens.
- Keep these lightweight and skimmable; they are not long-form articles.
- `shared/content/glossary.json`
- Source for phrasebook categories + phrase detail cards.
- Respect RTL behavior when Arabic is present and preserve `verification_status` for QA workflows.
- `shared/content/events.json`
- Optional online-first module; if stale/unavailable, hide gracefully without impacting core offline value.
- `shared/content` `meta` blocks
- Use for diagnostics (“content generated at”, source provenance) and internal QA visibility.
- Do not block runtime UX on `meta` parse failures; treat missing meta as non-fatal.

---

## 10) Screen list (everything that needs to be built)

### Navigation + shell

- Tab navigator layout
- Onboarding flow (first-run + re-runnable from Settings)
- Global search modal/screen
- Shared "detail" screens (place detail, price card detail)
- Settings screen (offline downloads/**Downloads manager**, exchange rate, **language**, privacy, Privacy Center, diagnostics, "What's new")
- Diagnostics screen (content version, last sync/import status, storage usage, **Offline Readiness**, export debug report)

### Home

- Quick actions
- **Offline Ready** chip (shows: Ready / Missing recommended pack / Integrity issue → one-tap fix path)
- **My Day** plan builder (constraints → generated plan → Route Cards)
- Today's tip
- Phrase of the day
- Saved + recents

### Arrival + tools

- Arrival mode (first 2 hours + first day)
- Currency converter (manual rate + timestamp)
- Tipping guide
- Bargaining calculator
- **Home Base setup** (set riad/hotel)
- **Go Home** (compass screen)

### Explore

- List view with filters
- Map view with markers + list preview
- Place detail screen
- Neighborhood section (optional but valuable)

### Eat

- Curated list view + filters
- Place detail (reuse)
- "What to eat" guide page (optional)

### Prices

- Price card categories
- Price card detail pages
- **Quote → Action** tool (modal/screen)
- Negotiation playbook page (optional)

### More

- Culture & etiquette pages
- Darija phrasebook: categories + search + phrase detail
- Itineraries list + itinerary detail
- **My Trip builder** (1/2/3 day planner + drag reorder)
- **Route Card** (route overview + next stop + Medina Mode)
- Tips & safety pages

### Cross-cutting features

- Favorites
- Recently viewed
- Share
- Offline content loader + caching
- Search indexing

---

## 11) Project structure (recommended)

### React Native monorepo structure

```
marrakech-guide/
├── src/                         # React Native TypeScript source
│   ├── App.tsx
│   ├── core/
│   │   ├── database/
│   │   ├── repositories/
│   │   ├── services/
│   │   └── engines/
│   ├── features/
│   │   ├── home/
│   │   ├── explore/
│   │   ├── eat/
│   │   ├── prices/
│   │   ├── quoteAction/
│   │   ├── homeBase/
│   │   ├── myDay/
│   │   ├── routeCards/
│   │   ├── phrasebook/
│   │   ├── search/
│   │   ├── more/
│   │   └── settings/
│   ├── shared/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── models/
│   │   ├── context/
│   │   ├── theme/
│   │   └── utils/
│   ├── navigation/
│   └── locales/
├── ios/                         # iOS native project (managed by RN CLI)
│   ├── MarrakechGuide.xcodeproj
│   ├── MarrakechGuide/
│   │   ├── AppDelegate.mm
│   │   ├── Info.plist
│   │   └── Resources/
│   │       ├── SeedData/
│   │       │   └── content.db
│   │       └── Audio/
│   └── Podfile
├── android/                     # Android native project (managed by RN CLI)
│   ├── app/
│   │   ├── build.gradle
│   │   ├── src/main/
│   │   │   ├── AndroidManifest.xml
│   │   │   ├── java/com/marrakechguide/
│   │   │   │   └── MainActivity.kt
│   │   │   ├── res/
│   │   │   └── assets/
│   │   │       └── seed/
│   │   │           └── content.db
│   └── build.gradle
├── shared/                      # Shared content + build scripts
│   ├── content/
│   │   ├── places.json
│   │   ├── price_cards.json
│   │   ├── glossary.json
│   │   ├── culture.json
│   │   ├── tips.json
│   │   └── itineraries.json
│   ├── scripts/
│   │   ├── validate-content.ts
│   │   ├── build-bundle.ts      # JSON → SQLite content.db
│   │   ├── check-links.ts
│   │   └── copy-db-to-apps.ts   # Copy content.db to ios/ and android/
│   └── schema/
│       └── content-schema.json  # JSON Schema for validation
├── convex/                      # Phase 2 only
│   ├── schema.ts
│   ├── content.ts
│   └── versions.ts
├── __tests__/                   # Jest tests
│   ├── engines/
│   │   ├── PricingEngine.test.ts
│   │   ├── PlanEngine.test.ts
│   │   └── GeoEngine.test.ts
│   └── components/
├── docs/
│   └── api.md
├── package.json
├── tsconfig.json
├── babel.config.js
├── metro.config.js
├── jest.config.js
├── .eslintrc.js
└── app.json
```

### Key files explained

**Root configuration files:**
- `package.json` - dependencies, scripts for build/test/lint
- `tsconfig.json` - TypeScript configuration
- `metro.config.js` - Metro bundler configuration
- `app.json` - React Native app configuration

**iOS-specific files (minimal, managed by RN CLI):**
- `ios/Podfile` - CocoaPods dependencies
- `ios/MarrakechGuide/Info.plist` - iOS app configuration
- `ios/MarrakechGuide/Resources/SeedData/content.db` - bundled content

**Android-specific files (minimal, managed by RN CLI):**
- `android/app/build.gradle` - Gradle configuration
- `android/app/src/main/AndroidManifest.xml` - Android app configuration
- `android/app/src/main/assets/seed/content.db` - bundled content

**Content pipeline:**
- `shared/content/` - JSON source files (single source of truth)
- `shared/scripts/build-bundle.ts` - generates `content.db` from JSON
- `shared/scripts/copy-db-to-apps.ts` - copies DB to both platform asset folders

---

## 12) Non-functional requirements (make it "paid quality")

### Performance

- Fast startup (avoid heavy network calls on launch)
- Responsiveness is non-negotiable: never do disk IO / network / JSON decoding on the JS thread; use async patterns and consider moving heavy work to native modules if needed
- Lazy-load images using `react-native-fast-image` or similar
- Build search index once and reuse
- Measure and enforce startup performance:
  - Profile launch time on both iOS and Android using Flipper or platform-specific tools
  - Use Hermes engine for faster JS execution and smaller bundle size
  - Consider RAM bundles for faster startup on Android
- Set performance budgets:
  - cold start target (mid-tier device)
  - search response time target (p95)
  - memory ceiling in Explore + Map views
  - offline map render performance (fps target on mid-tier device)
  - offline route computation budget (time-to-route for Medina core)

### Offline behavior

- Entire guide works without internet
- Online features are additive only
- Clear messaging when offline, not scary

**Paid-app guarantee:**
- Core value works immediately after install, offline.
- No blocking "downloading resources…" screen on first launch.
- If optional packs are not downloaded, the app still remains fully usable.

### Privacy

- Trust + privacy are product pillars:
  - "Near me" is optional
  - Location used only on-device (sorting, Go Home, Navigate) and only while those screens are open
  - No contacts/photos permissions (ever)
  - No ads, no selling data, no shady SDKs
  - If crash reporting exists, make it privacy-forward and explain it in-app (opt-in preferred)

### Privacy Center (in Settings)
- Plain-language explanation of:
  - what data is stored on-device
  - what leaves the device (ideally nothing in v1)
  - why permissions are requested (location only, on-demand)

### Store policy resilience
- CI check: fail release builds if iOS build SDK / Android target SDK are below current store requirements
- Re-evaluate minimum deployment targets yearly based on device share + QA budget

### QA checklist (minimum)

**Both platforms:**
- Works in airplane mode
- Works on low-memory devices
- Map view doesn't crash with many markers (keep curated marker count reasonable; enforce a marker budget via clustering/progressive disclosure)
- Search works fast across content
- All external links open correctly
- Dark mode works correctly
- RTL text (Arabic) renders correctly in phrasebook

**iOS-specific:**
- VoiceOver smoke test on core flows (Quote → Action, Go Home, Route Cards, Search)
- Dynamic Type sizes (accessibility)
- Works on oldest supported iOS version (14.0)
- Background download resume after app termination

**Android-specific:**
- TalkBack smoke test on core flows
- Font scaling (accessibility)
- Works on oldest supported API level (26)
- Background download resume after process death
- Battery optimization handling (Doze mode)

**React Native-specific:**
- JS bundle loads and runs on both platforms without errors
- No yellow box warnings in release builds
- Hermes engine enabled and working correctly
- Native modules (SQLite, sensors, geolocation) work on both platforms
- React Navigation transitions are smooth (no jank)

**Location flows tested (both platforms):**
- Deny permission (app still usable)
- Grant permission (Go Home + Route Cards work)
- Heading unavailable (fallback UI still works)
- Low power mode / battery optimizations (manual refresh still works)
- Location accuracy degraded (graceful handling)
- Offline navigation running for 10 minutes (battery + stability)

Add "paid app" reliability basics:

- **App must be fully usable in airplane mode immediately after fresh install**
- Interruption tests:
  - app launch while downloads are in progress (must still be usable)
  - content update download interrupted (resume works)
  - low storage during download (clear error message)
  - app killed mid-import (must recover safely on next launch)
- Observability:
  - Crash reporting: **opt-in preferred**, privacy-forward messaging in Privacy Center
  - On-device ring-buffer logs (redacted; no precise location; no user-entered notes)
  - Export debug report includes pack/version state + recent redacted events (helps support without screenshots)
  - Operational quality gates: monitor **Android vitals** (crash + ANR rates) and iOS crash/hang metrics (Xcode Organizer/MetricKit) as release blockers, not "nice to haves"

---

## 13) Store listing strategy (so paid installs convert)

Your App Store / Play Store copy must **prove value before purchase**:

**Positioning line:**
"The offline Marrakech guide you can trust — prices, navigation, and cultural confidence."

- "Fair prices in MAD + negotiation scripts"
- "Offline-first: works without internet"
- "Avoid common scams"
- "Darija phrases + etiquette"
- "Curated must-sees + itineraries"

Screenshots should highlight:

- Works offline (airplane mode screenshot)
- Offline Medina navigation (not just pins)
- Fair prices in MAD + negotiation scripts
- No subscriptions / no ads / no data selling
- Quote → Action + Go Home + Route Cards (shows "confidence in the moment")
- Shareable Price Card "snapshot" (helps marketing + word-of-mouth)
- Arrival mode + converter (shows "paid utility" immediately)

---

## 14) What to build first (order of implementation, not milestones)

### Phase 0: Foundation

1. **React Native project setup**
   - Initialize React Native project with TypeScript template
   - Configure Hermes engine for both platforms
   - Set up ESLint, Prettier, and TypeScript strict mode
   - Configure Metro bundler and Jest for testing

2. **Shared content pipeline**
   - JSON schema + validation scripts
   - `build-bundle.ts` script (JSON → SQLite `content.db`)
   - Treat `shared/content/` as the source of truth for most app data
   - `copy-db-to-apps.ts` to copy content.db to both iOS and Android asset folders
   - Seed content for development (5 places, 5 price cards, 20 phrases)

3. **App foundation**
   - Install and configure core dependencies (React Navigation, SQLite, AsyncStorage)
   - Set up DatabaseManager with SQLite wrapper
   - Create basic theme + design system components
   - Implement bottom tab navigation structure
   - Test on both iOS and Android simulators/emulators

### Phase 1: Core features

4. Integrate generated `content.db` (from `shared/content/`) into app bundles, then implement content loading + favorites/recents
5. Explore list + place detail
6. Prices list + price card detail (this is the money-maker)
7. **Quote → Action** (reuses Price Cards; high value)
8. Darija phrasebook + search (FTS5)
9. Itineraries + tips/culture pages

### Phase 2: Location features

10. **Home Base compass** (react-native-geolocation-service + react-native-sensors for heading; big confidence win)
11. **My Day** plan builder (offline daily plan)
12. **Route Cards** (execute itineraries with next-stop guidance)
13. Map integration + external directions (react-native-maps + Linking for external maps)

### Phase 3: Polish & store readiness

14. Store-ready polish (screenshots, App Store video, copy)
15. Downloads manager (audio packs, content updates)
16. Offline UX polish, error states, empty states
17. Accessibility audit (VoiceOver / TalkBack)
18. Localization (EN/FR UI)
19. Store-ready screenshots, App Store / Play Store metadata

### Phase 4: Backend (optional)

20. Phase 2 Convex: content versioning + bundle downloads + optional user sync

---


## 15) Phase 2 Convex: exact "needs to be built"

- Convex schema: content tables + `contentVersions`
- Upload pipeline for curated content (could be manual at first)

**React Native sync module (TypeScript):**
- `ContentSyncService.ts` using fetch or axios for manifest + bundle downloads
- Background download support via `react-native-background-downloader`
- Verify sha256 using `react-native-crypto` or native module
- Atomic DB swap using `react-native-fs` (`RNFS.moveFile()`)
- FTS tables must be prebuilt in downloaded content.db (no runtime index creation)

**Sync flow:**
- Read latest version from Convex via HTTP/Convex client
- Compare with cached version (stored in AsyncStorage)
- Download manifest + bundle
- Verify hash/signature before import
- Close all SQLite connections
- Perform atomic file swap (keep previous version for rollback)
- Reopen SQLite connections

- Optional auth + user state sync (favorites/bookmarks) via Convex

---

## 16) Shared code & development workflow

### What's shared (everything!)

With React Native, almost all code is shared between iOS and Android:

**Shared TypeScript code (in `src/` directory):**
- All UI code (React Native components)
- All business logic (hooks, context, engines)
- Database access layer (SQLite wrapper)
- Services (location, downloads, sync)
- Engines (pricing, planning, routing, geo)
- Navigation
- Theme and styling

**Shared content (in `shared/` directory):**
- Content JSON files (places, prices, phrases, itineraries, tips, culture)
- Content validation scripts (TypeScript/Node)
- SQLite database build scripts (JSON → content.db)
- JSON Schema definitions
- Content changelog generation
- Asset pipeline (image compression, audio encoding)

**Platform-specific (minimal):**
- `ios/` - Xcode project, CocoaPods, native module bridges if needed
- `android/` - Gradle project, native module bridges if needed
- Platform-specific assets (app icons, splash screens)

### Development workflow

1. **Content updates:** Edit JSON in `shared/content/`, run validation, build `content.db`, copy to both apps
2. **Development:** Run `npx react-native start` for Metro bundler
3. **iOS testing:** Run `npx react-native run-ios` or open Xcode for device testing
4. **Android testing:** Run `npx react-native run-android` or open Android Studio for device testing
5. **Unit testing:** Run `npm test` for Jest tests (engines, hooks, utilities)
6. **E2E testing:** Use Detox or Maestro for end-to-end tests on both platforms
7. **Release:** Build release bundles and submit to App Store and Play Store

### Development commands

```bash
# Start Metro bundler
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run tests
npm test

# Build content.db from JSON
npm run build:content

# Lint and type-check
npm run lint
npm run typecheck

# Build release (iOS)
cd ios && xcodebuild -scheme MarrakechGuide -configuration Release

# Build release (Android)
cd android && ./gradlew assembleRelease
```

### Code quality checklist

Maintain quality across the single codebase:
- [ ] TypeScript strict mode with no `any` types in production code
- [ ] All engines have unit tests with >90% coverage
- [ ] All screens tested on both iOS and Android
- [ ] No platform-specific code without `Platform.OS` checks
- [ ] Accessibility labels on all interactive elements
- [ ] No console warnings in release builds

### CI gates (required for "paid quality")

- TypeScript type-check passes (`tsc --noEmit`)
- ESLint passes with no errors
- Jest unit tests pass (engines, hooks, utilities)
- Validate content schema + references on every PR
- Build `content.db` and ensure it includes required tables + FTS tables
- Verify both app bundles are using the latest `content.db` generated from `shared/content/` (no stale seed DBs)
- Build succeeds on both iOS and Android
- Generate changelog artifact used for in-app "What's new" + store notes

### Trust & reliability gates (additions)

- Pack integrity test: verify manifests + sha256 + install/uninstall flows (simulated)
- Offline smoke test script: core flows must work in airplane mode
- Forbidden-permissions check (AndroidManifest + iOS Info.plist):
  - fail build if contacts/photos permissions appear

### Schema-driven codegen (recommended)

- Generate TypeScript types + Zod validators from shared JSON schema
- CI gate: fail if generated types are out of date vs schema changes

---

## 17) Definition of "done"

The app is "ready to sell" when:

- It works great offline on both iOS and Android
- Pricing + negotiation content feels trustworthy (ranges + reviewed date)
- It's curated enough to feel premium (not empty, not bloated)
- Tourists can plan a day, move around, eat well, negotiate, and avoid traps
- Quote → Action, Go Home, My Day, and Route Cards work reliably offline (core "confidence" moments)
- Store pages (App Store + Play Store) clearly communicate the value in 5 seconds
- Offline promise is validated via a repeatable test checklist (airplane mode + interrupted update + low storage)
- Both platforms pass accessibility audits (VoiceOver + TalkBack)
- If using Option A (paid up-front): no billing flows; app is fully accessible after paid install
- If using Option B (free + unlock): purchase + restore flows are reliable and clearly explained (still usable offline after unlock)
- React Native app performs smoothly on mid-tier devices (no jank, fast startup)
- No JS errors or yellow boxes in release builds
- Same user experience on iOS and Android (single codebase advantage)
