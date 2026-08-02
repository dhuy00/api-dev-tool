# Màn hình Collection Manager

## 1. Tổng quan

- **Mã màn hình:** COL-001
- **Tên màn hình:** Collection Manager
- **Loại:** Settings/Management Screen
- **Vị trí:** Project → Collection → Settings icon
- **Yêu cầu:** Editor role trở lên

---

## 2. Mục đích

Quản lý collection: đổi tên, mô tả, thêm mô tả documentation, xóa collection.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  ← Back to Project                                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  📂 Authentication API                                       │  │
│  │     Collection for auth-related endpoints                     │  │
│  │     8 requests · 3 folders · Updated 2h ago                 │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  GENERAL                                                     │  │
│  │  ─────────────────────────────────────────────────────────  │  │
│  │                                                              │  │
│  │  Collection Name *                                           │  │
│  │  ┌───────────────────────────────────────────────────────┐ │  │
│  │  │ Authentication API                                      │ │  │
│  │  └───────────────────────────────────────────────────────┘ │  │
│  │                                                              │  │
│  │  Description                                                │  │
│  │  ┌───────────────────────────────────────────────────────┐ │  │
│  │  │ Collection containing all authentication endpoints    │ │  │
│  │  │ including login, logout, and session management.      │ │  │
│  │  └───────────────────────────────────────────────────────┘ │  │
│  │                                                              │  │
│  │                              [Save Changes]                  │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  DOCUMENTATION                                               │  │
│  │  ─────────────────────────────────────────────────────────  │  │
│  │                                                              │  │
│  │  Overview                                                    │  │
│  │  ┌───────────────────────────────────────────────────────┐ │  │
│  │  │ This collection contains endpoints for user            │ │  │
│  │  │ authentication and session management.                 │ │  │
│  │  │                                                         │ │  │
│  │  │ ## Authentication Methods                              │ │  │
│  │  │ All endpoints require Bearer token authentication.      │ │  │
│  │  └───────────────────────────────────────────────────────┘ │  │
│  │                                                              │  │
│  │  [Save Documentation]                                       │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  RUN COLLECTION                                             │  │
│  │  ─────────────────────────────────────────────────────────  │  │
│  │                                                              │  │
│  │  ┌───────────────────────────────────────────────────────┐ │  │
│  │  │ Environment: [Development ▼]                         │ │  │
│  │  │                                                         │ │  │
│  │  │ ☐ Run folder order                                    │ │  │
│  │  │ ☐ Stop on error                                       │ │  │
│  │  │ ☐ Save responses                                      │ │  │
│  │  │                                                         │ │  │
│  │  └───────────────────────────────────────────────────────┘ │  │
│  │                                                              │  │
│  │  [▶ Run Collection]                                         │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  DANGER ZONE                                                │  │
│  │  ─────────────────────────────────────────────────────────  │  │
│  │                                                              │  │
│  │  ⚠️ Delete Collection                                        │  │
│  │  Permanently delete this collection and all its contents.   │  │
│  │  This action cannot be undone.                              │  │
│  │  [Delete Collection]                                        │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Collection Header
- Icon
- Name
- Description
- Stats (requests, folders)
- Last updated

### 4.2 General Section
- **Name field:** Required
- **Description field:** Optional
- **Save button:** Primary

### 4.3 Documentation Section
- **Markdown editor:** For overview
- **Save button:** Secondary

### 4.4 Run Collection Section
- **Environment selector:** Dropdown
- **Options checkboxes:**
  - Run folder order
  - Stop on error
  - Save responses
- **Run button:** Primary with icon

### 4.5 Danger Zone
- **Delete button:** Red, destructive

---

## 5. Delete Confirmation

```
┌─────────────────────────────────────────┐
│                                          │
│  ⚠️ Delete Collection                     │
│                                          │
│  This will permanently delete:           │
│  • 8 requests                           │
│  • 3 folders                           │
│  • All history                         │
│                                          │
│  This action cannot be undone.          │
│                                          │
│  ┌─────────────────────────────────────┐│
│  │ Type "Authentication API" to confirm:││
│  │ [____________________________]     ││
│  └─────────────────────────────────────┘│
│                                          │
│        [Cancel]  [Delete Collection]    │
│                        (red, disabled)  │
│                                          │
└─────────────────────────────────────────┘
```

---

## 6. Related Screens

- [../project/02-project-view.md](../project/02-project-view.md) - Project view

---

## 7. Acceptance Criteria

- [ ] Hiển thị collection info
- [ ] Có thể đổi tên và mô tả
- [ ] Có thể viết documentation (markdown)
- [ ] Có thể chạy collection
- [ ] Có thể xóa collection với confirmation
- [ ] Delete yêu cầu nhập tên xác nhận
