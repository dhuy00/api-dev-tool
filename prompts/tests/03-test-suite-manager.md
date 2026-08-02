# Figma Make Prompt: Test Suite Manager (TEST-003)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers |
| {colors.surface-soft} | #F5F5F5 | Hover |
| Success | #34A853 | Passed |
| Error | #EF4444 | Failed |

---

## Screen Requirements

### Purpose
Organize and manage test suites - groups of related tests.

### Layout
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Test Suites                                              [+ New Suite]                    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐ │
│  │ 🔍 Search suites...                              [Filter ▼] [Sort ▼]          │ │
│  └──────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                        │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐ │
│  │                                                                                  │ │
│  │  📁 Authentication Suite                                                        │ │
│  │  ────────────────────────────────────────────────────────────────────────────  │ │
│  │                                                                                  │ │
│  │  5 tests · Last run: 2 hours ago · 100% passed                                  │ │
│  │                                                                                  │ │
│  │  ✓ Status code is 200                                                          │ │
│  │  ✓ Response has success field                                                   │ │
│  │  ✓ Token is present                                                             │ │
│  │  ✓ Token format is valid                                                        │ │
│  │  ✓ Refresh token works                                                          │ │
│  │                                                                                  │ │
│  │  [Run Suite ▶]  [Edit]  [•••]                                                  │ │
│  └──────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                        │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐ │
│  │                                                                                  │ │
│  │  📁 User Management Suite                                                        │ │
│  │  ────────────────────────────────────────────────────────────────────────────  │ │
│  │                                                                                  │ │
│  │  8 tests · Last run: 1 day ago · 75% passed (2 failed)                         │ │
│  │                                                                                  │ │
│  │  ✓ GET /users returns array                                                     │ │
│  │  ✓ GET /users/:id returns user                                                  │ │
│  │  ✓ POST /users creates user                                                     │ │
│  │  ✗ Response time under 500ms (523ms)                                           │ │
│  │  ✓ Email validation works                                                       │ │
│  │  ✓ PUT /users/:id updates user                                                 │ │
│  │  ✗ DELETE /users/:id removes user (401 Unauthorized)                           │ │
│  │  ✓ User schema is valid                                                         │ │
│  │                                                                                  │ │
│  │  [Run Suite ▶]  [Edit]  [•••]                                                  │ │
│  └──────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Page Header
- Title: "Test Suites"
- New Suite button: button-primary

#### 2. Search & Filter Bar
```
┌─────────────────────────────────────────────────────────────┐
│ 🔍 Search suites...                              [▼] [▼]  │
└─────────────────────────────────────────────────────────────┘
```
- Search input
- Filter: All, Passed, Failed
- Sort: Name, Last Run, Pass Rate

#### 3. Suite Card
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                      │
│  📁 Authentication Suite                                                              │
│  ────────────────────────────────────────────────────────────────────────────────  │
│                                                                                      │
│  5 tests · Last run: 2 hours ago · 100% passed                                      │
│                                                                                      │
│  ✓ Status code is 200                                                               │
│  ✓ Response has success field                                                        │
│  ✓ Token is present                                                                  │
│  ✓ Token format is valid                                                             │
│  ✓ Refresh token works                                                               │
│                                                                                      │
│  [Run Suite ▶]  [Edit]  [•••]                                                        │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Card: bg=canvas, border=hairline, rounded.lg
- Suite icon: folder with test-tube or badge icon
- Suite name: card-title typography
- Stats: test count, last run, pass rate
- Test list: compact with pass/fail icons
- Actions: Run, Edit, More menu

#### 4. Suite Status Indicator
```
100% passed  - all green, success badge
75% passed   - mixed, warning badge
0% passed    - all red, error badge
Not run      - gray, neutral badge
```

#### 5. Test List (Collapsed)
```
✓ Test name 1
✓ Test name 2
✗ Test name 3 (523ms)
✓ Test name 4
```
- Single line per test
- Pass/fail icon
- Duration on failed tests

#### 6. Actions
```
[Run Suite ▶]  [Edit]  [•••]
```
- Run: button-primary, play icon
- Edit: button-secondary
- More: dropdown menu (Duplicate, Export, Delete)

#### 7. Create Suite Modal
```
┌─────────────────────────────────────────────────────────────┐
│ Create New Test Suite                                        │
│ ────────────────────────────────────────────────────────────│
│                                                              │
│ Suite Name                                                   │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │                                                             │  │
│ └─────────────────────────────────────────────────────────┘  │
│                                                              │
│ Description                                                  │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │                                                             │  │
│ └─────────────────────────────────────────────────────────┘  │
│                                                              │
│ Assign Tests                                                 │
│ [✓] Test 1 - Status code check                              │
│ [✓] Test 2 - Response validation                             │
│ [ ] Test 3 - Performance check                               │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │ Cancel                            [Create Suite]         │  │
│ └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Output Instructions

Create Figma frames for:
1. **Suite list** with cards
2. **Suite detail** (expanded)
3. **Create suite modal**
4. **Run results** dialog

Proper naming: "TEST-003_TestSuite_List", "TEST-003_TestSuite_Detail", etc.
