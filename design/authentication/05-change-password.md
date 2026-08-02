# Màn hình Change Password

## 1. Tổng quan

- **Mã màn hình:** AUTH-005
- **Tên màn hình:** Change Password
- **Loại:** Settings/Account Screen
- **Vị trí:** Account Settings → Security tab
- **Yêu cầu:** User phải đăng nhập

---

## 2. Mục đích

Cho phép người dùng đã đăng nhập thay đổi mật khẩu hiện tại thành mật khẩu mới.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   ┌─────────────────────────────────────────────────┐   │
│   │  🔐 Change Password                             │   │
│   │                                                  │   │
│   │  Ensure your account is using a strong,         │   │
│   │  unique password.                               │   │
│   │                                                  │   │
│   │  Current password                                │   │
│   │  ┌───────────────────────────────────────────┐  │   │
│   │  │ ••••••••••••••                    [👁]    │  │   │
│   │  └───────────────────────────────────────────┘  │   │
│   │                                                  │   │
│   │  New password                                    │   │
│   │  ┌───────────────────────────────────────────┐  │   │
│   │  │ ••••••••••••••                    [👁]    │  │   │
│   │  └───────────────────────────────────────────┘  │   │
│   │  ┌─ Password strength ───────────────────────┐   │   │
│   │  │ ████████████████░░░░░░░░░░░░░░░░ Strong    │   │   │
│   │  └───────────────────────────────────────────┘  │   │
│   │  • Minimum 8 characters                         │   │
│   │  • At least one uppercase letter                │   │
│   │  • At least one number                         │   │
│   │  • At least one special character              │   │
│   │                                                  │   │
│   │  Confirm new password                            │   │
│   │  ┌───────────────────────────────────────────┐  │   │
│   │  │ ••••••••••••••                    [👁]    │  │   │
│   │  └───────────────────────────────────────────┘  │   │
│   │                                                  │   │
│   │  ┌───────────────────────────────────────────┐  │   │
│   │  │           UPDATE PASSWORD                   │  │   │
│   │  └───────────────────────────────────────────┘  │   │
│   │                                                  │   │
│   │  ⚠️ Changing your password will log you       │   │
│   │  out of all other sessions.                    │   │
│   │                                                  │   │
│   └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Form Fields

#### Current Password
- **Type:** Password input với toggle visibility
- **Placeholder:** "Enter current password"
- **Validation:** Required, must match stored password

#### New Password
- **Type:** Password input với toggle visibility
- **Placeholder:** "Enter new password"
- **Validation:** Required, meets complexity requirements
- **Strength Indicator:** Real-time feedback

#### Confirm New Password
- **Type:** Password input với toggle visibility
- **Placeholder:** "Confirm new password"
- **Validation:** Must match new password

### 4.2 Warning Banner
- Yellow/amber background
- Warning icon
- Message about logging out other sessions

### 4.3 Buttons
- **Primary:** "UPDATE PASSWORD"
- **Cancel:** "Cancel" (optional, if modal)

---

## 5. Luồng chức năng

### 5.1 Change Password Flow

```
[User enters current password]
        ↓
[User enters new password]
        ↓
[User confirms new password]
        ↓
[Real-time validation & strength check]
        ↓
[User clicks "UPDATE PASSWORD"]
        ↓
    ┌───────────────────┐
    │ Validate:          │
    │ - Current pass     │
    │   correct?         │
    │ - New pass valid?  │
    │ - Pass match?      │
    │ - Not same as      │
    │   current?         │
    └───────────────────┘
        ↓ (pass)
    ┌───────────────────┐
    │ API POST          │
    │ /auth/change-pass │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Update password   │
    │ in database       │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Invalidate all    │
    │ other sessions    │
    │ (except current)  │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show success      │
    │ toast              │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Update session    │
    │ if needed         │
    └───────────────────┘
```

---

## 6. Validation Rules

### Client-side
1. Current password: Required
2. New password: Required, meets complexity
3. Confirm password: Must match new password
4. New password ≠ Current password

### Server-side
1. Current password verification (re-hash and compare)
2. Password complexity enforcement
3. Password history check (optional: last 5 passwords)
4. Rate limiting (max 5 changes per hour)

---

## 7. Password Requirements

- Minimum 8 characters
- At least one uppercase letter
- At least one number
- At least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
- Not in password history (if implemented)

---

## 8. Error Handling

| Error Case | Message |
|------------|---------|
| Current password wrong | "Current password is incorrect" |
| New password too weak | "Password does not meet requirements" |
| Passwords don't match | "Passwords do not match" |
| Same as current | "New password must be different from current" |
| Rate limited | "Too many attempts. Try again in X minutes." |

---

## 9. Session Management

After password change:
- Current session: Refresh token or continue
- All other sessions: Invalidate
- Display warning before proceeding

---

## 10. Security Considerations

1. **Current password verification:** Prevents session hijacking
2. **Password complexity:** Enforce strong passwords
3. **Session invalidation:** Limit exposure if password compromised
4. **Rate limiting:** Prevent brute force
5. **Audit logging:** Log all password changes
6. **Email notification:** Alert user of change (optional)

---

## 11. Related Screens

- Account Settings main page
- [03-forgot-password.md](03-forgot-password.md) - Reset without login

---

## 12. Acceptance Criteria

- [ ] User phải nhập đúng current password
- [ ] Password strength indicator hoạt động real-time
- [ ] Validation hiển thị khi password không meet requirements
- [ ] Error hiển thị khi passwords không match
- [ ] Success toast hiển thị sau khi đổi thành công
- [ ] Warning về logout sessions hiển thị
- [ ] Tất cả sessions khác bị invalidate
- [ ] Rate limiting hoạt động
- [ ] Audit log ghi nhận password change
