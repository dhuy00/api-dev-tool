# Figma Make Prompt: Flow Canvas (FLOW-001)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Canvas area with nodes and connections
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions, selected |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers |
| {colors.surface-soft} | #F5F5F5 | Node backgrounds, panels |

### Typography Scale
```
{typography.body-sm} - 16px, 330 weight - Node labels, UI
{typography.button} - 20px, 480 weight - Buttons
```

---

## Screen Requirements

### Purpose
Create and manage request flows with drag-and-drop interface. Flows are sequences of requests with control logic and data passing.

### Layout
```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│  Flow Builder                                    [Validate ✓] [Run ▶] [Save] [⋮]               │
├─────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                   │
│  ┌──────────────────┬────────────────────────────────────────────────────────────────────────┐│
│  │                  │                                                                              ││
│  │  FLOWS           │   Canvas                                                        Zoom: 100% │
│  │  ──────────────  │   ────────────────────────────────────────────────────────────────      ││
│  │  📋 Login Flow  │                                                                              ││
│  │  📋 User CRUD  │        ┌─────────┐                                                        ││
│  │  📋 Order Flow │        │ ▶ Start │                                                       ││
│  │                  │        └───┬─────┘                                                        ││
│  │  ──────────────  │            │                                                               ││
│  │  [+ New Flow]   │            ▼                                                               ││
│  │                  │        ┌─────────┐                                                        ││
│  │  NODE PALETTE   │        │ POST    │                                                        ││
│  │  ──────────────  │        │ Login   │                                                        ││
│  │                  │        └───┬─────┘                                                        ││
│  │  ○ Start         │            │                                                               ││
│  │  ○ Request       │            ▼                                                               ││
│  │  ○ Delay        │        ┌─────────┐                                                        ││
│  │  ○ Condition    │        │ ⏱ Delay │                                                       ││
│  │  ○ Variable     │        │  1000ms  │                                                        ││
│  │  ○ Extract      │        └───┬─────┘                                                        ││
│  │  ○ Assert        │            │                                                               ││
│  │  ○ Loop         │            ▼                                                               ││
│  │  ○ Stop         │        ┌─────────┐                                                        ││
│  │                  │        │ GET     │                                                        ││
│  │  ──────────────  │        │ Profile │                                                        ││
│  │  QUICK ACTIONS   │        └───┬─────┘                                                        ││
│  │  ──────────────  │            │                                                               ││
│  │  [🔍 Find Node] │            ▼                                                               ││
│  │  [📋 Zoom Fit] │        ┌─────────┐                                                        ││
│  │  [↩ Undo]      │        │ ◉ Stop  │                                                        ││
│  │                  │        └─────────┘                                                        ││
│  └──────────────────┴────────────────────────────────────────────────────────────────────────┘│
│                                                                                                   │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Node Properties                                                               [✕]     │ │
│  ├───────────────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                           │ │
│  │  ┌───────────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ Request: POST /auth/login                                                       ▼ │ │ │
│  │  └───────────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                           │ │
│  │  Variable to Extract                                                                       │ │
│  │  ┌───────────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ authToken = response.body.token                                                 │ │ │
│  │  └───────────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                   │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Header Bar
- Title: "Flow Builder"
- Validate button with status (✓/✗)
- Run button: [Run ▶] primary
- Save button: secondary
- More menu: [⋮]

#### 2. Flow List Panel (Left)
```
┌─────────────────────────────────────┐
│ FLOWS                               │
│ ──────────────────────────────────  │
│ 📋 Login Flow                       │
│ 📋 User CRUD                        │
│ 📋 Order Flow                      │
│                                     │
│ [+ New Flow]                        │
└─────────────────────────────────────┘
```
- Panel width: 200-240px
- List of saved flows
- Active flow highlighted
- New flow button

#### 3. Node Palette
```
┌─────────────────────────────────────┐
│ NODE PALETTE                       │
│ ──────────────────────────────────  │
│ ○ Start                            │
│ ○ Request                          │
│ ○ Delay                            │
│ ○ Condition                        │
│ ○ Variable                         │
│ ○ Extract                          │
│ ○ Assert                           │
│ ○ Loop                             │
│ ○ Stop                             │
└─────────────────────────────────────┘
```
- Draggable node types
- Icons with labels
- Categories or flat list

#### 4. Canvas Area
```
┌────────────────────────────────────────────────────────────────────────┐
│ Canvas                                                        Zoom: 100% │
│                                                                         │
│      ┌─────────┐                                                         │
│      │ ▶ Start │                                                        │
│      └───┬─────┘                                                         │
│          │                                                               │
│          ▼                                                               │
│      ┌─────────┐                                                         │
│      │ POST    │                                                         │
│      │ Login   │                                                         │
│      └───┬─────┘                                                         │
│          │                                                               │
│          ▼                                                               │
│      ┌─────────┐                                                         │
│      │ ⏱ Delay │                                                        │
│      │  1000ms │                                                         │
│      └───┬─────┘                                                         │
│          │                                                               │
│          ▼                                                               │
│      ┌─────────┐                                                         │
│      │ GET     │                                                         │
│      │ Profile │                                                         │
│      └───┬─────┘                                                         │
│          │                                                               │
│          ▼                                                               │
│      ┌─────────┐                                                         │
│      │ ◉ Stop  │                                                         │
│      └─────────┘                                                         │
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘
```
- Infinite canvas with pan/zoom
- Nodes connected by lines
- Grid background (optional)
- Zoom controls: 50%, 75%, 100%, 150%, Fit

#### 5. Node Components
```
Start Node:
┌─────────┐
│ ▶ Start │
└─────────┘
- Green accent
- Entry point

Request Node:
┌─────────┐
│ POST    │
│ Login   │
└─────────┘
- Method badge colored by HTTP method
- Name below

Delay Node:
┌─────────┐
│ ⏱ Delay │
│  1000ms │
└─────────┘
- Timer icon
- Duration display

Condition Node:
┌─────────────┐
│ ◇ Condition │
│ status === 200│
└─────────────┘
- Diamond shape or branching lines

Stop Node:
┌─────────┐
│ ◉ Stop  │
└─────────┘
- Red accent
- End point

Variable Node:
┌───────────────────┐
│ = Variable       │
│ token = body.token│
└───────────────────┘
```

#### 6. Connection Lines
- Bezier curves or straight lines
- Arrow heads showing direction
- Color: hairline or primary (when selected)
- Labels on lines (optional)

#### 7. Node Properties Panel
```
┌───────────────────────────────────────────────────────────────────────────────────┐
│  Node Properties                                                    [✕]           │
├───────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  Request: POST /auth/login                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │ [Select or create request...]                                            │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
│                                                                                  │
│  Variable to Extract                                                             │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │ authToken = response.body.token                                          │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
│                                                                                  │
└───────────────────────────────────────────────────────────────────────────────────┘
```
- Right panel or bottom panel
- Context-sensitive to selected node
- Close button
- Form fields specific to node type

#### 8. Quick Actions Bar
```
[🔍 Find Node] [📋 Zoom Fit] [↩ Undo] [↪ Redo]
```
- Zoom to fit
- Find/select node
- Undo/redo
- Toolbar at top of canvas or bottom

---

## Output Instructions

Create Figma frames for:
1. **Flow canvas** with nodes and connections
2. **Node palette** with all node types
3. **Properties panel** for different node types
4. **Flow list** panel

Proper naming: "FLOW-001_FlowCanvas_Default", "FLOW-001_FlowCanvas_Properties", etc.
