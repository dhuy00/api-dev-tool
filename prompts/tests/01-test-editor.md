# Figma Make Prompt: Test Editor (TEST-001)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Code editor: monospace font
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers |
| {colors.surface-soft} | #F5F5F5 | Code background |
| Success | #34A853 | Pass indicator |
| Error | #EF4444 | Fail indicator |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Section title
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Labels, code
{typography.button} - 20px, 480 weight - Buttons
Code: JetBrains Mono, 14px
```

---

## Screen Requirements

### Purpose
Write and manage test scripts for requests. Tests run after each request execution.

### Layout
```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│  Test Editor                                              [Run Tests ▶] [Save]          │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Tests                                     [+ Add Test] [⚙️ Auto-generate]        │ │
│  ├───────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ 📋 Test: Status code is 200                           [▶] [✏️] [🗑️]      │ │ │
│  │  │                                                                          │ │ │
│  │  │ pm.test("Status code is 200", () => {                                   │ │ │
│  │  │     pm.response.to.have.status(200);                                     │ │ │
│  │  │ });                                                                      │ │ │
│  │  │                                                                          │ │ │
│  │  │ Status: ● Pass · Last run: 2:30 PM                                      │ │ │
│  │  └─────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ 📋 Test: Response has success field                 [▶] [✏️] [🗑️]      │ │ │
│  │  │                                                                          │ │ │
│  │  │ pm.test("Response has success field", () => {                            │ │ │
│  │  │     const response = pm.response.json();                                  │ │ │
│  │  │     pm.expect(response).to.have.property('success');                      │ │ │
│  │  │     pm.expect(response.success).to.equal(true);                          │ │ │
│  │  │ });                                                                      │ │ │
│  │  │                                                                          │ │ │
│  │  │ Status: ● Pass · Last run: 2:30 PM                                      │ │ │
│  │  └─────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ 📋 Test: Response time under 500ms                 [▶] [✏️] [🗑️]      │ │ │
│  │  │                                                                          │ │ │
│  │  │ pm.test("Response time under 500ms", () => {                             │ │ │
│  │  │     pm.expect(pm.response.responseTime).to.be.below(500);                 │ │ │
│  │  │ });                                                                      │ │ │
│  │  │                                                                          │ │ │
│  │  │ Status: ● Fail · Last run: 2:28 PM                                      │ │ │
│  │  └─────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                   │ │
│  │  [+ Add Test]                                                                    │ │
│  │                                                                                   │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Page Header
- Title: "Test Editor"
- Run Tests button: button-primary with play icon
- Save button: button-secondary

#### 2. Header Actions
```
[+ Add Test]  [⚙️ Auto-generate]
```
- Add Test: button-secondary
- Auto-generate: button-secondary with icon

#### 3. Test Card
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ 📋 Test: Status code is 200                          [▶ Run] [Edit] [Delete]         │
│                                                                                      │
│ pm.test("Status code is 200", () => {                                              │
│     pm.response.to.have.status(200);                                                │
│ });                                                                                  │
│                                                                                      │
│ Status: ● Pass · Last run: 2:30 PM                                                  │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Card: bg=canvas, border=hairline, rounded.lg
- Header: test name with icon
- Code block: bg=surface-soft, monospace font, rounded.md
- Status indicator: ● Pass (green) / ● Fail (red)
- Timestamp: "Last run: 2:30 PM"
- Actions: Run, Edit, Delete buttons

#### 4. Test Card States
```
Pass: Green status dot, green border accent
Fail: Red status dot, red border accent
Pending: Gray status dot, neutral
Skipped: Yellow status dot, muted
```

#### 5. Status Badge
```
● Pass     - green dot, green text
● Fail     - red dot, red text
● Pending  - gray dot, gray text
● Skipped  - yellow dot, yellow text
```
- Small pill with dot + text

#### 6. Code Editor (Edit Mode)
```
┌──────────────────────────────────────────────────────────────┐
│ Test Name: [________________________]                        │
│                                                              │
│ pm.test("Test name", () => {                                │
│     // your assertions here                                 │
│                                                              │
│ });                                                          │
│                                                              │
│ [Cancel] [Save Test]                                         │
└──────────────────────────────────────────────────────────────┘
```
- Expandable/collapsible edit section
- Test name input
- Code editor with syntax highlighting
- Save/Cancel buttons

#### 7. Auto-generate Dialog
```
┌─────────────────────────────────────────────────────────────┐
│ Auto-generate Tests                                          │
│ ────────────────────────────────────────────────────────────│
│                                                              │
│ Generate tests based on:                                      │
│                                                              │
│ [✓] Status code assertions                                   │
│ [✓] Response structure validation                            │
│ [ ] Response time assertions                                 │
│ [ ] Header validation                                        │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │ Cancel                      [Generate Tests]             │  │
│ └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Test Result Summary (after running)
```
┌──────────────────────────────────────────────────────────────┐
│ Test Results                                    3/4 Pass     │
│                                                              │
│ ✓ Status code is 200                                        │
│ ✓ Response has success field                                │
│ ✗ Response time under 500ms                                  │
│   └─ Expected < 500ms, got 523ms                            │
│ ✓ JSON schema validation                                    │
└──────────────────────────────────────────────────────────────┘
```

---

## Output Instructions

Create Figma frames for:
1. **Test editor** with multiple tests
2. **Edit mode** for single test
3. **Test results** summary
4. **Auto-generate dialog**

Proper naming: "TEST-001_TestEditor_Default", "TEST-001_TestEditor_EditMode", etc.
