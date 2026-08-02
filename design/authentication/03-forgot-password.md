# Màn hình Forgot Password

## 1. Tổng quan

- **Mã màn hình:** AUTH-003
- **Tên màn hình:** Forgot Password / Reset Password
- **Loại:** Authentication Screen (Modal hoặc standalone page)
- **Vị trí:** Từ Login → click "Forgot password?" hoặc từ email verification

---

## 2. Mục đích

Cho phép người dùng yêu cầu đặt lại mật khẩu khi quên. Hệ thống gửi email với link để tạo mật khẩu mới.

---

## 3. Layout

### 3.1 Request Reset (Modal/Page)

```
┌─────────────────────────────────────────┐
│                                          │
│         [X] Close                        │
│                                          │
│         🔑 Reset Password                │
│                                          │
│   Enter your email address and we'll     │
│   send you a link to reset your         │
│   password.                             │
│                                          │
│   Email address                          │
│   ┌─────────────────────────────────┐   │
│   │ example@company.com               │   │
│   └─────────────────────────────────┘   │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │      SEND RESET LINK              │   │
│   └─────────────────────────────────┘   │
│                                          │
│   Back to Sign in                        │
│                                          │
└─────────────────────────────────────────┘
```

### 3.2 Success State (After Submit)

```
┌─────────────────────────────────────────┐
│                                          │
│                                          │
│         ✉️ Email Sent!                   │
│                                          │
│   We've sent password reset instructions │
│   to example@company.com                 │
│                                          │
│   Check your email and click the link   │
│   to create a new password.             │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │      RESEND EMAIL                │   │
│   └─────────────────────────────────┘   │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │      BACK TO SIGN IN             │   │
│   └─────────────────────────────────┘   │
│                                          │
└─────────────────────────────────────────┘
```

### 3.3 Reset Password Form (From Email Link)

```
┌─────────────────────────────────────────┐
│                                          │
│         🔑 Create New Password          │
│                                          │
│   Your new password must be different   │
│   from your previous password.          │
│                                          │
│   New password                           │
│   ┌─────────────────────────────────┐   │
│   │ ••••••••••••••            [👁]   │   │
│   └─────────────────────────────────┘   │
│   ┌─ Password strength ─────────────┐   │
│   │ ████████████████░░░░░░░░░ Strong │   │
│   └─────────────────────────────────┘   │
│                                          │
│   Confirm new password                   │
│   ┌─────────────────────────────────┐   │
│   │ ••••••••••••••            [👁]   │   │
│   └─────────────────────────────────┘   │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │      RESET PASSWORD               │   │
│   └─────────────────────────────────┘   │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │      BACK TO SIGN IN              │   │
│   └─────────────────────────────────┘   │
│                                          │
└─────────────────────────────────────────┘
```

### 3.4 Token Expired/Invalid

```
┌─────────────────────────────────────────┐
│                                          │
│                                          │
│         ⚠️ Link Expired                 │
│                                          │
│   This password reset link has expired   │
│   or has already been used.             │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │      REQUEST NEW LINK            │   │
│   └─────────────────────────────────┘   │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │      BACK TO SIGN IN              │   │
│   └─────────────────────────────────┘   │
│                                          │
└─────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Request Form
- **Email input:** Required, with validation
- **Submit button:** "SEND RESET LINK"
- **Back link:** Return to login

### 4.2 Success State
- **Icon:** Checkmark or email sent icon
- **Message:** Confirmation with email address
- **Resend button:** "RESEND EMAIL"
- **Back button:** "BACK TO SIGN IN"

### 4.3 Reset Form
- **Password input:** With strength indicator
- **Confirm password:** Must match
- **Submit button:** "RESET PASSWORD"

### 4.4 Error/Expired State
- **Icon:** Warning icon
- **Message:** Explain the issue
- **Action buttons:** Request new link or back to sign in

---

## 5. Luồng chức năng

### 5.1 Request Reset Flow

```
[User enters email]
        ↓
