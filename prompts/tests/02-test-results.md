# Figma Make Prompt: Test Results (TEST-002)

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
| {colors.surface-soft} | #F5F5F5 | Card backgrounds |
| Success | #34A853 | Pass indicators |
| Error | #EF4444 | Fail indicators |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Results, labels
{typography.caption} - 12px, 400 weight - Timestamps
```

---

## Screen Requirements

### Purpose
Display test execution results with detailed pass/fail breakdown.

### Layout
```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│  Test Results                                              [Run Again] [Export]           │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Summary                                                                      │ │
│  │  ─────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                               │ │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌────────────┐ │ │
│  │  │   Total        │  │   Passed        │  │   Failed        │  │ Duration   │ │ │
│  │  │     12         │  │   10 ✓          │  │   2 ✗           │  │ 2.3s       │ │ │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘  └────────────┘ │ │
│  │                                                                               │ │
│  │  ████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 83% Passed              │ │
│  │                                                                               │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Failed Tests (2)                                                              │ │
│  ├───────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                               │ │
│  │  ✗ Test: Response time under 500ms                              523ms        │ │
│  │     Expected: < 500ms                                                            │ │
│  │     Actual: 523ms                                                               │ │
│  │     at pm.test (test-editor:12)                                                │ │
│  │     at Response.Listener (app.js:45)                                           │ │
│  │                                                                               │ │
│  │  ─────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                               │ │
│  │  ✗ Test: Email field validation                                    45ms        │ │
│  │     Expected: response.user.email to match email format                       │ │
│  │     Actual: "not-a-valid-email"                                               │ │
│  │     at pm.test (test-editor:24)                                               │ │
│  │                                                                               │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Passed Tests (10)                                                             │ │
│  ├───────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                               │ │
│  │  ✓ Test: Status code is 200                                  234ms         │ │
│  │  ✓ Test: Response has success field                        12ms          │ │
│  │  ✓ Test: Response has data field                             8ms          │ │
│  │  ✓ Test: User ID is present                                  5ms          │ │
│  │  ✓ Test: Email is string                                     4ms          │ │
│  │  ✓ Test: Created timestamp exists                             6ms          │ │
│  │  ✓ Test: Response time under 1000ms                          234ms         │ │
│  │  ✓ Test: Content-Type is application/json                    3ms          │ │
│  │  ✓ Test: JSON schema validation                             156ms         │ │
│  │  ✓ Test: No unexpected properties                            89ms          │ │
│  │                                                                               │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Page Header
- Title: "Test Results"
- Run Again button: button-primary with play icon
- Export button: button-secondary

#### 2. Summary Card
```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌────────────┐
│   Total         │  │   Passed        │  │   Failed        │  │ Duration   │
│     12          │  │   10 ✓          │  │   2 ✗           │  │ 2.3s       │
└─────────────────┘  └─────────────────┘  └─────────────────┘  └────────────┘
```
- 4 stat boxes in a row
- Large numbers
- Icons/badges for pass/fail

#### 3. Progress Bar
```
███████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 83% Passed
```
- Horizontal bar
- Green fill for passed
- Gray fill for failed
- Percentage label

#### 4. Failed Test Item
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ ✗ Test: Response time under 500ms                                  523ms          │
│     Expected: < 500ms                                                             │
│     Actual: 523ms                                                                │
│     at pm.test (test-editor:12)                                                 │
│     at Response.Listener (app.js:45)                                            │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Red X icon
- Test name
- Duration
- Error details: Expected vs Actual
- Stack trace (collapsible)

#### 5. Passed Test Item
```
✓ Test: Status code is 200                                  234ms
```
- Green checkmark
- Test name
- Duration
- Compact single line

#### 6. Test Status Icons
```
✓ Pass  - green checkmark
✗ Fail  - red X
○ Skipped - gray circle
```

#### 7. Expandable Error Details
```
┌──────────────────────────────────────────────────────────────┐
│ ▼ Error Details                                                           │
│                                                                      │
│ Stack trace:                                                            │
│ at pm.test (test-editor:12)                                          │
│ at Response.Listener (app.js:45)                                      │
│ at processTicksAndRejections (internal/process/task_queues:95)          │
└──────────────────────────────────────────────────────────────┘
```
- Collapsible section
- Monospace font for stack trace

---

## Output Instructions

Create Figma frames for:
1. **Results overview** with summary
2. **Failed tests** expanded
3. **Passed tests** list
4. **Export options** dialog

Proper naming: "TEST-002_TestResults_Overview", "TEST-002_TestResults_Failed", etc.
