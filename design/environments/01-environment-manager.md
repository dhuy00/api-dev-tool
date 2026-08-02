# Màn hình Environment Manager

## 1. Tổng quan

- **Mã màn hình:** ENV-001
- **Tên màn hình:** Environment Manager / Environment Settings
- **Loại:** Settings Screen
- **Vị trí:** Project → Environments tab → Environment settings
- **Yêu cầu:** Editor role trở lên

---

## 2. Mục đích

Quản lý environments và variables cho project. Tạo, sửa, xóa environments và các biến trong đó.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Environments                                            [+ New Environment] │
│  ───────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                          │ │
│  │  🌐 Development                                     [⚙️] [🗑️] [⋮]    │ │
│  │  Active                                                                  │ │
│  │  ─────────────────────────────────────────────────────────────────────  │ │
│  │                                                                          │ │
│  │  Variable          Initial Value               Current Value      Secret │ │
│  │  ─────────────────────────────────────────────────────────────────────│ │
│  │  ┌─────────────────────────────────┬─────────────────────────┬─────┐  │ │
│  │  │ baseUrl                         │ http://localhost:3000   │ ─ │  │ │
│  │  ├─────────────────────────────────┼─────────────────────────┼─────┤  │ │
│  │  │ apiVersion                      │ v2                      │ ─ │  │ │
│  │  ├─────────────────────────────────┼─────────────────────────┼─────┤  │ │
│  │  │ authToken                       │ ••••••••••••••          │ ✓ │  │ │
│  │  ├─────────────────────────────────┼─────────────────────────┼─────┤  │ │
│  │  │ apiKey                          │ ••••••••••••••          │ ✓ │  │ │
│  │  └─────────────────────────────────┴─────────────────────────┴─────┘  │ │
│  │  [+ Add Variable]                                                         │ │
│  │                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                          │ │
│  │  🌐 Staging                                           [⚙️] [🗑️] [⋮]    │ │
│  │  ─────────────────────────────────────────────────────────────────────  │ │
│  │                                                                          │ │
│  │  Variable          Initial Value               Current Value      Secret │ │
│  │  ─────────────────────────────────────────────────────────────────────│ │
│  │  ┌─────────────────────────────────┬─────────────────────────┬─────┐  │ │
│  │  │ baseUrl                         │ https://staging.api...  │ ─ │  │ │
│  │  ├─────────────────────────────────┼─────────────────────────┼─────┤  │ │
│  │  │ authToken                       │ ••••••••••••••          │ ✓ │  │ │
│  │  └─────────────────────────────────┴─────────────────────────┴─────┘  │ │
│  │  [+ Add Variable]                                                         │ │
│  │                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                          │ │
│  │  🌐 Production                                          [⚙️] [🗑️] [⋮]   │ │
│  │                                                                          │ │
│  │  ⚠️ Warning: This is a production environment.                          │ │
│  │                                                                          │ │
│  │  Variable          Initial Value               Current Value      Secret │ │
│  │  ─────────────────────────────────────────────────────────────────────│ │
│  │  ┌─────────────────────────────────┬─────────────────────────┬─────┐  │ │
│  │  │ baseUrl                         │ https://api.example.com │ ─ │  │ │
│  │  ├─────────────────────────────────┼─────────────────────────┼─────┤  │ │
│  │  │ authToken                       │ ••••••••••••••          │ ✓ │  │ │
│  │  └─────────────────────────────────┴─────────────────────────┴─────┘  │ │
│  │  [+ Add Variable]                                                         │ │
│  │                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Environment Card
- **Icon:** Globe icon
- **Name:** Environment name
- **Status badge:** "Active" nếu đang active
- **Actions:** Settings, Delete, More menu

### 4.2 Variable Table
- **Columns:**
  - Variable (name)
  - Initial Value
  - Current Value
  - Secret (checkbox)

### 4.3 Variable Row
- **Name input:** Variable name
- **Initial value input:** Default value
- **Current value input:** Override value (optional)
- **Secret toggle:** Mark as secret
- **Actions:** Enable/disable, delete

### 4.4 Add Variable
- Button để thêm row mới

### 4.5 Production Warning
- Yellow warning banner
- Icon: ⚠️

---

## 5. Create/Edit Environment Modal

