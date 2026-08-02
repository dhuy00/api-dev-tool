# Màn hình Invite Member

## 1. Tổng quan

- **Mã màn hình:** WS-004
- **Tên màn hình:** Invite Member
- **Loại:** Modal Dialog
- **Vị trí:** Workspace Members → "Invite Member" button
- **Yêu cầu:** Owner/Admin role

---

## 2. Mục đích

Mời người dùng mới hoặc user đã có vào workspace với vai trò cụ thể.

---

## 3. Layout

### 3.1 Invite Modal

```
┌─────────────────────────────────────────┐
│                                          │
│  Invite Member                      [X] │
│  ────────────────────────────────────── │
│                                          │
│  Email addresses                         │
│  ┌─────────────────────────────────────┐│
│  │ alice@company.com,                   ││
│  │ bob@company.com,                     ││
│  │                                      ││
│  │                                      ││
│  └─────────────────────────────────────┘│
│  💡 Separate multiple emails with commas │
│                                          │
│  Role                                     │
│  ┌─────────────────────────────────────┐│
│  │ ⚙️ Admin                        [▼] ││
│  └─────────────────────────────────────┘│
│                                          │
│  ┌─────────────────────────────────────┐│
│  │ 👑 Owner    - Full control         ││
│  ├─────────────────────────────────────┤│
│  │ ⚙️ Admin    - Manage members       ││
│  ├─────────────────────────────────────┤│
│  │ ✏️ Editor   - Create & edit        ││
│  ├─────────────────────────────────────┤│
│  │ 👁️ Viewer   - View only           ││
│  └─────────────────────────────────────┘│
│                                          │
│  ┌─────────────────────────────────────┐│
│  │         SEND INVITATIONS            ││
│  └─────────────────────────────────────┘│
│                                          │
│        [Cancel]                          │
│                                          │
└─────────────────────────────────────────┘
```

### 3.2 Success State

```
┌─────────────────────────────────────────┐
│                                          │
│  ✓ Invitations Sent                      │
│  ────────────────────────────────────── │
│                                          │
│  Invitations sent to:                    │
│  • alice@company.com (⚙️ Admin)         │
│  • bob@company.com (⚙️ Admin)           │
│                                          │
│  They will receive an email with a link  │
│  to join this workspace.                │
│                                          │
│  ┌─────────────────────────────────────┐│
│  │         INVITE MORE                  ││
│  └─────────────────────────────────────┘│
│                                          │
│        [Done]                            │
│                                          │
└─────────────────────────────────────────┘
```

### 3.3 Partial Success (Some failed)

```
┌─────────────────────────────────────────┐
│                                          │
│  ⚠️ Some Invitations Failed               │
│  ────────────────────────────────────── │
│                                          │
│  Sent:                                   │
│  • alice@company.com ✓                   │
│                                          │
│  Failed:                                 │
│  • bob@company.com - Already a member    │
│  • invalid-email - Invalid email format  │
│                                          │
│        [Invite More]  [Done]             │
│                                          │
└─────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Email Input
- **Type:** Textarea (for multiple emails)
- **Placeholder:** "alice@company.com, bob@company.com"
- **Hint:** "Separate multiple emails with commas"
- **Validation:** Format check per email

### 4.2 Role Selector
- **Type:** Dropdown button
- **Options:** Owner, Admin, Editor, Viewer
- **Default:** Editor
- **Description:** Each role has brief description

### 4.3 Buttons
- **Primary:** "SEND INVITATIONS"
- **Secondary:** "Cancel" / "Done"

---

## 5. Luồng chức năng

### 5.1 Invite Flow

```
[User enters emails]
        ↓
[User selects role]
        ↓
[User clicks "SEND INVITATIONS"]
        ↓
    ┌───────────────────┐
    │ Parse emails       │
    │ Validate format    │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ API POST          │
    │ /workspaces/:id/  │
    │ invitations       │
    │ { emails, role }  │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Check each email:  │
    │ - New user?        │
    │   → Create pending │
    │   → Send invite    │
    │ - Existing user?   │
    │   → Add directly   │
    │   → Send notif    │
    │ - Already member?  │
    │   → Mark as failed │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show result:       │
    │ - All success     │
    │ - Partial success │
    │ - All failed      │
    └───────────────────┘
```

### 5.2 Email Validation

```
[Input: "alice@co.com, bob@, charlie@valid.com"]
        ↓
    ┌───────────────────┐
    │ Parse by comma     │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Validate each:    │
    │ ✓ alice@co.com   │ → Valid format
    │ ✗ bob@           │ → Invalid
    │ ✓ charlie@...    │ → Valid format
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Highlight invalid │
    │ Show inline error │
    └───────────────────┘
```

---

## 6. Role Options

| Role | Description | Icon |
|------|-------------|------|
| Admin | Can manage members and settings | ⚙️ |
| Editor | Can create, edit, and execute requests | ✏️ |
| Viewer | Can view but not modify | 👁️ |

**Note:** Owner role không có trong dropdown - phải transfer ownership riêng.

---

## 7. Invitation States

| Scenario | Action |
|----------|--------|
| New user email | Create pending user, send invite email |
| Existing user | Add directly to workspace, send notification |
| Already member | Mark as failed, show error |
| Invalid email | Mark as failed, show error |
| Rate limited | Show warning, suggest retry later |

---

## 8. Email Notification (to invitee)

**Subject:** You've been invited to [Workspace Name]

```
Hi,

You've been invited to join [Workspace Name] as [Role].

Click the button below to accept the invitation:
[Join Workspace]

If you don't have an account, you'll need to sign up first.

The [Workspace Name] Team
```

---

## 9. Error Handling

| Error | Message | Behavior |
|-------|---------|----------|
| No email | "Please enter at least one email" | Disable submit |
| All invalid | "Please enter valid email addresses" | Show inline errors |
| Rate limited | "Too many invitations. Please wait." | Show warning |
| Workspace full | "Workspace has reached member limit" | Show error |

---

## 10. Security Considerations

- Rate limiting: Max 50 invites per workspace per hour
- Prevent inviting yourself
- Invitation links expire after 7 days
- Only Owner can send Owner invitations (triggers transfer flow)

---

## 11. Related Screens

- [03-workspace-members.md](03-workspace-members.md) - Member list

---

## 12. Acceptance Criteria

- [ ] Có thể nhập một hoặc nhiều email
- [ ] Validate email format trước khi gửi
- [ ] Highlight emails không hợp lệ
- [ ] Có thể chọn role từ dropdown
- [ ] Mô tả role hiển thị khi hover/select
- [ ] Success state hiển thị sau khi gửi thành công
- [ ] Partial success xử lý đúng (gửi được + thất bại)
- [ ] Email invitation được gửi đến new users
- [ ] Notification được gửi đến existing users
- [ ] Already member emails được mark là failed
- [ ] Modal có thể đóng bằng X, Cancel, hoặc Done
