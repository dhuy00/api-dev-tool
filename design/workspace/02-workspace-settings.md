# Màn hình Workspace Settings

## 1. Tổng quan

- **Mã màn hình:** WS-002
- **Tên màn hình:** Workspace Settings
- **Loại:** Settings Screen
- **Vị trí:** Workspace → Settings icon → Workspace Settings
- **Yêu cầu:** Owner/Admin role

---

## 2. Mục đích

Cho phép quản lý cài đặt workspace như đổi tên, mô tả, avatar, xóa workspace, và chuyển quyền sở hữu.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│ ← Back to Workspaces                                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  Workspace Settings                                          │  │
│  │  ─────────────────────────────────────────────────────────  │  │
│  │                                                              │  │
│  │  ┌──────────┐                                               │  │
│  │  │          │  API Team                    👑 Owner        │  │
│  │  │   📁     │  12 projects · 5 members                    │  │
│  │  │          │                                               │  │
│  │  └──────────┘  [Change Avatar]                             │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  GENERAL                                                     │  │
│  │  ─────────────────────────────────────────────────────────  │  │
│  │                                                              │  │
│  │  Workspace Name                                              │  │
│  │  ┌───────────────────────────────────────────────────────┐ │  │
│  │  │ API Team                                              │ │  │
│  │  └───────────────────────────────────────────────────────┘ │  │
│  │                                                              │  │
│  │  Workspace Slug                                              │  │
│  │  ┌───────────────────────────────────────────────────────┐ │  │
│  │  │ api-team                                              │ │  │
│  │  └───────────────────────────────────────────────────────┘ │  │
│  │  🔗 https://api-forge.com/w/api-team                       │  │
│  │                                                              │  │
│  │  Description                                                 │  │
│  │  ┌───────────────────────────────────────────────────────┐ │  │
│  │  │ Team workspace for API development and testing       │ │  │
│  │  │                                                       │ │  │
│  │  └───────────────────────────────────────────────────────┘ │  │
│  │                                                              │  │
│  │                              [Save Changes]                │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  MEMBERS & ROLES                              [Invite Member]│  │
│  │  ─────────────────────────────────────────────────────────  │  │
│  │                                                              │  │
│  │  ┌───────────────────────────────────────────────────────┐ │  │
│  │  │ 👤 John Doe        Owner        owner@email.com   ⚙️ │  │
│  │  │ 👤 Jane Smith      Admin        jane@email.com     ⚙️ │  │
│  │  │ 👤 Bob Wilson      Editor       bob@email.com     ⚙️ │  │
│  │  │ 👤 Alice Brown     Viewer       alice@email.com   ⚙️ │  │
│  │  └───────────────────────────────────────────────────────┘ │  │
│  │                                                              │  │
│  │  [Manage Members →]                                         │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  DANGER ZONE                                                │  │
│  │  ─────────────────────────────────────────────────────────  │  │
│  │                                                              │  │
│  │  ⚠️ Transfer Ownership                                       │  │
│  │  Transfer workspace ownership to another member.             │  │
│  │  ┌───────────────────────────────────────────────────────┐ │  │
│  │  │ Select member: [Jane Smith ▼]                        │ │  │
│  │  └───────────────────────────────────────────────────────┘ │  │
│  │  [Transfer Ownership]                                       │  │
│  │                                                              │  │
│  │  ⚠️ Delete Workspace                                         │  │
│  │  Permanently delete this workspace and all its contents.   │  │
│  │  This action cannot be undone.                              │  │
│  │  [Delete Workspace]                                         │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Workspace Header
- Avatar/Icon
- Name
- Role badge
- Stats (projects, members)
- Change avatar button

### 4.2 General Section
- **Name field:** Text input
- **Slug field:** Auto-generated, editable
- **URL preview:** Shows workspace URL
- **Description field:** Textarea
- **Save button:** Primary button

### 4.3 Members Section
- Member list với avatar, name, email, role
- Role badge (color-coded)
- Edit role button (dropdown)
- Remove member button
- Invite button

### 4.4 Danger Zone
- **Transfer Ownership:** Dropdown + confirm button
- **Delete Workspace:** Red button → confirmation modal

---

## 5. Luồng chức năng

### 5.1 Cập nhật General

```
[User edits name/description]
        ↓
[User clicks "Save Changes"]
        ↓
    ┌───────────────────┐
    │ Validate fields     │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ API PATCH          │
    │ /workspaces/:id   │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Update workspace   │
    │ in database        │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show success toast │
    │ "Settings saved"   │
    └───────────────────┘
```

### 5.2 Chuyển Ownership