```
┌─────────────────────────────────────────┐
│  Create New Environment             [X] │
│  ────────────────────────────────────── │
│                                          │
│  Environment Name *                       │
│  ┌─────────────────────────────────────┐│
│  │ Staging                              ││
│  └─────────────────────────────────────┘│
│                                          │
│  Description                             │
│  ┌─────────────────────────────────────┐│
│  │ Staging environment for testing...  ││
│  └─────────────────────────────────────┘│
│                                          │
│  ☑ Set as default environment            │
│                                          │
│  ┌─────────────────────────────────────┐│
│  │         CREATE ENVIRONMENT            ││
│  └─────────────────────────────────────┘│
│                                          │
│        [Cancel]                          │
│                                          │
└─────────────────────────────────────────┘
```

---

## 6. Luồng chức năng

### 6.1 Tạo Environment

```
[User clicks "+ New Environment"]
        ↓
    ┌───────────────────┐
    │ Open create modal   │
    └───────────────────┘
        ↓
[User enters name, description]
        ↓
[User clicks "Create"]
        ↓
    ┌───────────────────┐
    │ API POST          │
    │ /environments     │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Create environment   │
    │ with empty vars     │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Open env for editing │
    └───────────────────┘
```

### 6.2 Thêm/Sửa Variable

```
[User clicks "+ Add Variable"]
        ↓
[New row appears in table]
        ↓
[User enters variable name]
        ↓
[User enters initial value]
        ↓
[User toggles "Secret" if needed]
        ↓
[Auto-save or click "Save"]
        ↓
    ┌───────────────────┐
    │ API PUT/PATCH      │
    │ /environments/:id  │
    │ { variables: [...] }│
    └───────────────────┘
```

### 6.3 Xóa Environment

```
[User clicks delete on env]
        ↓
    ┌───────────────────┐
    │ Show confirmation   │
    └───────────────────┘
        ↓
[User confirms]
        ↓
    ┌───────────────────┐
    │ API DELETE         │
    │ /environments/:id │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Remove from list     │
    └───────────────────┘
```

---

## 7. Variable Scope Priority

```
┌─────────────────────────────────────────────────────────────┐
│  Variable Resolution Order (Highest to Lowest)              │
│  ─────────────────────────────────────────────────────────│
│  1. Request Variables      ← Most specific                 │
│  2. Collection Variables                                    │
│  3. Environment Variables                                   │
│  4. Project Variables                                       │
│  5. Workspace Variables                                     │
│  6. Global Variables                                        │
│  7. Runtime Variables         ← Least specific             │
└─────────────────────────────────────────────────────────────┘
```

---

## 8. Secret Variable Handling

| State | Display |
|-------|---------|
| Value hidden | Bullets (•••••••) |
| Reveal action | Eye icon (on hover/click) |
| In exports | Excluded unless explicitly included |
| In docs | Excluded |
| In logs | Masked |

---

## 9. Variable Actions

```
┌─────────────────────────────────────────────┐
│                                             │
│  baseUrl     http://localhost:3000    ─     │
│                                             │
│  [👁 Show]  [🔄 Reset]  [🗑 Delete]         │
│                                             │
└─────────────────────────────────────────────┘
```

- **Show:** Reveal secret value temporarily
- **Reset:** Reset current value to initial
- **Delete:** Remove variable

---

## 10. Error Handling

| Error | Message |
|-------|---------|
| Name required | "Environment name is required" |
| Name exists | "An environment with this name exists" |
| Duplicate var | "Variable name already exists" |
| Delete active | "Cannot delete the active environment" |

---

## 11. Related Screens

- [02-environment-quick-switch.md](02-environment-quick-switch.md) - Quick switcher
- [../project/02-project-view.md](../project/02-project-view.md) - Project view

---

## 12. Acceptance Criteria

- [ ] Hiển thị tất cả environments
- [ ] Hiển thị active environment badge
- [ ] Có thể tạo environment mới
- [ ] Có thể đổi tên và mô tả
- [ ] Có thể thêm/sửa/xóa variables
- [ ] Variables hiển thị secret masking
- [ ] Có thể toggle secret flag
- [ ] Current value vs initial value hoạt động
- [ ] Có thể xóa environment
- [ ] Production warning hiển thị cho prod env
- [ ] Auto-save hoặc manual save
