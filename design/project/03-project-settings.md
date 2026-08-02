# Màn hình Project Settings

## 1. Tổng quan

- **Mã màn hình:** PRJ-003
- **Tên màn hình:** Project Settings
- **Loại:** Settings Screen
- **Vị trí:** Project view → Settings icon
- **Yêu cầu:** Editor role trở lên

---

## 2. Mục đích

Quản lý cài đặt project như đổi tên, mô tả, sharing, và xóa project.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  ← Back to Project                                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  Project Settings                                             │  │
│  │  ─────────────────────────────────────────────────────────  │  │
│  │                                                              │  │
│  │  📁 Authentication API                                        │  │
│  │     REST API for authentication                              │  │
│  │     Created Dec 15, 2024 · Owner: John Doe                   │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  GENERAL                                                     │  │
│  │  ─────────────────────────────────────────────────────────  │  │
│  │                                                              │  │
│  │  Project Name *                                              │  │
│  │  ┌───────────────────────────────────────────────────────┐ │  │
│  │  │ Authentication API                                     │ │  │
│  │  └───────────────────────────────────────────────────────┘ │  │
│  │                                                              │  │
│  │  Description                                                │  │
│  │  ┌───────────────────────────────────────────────────────┐ │  │
│  │  │ REST API for user authentication and session mgmt    │ │  │
│  │  └───────────────────────────────────────────────────────┘ │  │
│  │                                                              │  │
│  │                              [Save Changes]                 │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  MEMBERS & SHARING                                          │  │
│  │  ─────────────────────────────────────────────────────────  │  │
│  │                                                              │  │
│  │  Who has access                                             │  │
│  │  ○ Everyone with the link  ● Only members to this project   │  │
│  │                                                              │  │
│  │  ┌───────────────────────────────────────────────────────┐ │  │
│  │  │ 👤 John Doe      Owner         [You]                  │ │  │
│  │  │ 👤 Jane Smith   Editor                            │ │  │
│  │  └───────────────────────────────────────────────────────┘ │  │
│  │                                                              │  │
│  │  [Manage Project Members]                                   │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  DANGER ZONE                                                │  │
│  │  ─────────────────────────────────────────────────────────  │  │
│  │                                                              │  │
│  │  ⚠️ Duplicate Project                                        │  │
│  │  Create a copy of this project.                              │  │
│  │  [Duplicate Project]                                         │  │
│  │                                                              │  │
│  │  ⚠️ Delete Project                                           │  │
│  │  Permanently delete this project and all its contents.       │  │
│  │  This action cannot be undone.                               │  │
│  │  [Delete Project]                                           │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Project Header
- Icon
- Name
- Description
- Created date
- Owner name

### 4.2 General Section
- **Name field:** Required, 1-100 chars
- **Description field:** Optional, max 500 chars
- **Save button:** Primary button

### 4.3 Members Section
- **Access toggle:** Radio buttons
  - "Everyone with the link"
  - "Only members to this project"
- **Member list:** Name, role
- **"You" badge:** For current user
- **Manage link:** Navigate to full member management

### 4.4 Danger Zone
- **Duplicate button:** Secondary style
- **Delete button:** Red, destructive style → confirmation modal

---

## 5. Access Control Options

| Option | Description |
|--------|-------------|
| Everyone with link | Any workspace member can view |
| Only members | Explicit member list required |

---

## 6. Delete Confirmation

```
┌─────────────────────────────────────────┐
│                                          │
│  ⚠️ Delete Project                       │
│                                          │
│  This will permanently delete:            │
│  • 15 requests                         │
│  • 8 collections                        │
│  • 3 environments                      │
│  • 2 test suites                       │
│  • All history and documentation         │
│                                          │
│  This action cannot be undone.           │
│                                          │
│  ┌─────────────────────────────────────┐│
│  │ Type "Authentication API" to confirm: ││
│  │ [____________________________]     ││
│  └─────────────────────────────────────┘│
│                                          │
│        [Cancel]  [Delete Forever]       │
│                     (red, disabled)     │
│                                          │
└─────────────────────────────────────────┘
```

---

## 7. Related Screens

- [01-project-list.md](01-project-list.md) - Project list
- [02-project-view.md](02-project-view.md) - Project view

---

## 8. Acceptance Criteria

- [ ] Hiển thị project info hiện tại
- [ ] Có thể đổi tên và mô tả
- [ ] Có thể cập nhật access settings
- [ ] Có thể duplicate project
- [ ] Có thể xóa project với confirmation
- [ ] Delete yêu cầu nhập tên xác nhận
- [ ] Chỉ Editor+ mới có quyền edit
