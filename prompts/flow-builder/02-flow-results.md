# Figma Make Prompt: Flow Results (FLOW-002)

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
| {colors.surface-soft} | #F5F5F5 | Node backgrounds |
| Success | #34A853 | Passed nodes |
| Error | #EF4444 | Failed nodes |

---

## Screen Requirements

### Purpose
Display flow execution results with step-by-step breakdown.

### Layout
```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│  Flow Results: Login Flow                                   [Run Again] [Export] [Share]       │
├─────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                   │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Summary                                                                                 │ │
│  │  ───────────────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                                           │ │
│  │  Duration: 2.3s    │    Passed: 4/5    │    Failed: 1    │    Status: ⚠️ Completed with errors│ │
│  │                                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                   │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────┐ │
│  │                                                                                           │ │
│  │   ┌─────────┐                                                                  time: 0ms │ │
│  │   │ ▶ Start │ ────────────────────────────────────────────────────────────────→       │ │
│  │   └─────────┘                                                                   ✓        │ │
│  │                                                                                           │ │
│  │                                        ┌─────────┐                              time: 45ms │ │
│  │   ────────────────────────────────────→│ POST    │───────────────────────────────→        │ │
│  │                                        │ Login   │                                      │ │
│  │                                        └─────────┘                               ✓        │ │
│  │                                                                                           │ │
│  │                                        ┌─────────┐                              time: 1045ms│ │
│  │   ────────────────────────────────────→│ ⏱ Delay │───────────────────────────────→        │ │
│  │                                        │  1000ms │                                      │ │
│  │                                        └─────────┘                               ✓        │ │
│  │                                                                                           │ │
│  │                                        ┌─────────┐                              time: 1245ms│ │
│  │   ────────────────────────────────────→│ GET     │───────────────────────────────→        │ │
│  │                                        │ Profile │                                      │ │
│  │                                        └─────────┘                               ✗        │ │
│  │                                                                                           │ │
│  │                                        ┌─────────┐                                           │ │
│  │   ────────────────────────────────────→│ ◉ Stop  │───────────────────────────────→        │ │
│  │                                        └─────────┘                                           │ │
│  │                                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                   │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Step Details                                                                           │ │
│  ├───────────────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                           │ │
│  │  GET /profile - FAILED                                                                    │ │
│  │  ─────────────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                                           │ │
│  │  Status: 401 Unauthorized                                                                 │ │
│  │  Time: 200ms                                                                             │ │
│  │                                                                                           │ │
│  │  Request Headers:                                                                         │ │
│  │  Authorization: Bearer {{authToken}}                                                     │ │
│  │  Content-Type: application/json                                                           │ │
│  │                                                                                           │ │
│  │  Response:                                                                               │ │
│  │  {                                                                                       │ │
│  │    "error": "Unauthorized",                                                               │ │
│  │    "message": "Invalid or expired token"                                                  │ │
│  │  }                                                                                       │ │
│  │                                                                                           │ │
│  │  Test Results:                                                                            │ │
│  │  ✗ Expected status 200, got 401                                                          │ │
│  │                                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                   │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Header
- Title: "Flow Results: [Flow Name]"
- Run Again button: button-primary
- Export button: button-secondary
- Share button: button-secondary

#### 2. Summary Bar
```
Duration: 2.3s    │    Passed: 4/5    │    Failed: 1    │    Status: ⚠️
```
- Stats in a row
- Duration, Pass count, Fail count, Overall status
- Overall status: ✓ Success, ⚠️ Partial, ✗ Failed

#### 3. Flow Visualization
```
      ┌─────────┐
      │ ▶ Start │
      └────┬────┘
           │ ✓
           ▼
      ┌─────────┐
      │ POST    │
      │ Login   │
      └────┬────┘ ✓
           │
           ▼
      ┌─────────┐
      │ ⏱ Delay │
      └────┬────┘ ✓
           │
           ▼
      ┌─────────┐
      │ GET     │ ✗
      │ Profile │
      └────┬────┘
           │
           ▼
      ┌─────────┐
      │ ◉ Stop  │
      └─────────┘
```
- Vertical flow diagram
- Nodes with status icons
- Connection lines
- Time indicator on right
- Green ✓ for passed
- Red ✗ for failed

#### 4. Node Status
```
✓ - Green check, passed
✗ - Red X, failed
○ - Gray circle, skipped
⏳ - Spinner, running
```

#### 5. Step Details Panel
```
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│  GET /profile - FAILED                                                                  │
│  ─────────────────────────────────────────────────────────────────────────────────────│ │
│                                                                                          │ │
│  Status: 401 Unauthorized                                                                │ │
│  Time: 200ms                                                                            │ │
│                                                                                          │ │
│  Request Headers:                                                                        │ │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │ │
│  │ Authorization: Bearer {{authToken}}                                              │  │ │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │ │
│                                                                                          │ │
│  Response Body:                                                                          │ │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐  │ │
│  │ {                                                                                  │  │ │
│  │   "error": "Unauthorized",                                                         │  │ │
│  │   "message": "Invalid or expired token"                                            │  │ │
│  │ }                                                                                  │  │ │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │ │
│                                                                                          │ │
│  Test Results:                                                                           │ │
│  ✗ Expected status 200, got 401                                                        │ │
│                                                                                          │ │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```
- Collapsible/expandable
- Request details
- Response details
- Test results
- Error messages

---

## Output Instructions

Create Figma frames for:
1. **Results overview** with flow diagram
2. **Step details** expanded
3. **All steps passed** view
4. **Export options** dialog

Proper naming: "FLOW-002_FlowResults_Overview", "FLOW-002_FlowResults_Details", etc.
