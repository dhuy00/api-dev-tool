# Màn hình Request Flow Builder

## 1. Tổng quan

- **Mã màn hình:** FLOW-001
- **Tên màn hình:** Request Flow Builder
- **Loại:** Visual Editor Screen
- **Vị trí:** Project → Flows tab
- **Yêu cầu:** Editor role trở lên

---

## 2. Mục đích

Tạo và quản lý các request flows với drag-and-drop interface. Flows là chuỗi các requests với logic điều khiển và data passing.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│  Flow Builder                                    [Validate] [Run ▶] [Save] [⋮]          │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                 │
│  ┌──────────────────┬────────────────────────────────────────────────────────────────┐ │
│  │                  │                                                                │ │
│  │  FLOWS           │   Canvas                                                        │ │
│  │  ──────────────  │   ─────────────────────────────────────────────────────────  │ │
│  │  📋 Login Flow  │                                                                │ │
│  │  📋 User CRUD  │        ┌─────────┐                                              │ │
│  │  📋 Order Flow │        │ ▶ Start │                                             │ │
│  │                  │        └────┬────┘                                              │ │
│  │  ──────────────  │             │                                                   │ │
│  │  [+ New Flow]   │             ▼                                                   │ │
│  │                  │        ┌─────────┐                                              │ │
│  │  NODE PALETTE   │        │ POST    │                                              │ │
│  │  ──────────────  │        │ Login   │                                             │ │
│  │                  │        └───┬─────┘                                              │ │
│  │  ○ Start         │            │                                                   │ │
│  │  ○ Request       │            ▼                                                   │ │
│  │  ○ Delay        │        ┌─────────┐                                              │ │
│  │  ○ Condition    │        │ ⏱ Delay │                                             │ │
│  │  ○ Variable     │        │  1000ms │                                             │ │
│  │  ○ Extract      │        └────┬────┘                                              │ │
│  │  ○ Assert        │             ▼                                                   │ │
│  │  ○ Loop         │        ┌─────────┐                                              │ │
│  │  ○ Stop         │        │ GET     │                                              │ │
│  │                  │        │ Profile │                                             │ │
│  │  ──────────────  │        └───┬─────┘                                              │ │
│  │  QUICK ACTIONS   │            │                                                   │ │
│  │  ──────────────  │            ▼                                                   │ │
│  │  [🔍 Find Node] │        ┌─────────┐                                              │ │
│  │  [📋 Zoom Fit] │        │ ◉ Stop  │                                             │ │
│  │  [↩ Undo]      │        └─────────┘                                              │ │
│  │                  │                                                                │ │
│  └──────────────────┴────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Node Properties                                                               │ │
│  ├───────────────────────────────────────────────────────────────────────────────────┤ │
│  │                                                                                   │ │
│  │  Node: POST Login                                                                │ │
│  │  ────────────────────────────────────────────────────────────────────────────    │ │
│  │                                                                                   │ │
│  │  Request:                                                                          │ │
│  │  [POST /auth/login ▼]                                                            │ │
│  │                                                                                   │ │
│  │  Extract Variables:                                                                │ │
│  │  ┌───────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ Variable        │ From                     │ Save As                       │ │ │
│  │  ├─────────────────┼─────────────────────────┼──────────────────────────────┤ │ │
│  │  │ authToken      │ response.body.token      │ {{token}}                    │ │ │
│  │  │ userId         │ response.body.user.id   │ {{userId}}                  │ │ │
│  │  └─────────────────┴─────────────────────────┴──────────────────────────────┘ │ │
│  │  [+ Add Variable]                                                                 │ │
│  │                                                                                   │ │
│  │  On Error:                                                                        │ │
│  │  [Stop Flow ▼]                                                                   │ │
│  │                                                                                   │ │
│  └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                 │
└───────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Sidebar - Flow List
- **Flow list:** Saved flows
- **Create button:** New flow

### 4.2 Sidebar - Node Palette
- **Start node:** Entry point
- **Request node:** HTTP request
- **Delay node:** Wait duration
- **Condition node:** If/else logic
- **Variable node:** Set variables
- **Extract node:** Extract data
- **Assert node:** Assertions
- **Loop node:** Iterate
- **Stop node:** End point

### 4.3 Sidebar - Quick Actions
- **Find Node:** Search
- **Zoom Fit:** Auto-fit canvas
- **Undo/Redo:** History

### 4.4 Canvas
- **Drag-drop nodes:** From palette to canvas
- **Connect nodes:** Draw connections
- **Select nodes:** Click to select
- **Move nodes:** Drag to reposition