[User clicks "SEND RESET LINK"]
        ↓
    ┌───────────────────┐
    │ Validate email     │
    │ format             │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ API POST          │
    │ /auth/forgot      │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Check: email       │
    │ exists?            │
    └───────────────────┘
        ↓ (exists)
    ┌───────────────────┐
    │ Generate reset     │
    │ token (30 min)     │
    │ Send email         │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show success      │
    │ "Email sent"       │
    └───────────────────┘
        ↓ (not exists)
    ┌───────────────────┐
    │ Show same success │  ← Security: don't reveal
    │ (prevent enum)    │    if email exists
    └───────────────────┘
```

### 5.2 Reset Password Flow

```
[User clicks reset link from email]
        ↓
    ┌───────────────────┐
    │ Extract token      │
    │ from URL           │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Validate token:   │
    │ - Not expired     │
    │ - Not used        │
    │ - Valid format    │
    └───────────────────┘
        ↓ (valid)
    ┌───────────────────┐
    │ Show reset form   │
    │ with token        │
    └───────────────────┘
        ↓
[User enters new password]
        ↓
[User confirms password]
        ↓
[User clicks "RESET PASSWORD"]
        ↓
    ┌───────────────────┐
    │ API POST          │
    │ /auth/reset       │
    │ with token +      │
    │ new password       │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Update password   │
    │ Mark token used   │
    │ Invalidate all    │
    │ sessions          │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show success:      │
    │ Redirect to        │
    │ login             │
    └───────────────────┘
```

---

## 6. Token Management

| Property | Value |
|----------|-------|
| Token length | 32+ characters |
| Token type | Cryptographically random |
| Expiration | 30 minutes |
| Single use | Yes |
| Format | URL parameter |
| Example | `/reset-password?token=abc123...xyz` |

---

## 7. Error Handling

| Error Case | Message | Behavior |
|------------|---------|----------|
| Invalid email format | "Please enter a valid email" | Inline error |
| Token expired | "This link has expired. Request a new one." | Show request new link |
| Token invalid | "This link is invalid. Request a new one." | Show request new link |
| Token already used | "This link has already been used." | Show request new link |
| Password too weak | "Password does not meet requirements" | Inline error |
| Passwords don't match | "Passwords do not match" | Inline error |
| Network error | "Unable to process. Please try again." | Show retry |

---

## 8. Security Considerations

1. **Email enumeration prevention:** Same success message regardless of email existence
2. **Rate limiting:** Max 3 reset requests per email per hour
3. **Token security:** Cryptographically random, time-limited, single-use
4. **Session invalidation:** All existing sessions logged out after password change
5. **Password history:** Optional: prevent reuse of last N passwords
6. **CSRF protection:** Token tied to session during reset flow

---

## 9. Email Template

**Subject:** Reset your API Forge password

**Content:**
```
Hi [Name],

We received a request to reset your password.

Click the button below to create a new password:
[Reset Password Button]

This link will expire in 30 minutes.

If you didn't request a password reset, you can ignore this email. Your password won't be changed.

The API Forge Team
```

---

## 10. Responsive Behavior

- Modal on desktop (centered)
- Full-page on mobile
- Buttons full-width on mobile

---

## 11. Accessibility

- Focus on email input when modal/page opens
- Error messages linked to inputs
- Success state announced via aria-live
- Keyboard navigation for all elements

---

## 12. Related Screens

- [01-login.md](01-login.md) - Login screen
- [02-register.md](02-register.md) - Registration screen

---

## 13. Acceptance Criteria

- [ ] User có thể request password reset bằng email
- [ ] Email reset được gửi sau request
- [ ] Success message hiển thị (không tiết lộ email tồn tại)
- [ ] Link trong email mở form reset password
- [ ] Token expired/invalid hiển thị thông báo phù hợp
- [ ] Password strength indicator hoạt động
- [ ] Password reset thành công và redirect về login
- [ ] Tất cả sessions bị invalid sau password change
- [ ] User không thể reuse token
- [ ] Rate limiting prevents abuse
