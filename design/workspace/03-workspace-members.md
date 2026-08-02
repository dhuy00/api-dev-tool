# Màn hình Workspace Members

## 1. Tổng quan

- **Mã màn hình:** WS-003
- **Tên màn hình:** Workspace Members
- **Loại:** Settings Sub-page
- **Vị trí:** Workspace Settings → Members & Roles
- **Yêu cầu:** Owner/Admin role

---

## 2. Mục đích

Quản lý thành viên workspace: xem danh sách, thay đổi vai trò, xóa thành viên.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│ ← Back to Settings                                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  Members & Roles                           [+ Invite Member] │  │
│  │  ─────────────────────────────────────────────────────────  │  │
│  │                                                              │  │
│  │  Search members...                              [🔍]        │  │
│  │  Filter: [All roles ▼]                                      │  │
│  │                                                              │  │
│  │  ┌───────────────────────────────────────────────────────┐   │  │
│  │  │ OWNERS (1)                                            │   │  │
│  │  ├───────────────────────────────────────────────────────┤   │  │
│  │  │ 👤 John Doe                        owner@email.com    │   │  │
│  │  │    Joined Dec 15, 2024                                │   │  │
│  │  │                                   [You]               │   │  │
│  │  └───────────────────────────────────────────────────────┘   │  │
│  │                                                              │  │
│  │  ┌───────────────────────────────────────────────────────┐   │  │
│  │  │ ADMINS (2)                                            │   │  │
│  │  ├───────────────────────────────────────────────────────┤   │  │
│  │  │ 👤 Jane Smith                       jane@email.com    │   │  │
│  │  │    Joined Jan 10, 2025                                │   │  │
│  │  │                                        [Edit ▼] [✕]   │   │  │
│  │  ├───────────────────────────────────────────────────────┤   │  │
│  │  │ 👤 Bob Wilson                         bob@email.com   │   │  │
│  │  │    Joined Feb 20, 2025                                │   │  │
│  │  │                                        [Edit ▼] [✕]   │   │  │
│  │  └───────────────────────────────────────────────────────┘   │  │
│  │                                                              │  │
│  │  ┌───────────────────────────────────────────────────────┐   │  │
│  │  │ EDITORS (5)                                           │   │  │
│  │  ├───────────────────────────────────────────────────────┤   │  │
│  │  │ 👤 Alice Brown                      alice@email.com   │   │  │
│  │  │ 👤 Charlie Davis                     charlie@...     │   │  │
│  │  │ 👤 David Evans                       david@...       │   │  │
│  │  │ 👤 Eva Frank                         eva@...        │   │  │
│  │  │ 👤 Frank Garcia                       frank@...     │   │  │
│  │  │                                    [Edit ▼] [✕] (row)│   │  │
│  │  └───────────────────────────────────────────────────────┘   │  │
│  │                                                              │  │
│  │  ┌───────────────────────────────────────────────────────┐   │  │
│  │  │ VIEWERS (3)                                           │   │  │
│  │  ├───────────────────────────────────────────────────────┤   │  │
│  │  │ 👤 Grace Hill                          grace@...      │   │  │
│  │  │ 👤 Henry Irving                        henry@...     │   │  │
│  │  │ 👤 Ivy Johnson                         ivy@...       │   │  │
│  │  │                                        [Edit ▼] [✕] │   │  │
│  │  └───────────────────────────────────────────────────────┘   │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Header
- Title: "Members & Roles"
- Invite button: Primary button

### 4.2 Search & Filter
- **Search:** Text input to filter by name/email
- **Filter:** Dropdown to filter by role (All, Owners, Admins, Editors, Viewers)

### 4.3 Member List (Grouped by Role)
- **Role section header:** "OWNERS (1)", "ADMINS (2)", etc.
- **Member row:**
  - Avatar
  - Name
  - Email
  - Join date
  - Role badge
  - "You" badge (if current user)
  - Actions: Edit role dropdown, Remove button

### 4.4 Role Dropdown
- Current role highlighted
- Other roles as options
- "Remove from workspace" option at bottom