```
[User selects new owner from dropdown]
        ↓
[User clicks "Transfer Ownership"]
        ↓
    ┌───────────────────┐
    │ Show confirmation  │
    │ dialog with        │
    │ warning             │
    └───────────────────┘
        ↓
[User confirms]
        ↓
    ┌───────────────────┐
    │ API POST          │
    │ /workspaces/:id/   │
    │ transfer          │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Update owner       │
    │ Set old owner      │
    │ as Admin          │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Send notification │
    │ to new owner       │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Refresh page       │
    └───────────────────┘
```

### 5.3 Xóa Workspace

```
[User clicks "Delete Workspace"]
        ↓
    ┌───────────────────┐
    │ Show confirmation  │
    │ modal with:         │
    │ - Warning text      │
    │ - Type workspace    │
    │   name to confirm   │
    │ - Confirm button    │
    └───────────────────┘
        ↓
[User types workspace name]
        ↓
[User clicks "Delete Forever"]
        ↓
    ┌───────────────────┐
    │ API DELETE        │
    │ /workspaces/:id   │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Soft delete        │
    │ (30-day retention) │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Redirect to        │
    │ workspace list     │
    └───────────────────┘
```

---

## 6. Transfer Ownership Confirmation

```
┌─────────────────────────────────────────┐
│                                          │
│  ⚠️ Transfer Ownership                   │
│                                          │
│  You are about to transfer ownership of  │
│  "API Team" to Jane Smith.              │
│                                          │
│  After this action:                      │
│  • You will become Admin                 │
│  • Jane Smith will become Owner          │
│  • All workspace data will be transferred│
│                                          │
│  This action cannot be undone.           │
│                                          │
│  ┌─────────────────────────────────────┐ │
│  │ Type "API Team" to confirm:         │ │
│  │ [____________________________]     │ │
│  └─────────────────────────────────────┘ │
│                                          │
│        [Cancel]  [Transfer Ownership]   │
│                  (disabled until match)  │
│                                          │
└─────────────────────────────────────────┘
```

---

## 7. Delete Confirmation

```
┌─────────────────────────────────────────┐
│                                          │
│  ⚠️ Delete Workspace                     │
│                                          │
│  This will permanently delete:           │
│  • 12 projects                          │
│  • 45 requests                          │
│  • 8 environments                       │
│  • All collections and tests             │
│                                          │
│  This action cannot be undone.           │
│                                          │
│  ┌─────────────────────────────────────┐ │
│  │ Type "API Team" to confirm:         │ │
│  │ [____________________________]     │ │
│  └─────────────────────────────────────┘ │
│                                          │
│        [Cancel]  [Delete Forever]       │
│                  (red, disabled until    │
│                   name matches)          │
│                                          │
└─────────────────────────────────────────┘
```

---

## 8. Role Permissions Summary

| Action | Owner | Admin | Editor | Viewer |
|--------|-------|-------|--------|--------|
| Change name/description | ✓ | ✓ | ✗ | ✗ |
| Change avatar | ✓ | ✓ | ✗ | ✗ |
| Invite members | ✓ | ✓ | ✗ | ✗ |
| Change roles | ✓ | ✓ | ✗ | ✗ |
| Remove members | ✓ | ✓ | ✗ | ✗ |
| Transfer ownership | ✓ | ✗ | ✗ | ✗ |
| Delete workspace | ✓ | ✗ | ✗ | ✗ |

---

## 9. Validation Rules

| Field | Rules |
|-------|-------|
| Name | Required, 1-50 chars, unique in user's workspaces |
| Slug | Required, lowercase, alphanumeric + hyphens, unique |
| Description | Optional, max 500 chars |

---

## 10. Error Handling

| Error | Message |
|-------|---------|
| Name required | "Workspace name is required" |
| Name too long | "Name must be 50 characters or less" |
| Slug taken | "This URL is already taken" |
| Not owner | "Only the owner can transfer ownership" |
| Delete failed | "Unable to delete workspace. Please try again." |

---

## 11. Related Screens

- [01-workspace-list.md](01-workspace-list.md) - Workspace list
- [03-workspace-members.md](03-workspace-members.md) - Full member management
- [04-invite-member.md](04-invite-member.md) - Invite modal

---

## 12. Acceptance Criteria

- [ ] Hiển thị workspace info hiện tại
- [ ] Có thể đổi tên và mô tả
- [ ] Slug được tự động tạo từ name
- [ ] Save changes cập nhật lên server
- [ ] Chuyển ownership hoạt động đúng
- [ ] Chỉ owner mới thấy nút chuyển ownership
- [ ] Xóa workspace yêu cầu nhập tên xác nhận
- [ ] Danger zone actions có confirmation rõ ràng
- [ ] Chỉ Owner/Admin mới có quyền edit settings
