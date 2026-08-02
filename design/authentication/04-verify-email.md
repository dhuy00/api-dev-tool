# Màn hình Email Verification

## 1. Tổng quan

- **Mã màn hình:** AUTH-004
- **Tên màn hình:** Verify Email
- **Loại:** Authentication Screen (standalone page hoặc embedded)
- **Vị trí:** Sau khi click link trong verification email

---

## 2. Mục đích

Xác nhận email của người dùng đã được verify thành công và cho phép họ đăng nhập.

---

## 3. Layout

### 3.1 Verification Success

```
┌─────────────────────────────────────────┐
│                                          │
│                                          │
│                                          │
│         ✓ Email Verified!               │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │                                    │   │
│   │            🎉                    │   │
│   │                                    │   │
│   └─────────────────────────────────┘   │
│                                          │
│   Your email has been successfully      │
│   verified.                              │
│                                          │
│   Welcome to API Forge! You can now     │
│   sign in to your account.              │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │         SIGN IN NOW              │   │
│   └─────────────────────────────────┘   │
│                                          │
│                                          │
└─────────────────────────────────────────┘
```

### 3.2 Verification Failed

```
┌─────────────────────────────────────────┐
│                                          │
│                                          │
│                                          │
│         ⚠️ Verification Failed          │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │                                    │   │
│   │            ❌                    │   │
│   │                                    │   │
│   └─────────────────────────────────┘   │
│                                          │
│   This verification link is invalid     │
│   or has expired.                        │
│                                          │
│   Possible reasons:                     │
│   • Link has already been used          │
│   • Link has expired (24 hours)         │
│   • Email address was already verified  │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │      RESEND VERIFICATION         │   │
│   └─────────────────────────────────┘   │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │         BACK TO SIGN IN          │   │
│   └─────────────────────────────────┘   │
│                                          │
└─────────────────────────────────────────┘
```

### 3.3 Already Verified (when clicking old link)

```
┌─────────────────────────────────────────┐
│                                          │
│                                          │
│                                          │
│         ℹ️ Email Already Verified       │
│                                          │
│   This email has already been verified.  │
│   You can sign in to your account.      │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │         SIGN IN NOW              │   │
│   └─────────────────────────────────┘   │
│                                          │
│                                          │
└─────────────────────────────────────────┘
```

### 3.4 Loading State

```
┌─────────────────────────────────────────┐
│                                          │
│                                          │
│                                          │
│         ⏳ Verifying...                  │
│                                          │
│   ┌─────────────────────────────────┐   │
│   │      ◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌        │   │
│   └─────────────────────────────────┘   │
│                                          │
│   Please wait while we verify your      │
│   email address...                       │
│                                          │
│                                          │
└─────────────────────────────────────────┘
```

---

## 4. Luồng chức năng

### 4.1 Verification Flow

```
[User clicks verification link]
        ↓
    ┌───────────────────┐
    │ Extract token      │
    │ from URL           │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show loading       │
    │ state              │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ API POST           │
    │ /auth/verify       │
    │ with token         │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Validate token:   │
    │ - Not expired     │
    │ - Not used        │
    │ - Valid            │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Token valid?       │
    └───────────────────┘
        ↓ (yes)
    ┌───────────────────┐
    │ Activate account   │
    │ Mark token used    │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show success      │
    │ "Email Verified!"  │
    └───────────────────┘
        ↓ (no)
    ┌───────────────────┐
    │ Identify reason:   │
    │ - Expired         │
    │ - Already used    │
    │ - Invalid         │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show appropriate   │
    │ error state       │
    └───────────────────┘
```

### 4.2 Resend Verification Flow

```
[User clicks "Resend Verification"]
        ↓
    ┌───────────────────┐
    │ API POST          │
    │ /auth/resend-     │
    │ verification      │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Generate new       │
    │ token             │
    │ Send email        │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show success:     │
    │ "Email sent"      │
    └───────────────────┘
```

---

## 5. Token Properties

| Property | Value |
|----------|-------|
| Token length | 48 characters |
| Token type | Cryptographically random |
| Expiration | 24 hours |
| Single use | Yes |
| Format | URL parameter |
| Example | `/verify?token=abc123...xyz` |

---

## 6. Error Handling

| Scenario | Display | Action |
|----------|---------|--------|
| Token expired | "Link has expired" | Show resend option |
| Token already used | "Already verified" | Direct to sign in |
| Token invalid | "Invalid link" | Show resend option |
| Account not found | "Account not found" | Direct to sign up |
| Account already active | "Already verified" | Direct to sign in |

---

## 7. Security Considerations

1. **Token single-use:** Marked as used immediately
2. **Time-limited:** 24-hour expiration
3. **CSRF protection:** Token validated server-side
4. **No enumeration:** Generic messages for different failures
5. **Rate limiting:** Max 5 resend requests per hour
6. **Email change:** New verification required if email changed

---

## 8. Auto-redirect Logic

```
After successful verification:
        ↓
    ┌───────────────────┐
    │ "Sign in now"?     │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ User clicks       │
    │ "Sign in now"     │
    └───────────────────┘
        ↓
[Redirect to Login with
 success message]
```

---

## 9. Related Screens

- [01-login.md](01-login.md) - Login screen
- [02-register.md](02-register.md) - Registration screen
- [03-forgot-password.md](03-forgot-password.md) - Password reset

---

## 10. Acceptance Criteria

- [ ] Loading state hiển thị khi đang verify
- [ ] Success state hiển thị khi verify thành công
- [ ] Error state hiển thị cho từng loại lỗi
- [ ] "Resend Verification" gửi email mới
- [ ] "Sign in now" redirect đến login
- [ ] Token không thể reuse sau khi verify
- [ ] Token expired hiển thị thông báo phù hợp
- [ ] Rate limiting hoạt động cho resend