### 4.5 Invite Button → Opens [04-invite-member.md](04-invite-member.md)

---

## 5. Luồng chức năng

### 5.1 Xem Members

```
[User navigates to Members page]
        ↓
    ┌───────────────────┐
    │ API GET           │
    │ /workspaces/:id/  │
    │ members           │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Group members      │
    │ by role           │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Display grouped     │
    │ list with actions   │
    └───────────────────┘
```

### 5.2 Thay đổi Role

```
[User clicks "Edit" on member]
        ↓
    ┌───────────────────┐
    │ Open role dropdown  │
    └───────────────────┘
        ↓
[User selects new role]
        ↓
    ┌───────────────────┐
    │ API PATCH          │
    │ /workspaces/:id/   │
    │ members/:userId    │
    │ { role: "editor" }│
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Update member's     │
    │ role in database    │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show success toast │
    │ "Role updated"     │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Refresh member     │
    │ list               │
    └───────────────────┘
```

### 5.3 Xóa Member

```
[User clicks "✕" on member]
        ↓
    ┌───────────────────┐
    │ Show confirmation   │
    │ dialog              │
    └───────────────────┘
        ↓
[User confirms]
        ↓
    ┌───────────────────┐
    │ API DELETE         │
    │ /workspaces/:id/   │
    │ members/:userId    │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Remove member       │
    │ from workspace     │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Refresh member     │
    │ list               │
    └───────────────────┘
```

---

## 6. Role Dropdown Options

```
┌─────────────────────────┐
│ 👑 Owner                │ ← Current (disabled)
├─────────────────────────┤
│ ⚙️ Admin                │ ← Option
├─────────────────────────┤
│ ✏️ Editor               │ ← Option
├─────────────────────────┤
│ 👁️ Viewer              │ ← Option
├─────────────────────────┤
│ ─────────────────────── │
│ 🗑️ Remove from workspace│ ← Danger option
└─────────────────────────┘
```

---

## 7. Role Descriptions

| Role | Description | Badge |
|------|-------------|-------|
| Owner | Full control, can transfer ownership | 👑 |
| Admin | Manage members and settings | ⚙️ |
| Editor | Create and modify resources | ✏️ |
| Viewer | View only | 👁️ |

---

## 8. Remove Confirmation

```
┌─────────────────────────────────────────┐
│                                          │
│  Remove Member                           │
│                                          │
│  Are you sure you want to remove         │
│  Jane Smith from this workspace?         │
│                                          │
│  Jane will lose access to:              │
│  • 8 projects                           │
│  • 23 requests                          │
│  • All collections                      │
│                                          │
│        [Cancel]  [Remove Member]        │
│                     (red button)         │
│                                          │
└─────────────────────────────────────────┘
```

---

## 9. Permissions Matrix

| Action | Owner | Admin | Editor | Viewer |
|--------|-------|-------|--------|--------|
| View members | ✓ | ✓ | ✓ | ✓ |
| Change own role | ✗ | ✗ | ✗ | ✗ |
| Change others' role | ✓ | ✓ | ✗ | ✗ |
| Remove members | ✓ | ✓ | ✗ | ✗ |
| Transfer ownership | ✓ | ✗ | ✗ | ✗ |
| Delete workspace | ✓ | ✗ | ✗ | ✗ |

---

## 10. Constraints

- Workspace must have at least 1 Owner
- Cannot change own role
- Cannot remove self if owner
- Cannot remove other owners (only transfer ownership)

---

## 11. Related Screens

- [02-workspace-settings.md](02-workspace-settings.md) - Workspace settings
- [04-invite-member.md](04-invite-member.md) - Invite modal

---

## 12. Acceptance Criteria

- [ ] Hiển thị tất cả members grouped theo role
- [ ] Có thể search/filter members
- [ ] Có thể thay đổi role của member
- [ ] Cannot thay đổi own role
- [ ] Cannot remove owner (chỉ transfer)
- [ ] Có thể remove members (Admin trở lên)
- [ ] Confirmation dialog trước khi remove
- [ ] Toast thông báo sau khi thay đổi
- [ ] "You" badge hiển thị cho current user