### 4.5 Properties Panel
- **Node properties:** Configure selected node
- **Variable extraction:** Map response data to variables
- **Error handling:** What to do on error

---

## 5. Node Types

### Start Node
```
┌─────────────────┐
│ ▶ Start         │
│ Entry point     │
└─────────────────┘
```

### Request Node
```
┌─────────────────────────┐
│ POST /auth/login        │
│ ─────────────────────── │
│ Request: [Select ▼]    │
│ Timeout: [30s]          │
│                         │
│ Variables to extract:   │
│ • response.token        │
│ • response.userId       │
└─────────────────────────┘
```

### Delay Node
```
┌─────────────────┐
│ ⏱ Delay         │
│ ─────────────── │
│ Duration:       │
│ [1000] ms       │
└─────────────────┘
```

### Condition Node
```
┌─────────────────────────────────┐
│ ☐ Condition                      │
│ ──────────────────────────────── │
│ Check: {{response.success}}      │
│                                 │
│ ○ Equals [true]                 │
│ ○ Not empty                     │
│ ○ Contains [value]              │
│                                 │
│ If true → Port 1                │
│ If false → Port 2               │
└─────────────────────────────────┘
```

### Stop Node
```
┌─────────────────┐
│ ◉ Stop          │
│ ─────────────── │
│ ○ Success       │
│ ○ Failed        │
│ Message: [...]  │
└─────────────────┘
```

---

## 6. Luồng chức năng

### 6.1 Tạo Flow

```
[User clicks "+ New Flow"]
        ↓
[Create flow modal]
        ↓
[User enters flow name]
        ↓
[User clicks "Create"]
        ↓
[Open flow in canvas editor]
```

### 6.2 Thêm Nodes

```
[User drags node from palette]
        ↓
[Drop on canvas]
        ↓
[Node appears at drop position]
        ↓
[Node auto-connected if dropped on connector]
```

### 6.3 Kết nối Nodes

```
[User clicks output port]
        ↓
[Drag to input port]
        ↓
[Connection line drawn]
        ↓
[Connection saved]
```

### 6.4 Chạy Flow

```
[User clicks "Run"]
        ↓
    ┌───────────────────┐
    │ Validate flow       │
    │ (check connections) │
    └───────────────────┘
        ↓ (valid)
    ┌───────────────────┐
    │ Start execution      │
    │ from Start node       │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Execute nodes         │
    │ in sequence           │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show results         │
    │ in execution log     │
    └───────────────────┘
```

---

## 7. Flow Execution Log

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Execution Log                                        Duration: 2.3s        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ✓ Start                                                   0ms              │
│  │                                                                        │
│  ├─► POST /auth/login                                      245ms            │
│  │   Request: { email, password }                                         │
│  │   Response: 200 OK { token, userId }                                    │
│  │   Extracted: token, userId                                              │
│  │                                                                        │
│  ├─► Delay (1000ms)                                        1000ms           │
│  │                                                                        │
│  ├─► GET /users/profile                                    189ms           │
│  │   Headers: { Authorization: Bearer {{token}} }                        │
│  │   Response: 200 OK { id, email, name }                                │
│  │                                                                        │
│  └─✓ Stop (Success)                                           189ms        │
│                                                                              │
│  ────────────────────────────────────────────────────────────────────────── │
│  Nodes: 4/4 executed · Variables: 2 extracted · Status: Success            │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Variable Reference Syntax

```
// Reference response data from a node
{{nodes.login.response.body.token}}

// Reference flow variables
{{flow.variables.userId}}

// Reference environment variables
{{env.baseUrl}}

// Built-in variables
{{$timestamp}}    // Current timestamp
{{$guid}}         // Random GUID
{{$randomInt}}    // Random integer
```

---

## 9. Error Handling

| Error | Behavior |
|-------|----------|
| Missing variable | Flow stops, highlight missing var |
| Request timeout | Configurable: stop/retry/continue |
| Assertion failed | Configurable: stop/continue |
| Invalid connection | Validation error shown |

---

## 10. Related Screens

- [02-flow-results.md](02-flow-results.md) - Flow execution results

---

## 11. Acceptance Criteria

- [ ] Hiển thị flow canvas với nodes
- [ ] Có thể drag-drop nodes từ palette
- [ ] Có thể kết nối nodes
- [ ] Có thể configure node properties
- [ ] Variable extraction hoạt động
- [ ] Condition nodes có multiple outputs
- [ ] Flow validation hoạt động
- [ ] Có thể chạy flow
- [ ] Execution log hiển thị results
- [ ] Có thể save/load flows
