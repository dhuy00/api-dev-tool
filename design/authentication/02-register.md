# Màn hình Register

## 1. Tổng quan

- **Mã màn hình:** AUTH-002
- **Tên màn hình:** Sign Up / Registration
- **Loại:** Authentication Screen
- **Vị trí:** Từ màn hình Login → click "Sign up"

---

## 2. Mục đích

Cho phép người dùng tạo tài khoản mới với email/password và nhận email verification trước khi kích hoạt tài khoản.

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────┐
│                    [Logo: API Forge]                    │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │                    CREATE ACCOUNT                   │  │
│  │                                                    │  │
│  │   Full name                                        │  │
│  │   ┌─────────────────────────────────────────┐    │  │
│  │   │ John Doe                                  │    │  │
│  │   └─────────────────────────────────────────┘    │  │
│  │                                                    │  │
│  │   Email address                                    │  │
│  │   ┌─────────────────────────────────────────┐    │  │
│  │   │ example@company.com                       │    │  │
│  │   └─────────────────────────────────────────┘    │  │
│  │                                                    │  │
│  │   Password                                          │  │
│  │   ┌─────────────────────────────────────────┐    │  │
│  │   │ ••••••••••••••                    [👁]   │    │  │
│  │   └─────────────────────────────────────────┘    │  │
│  │   ┌─ Password strength indicator ──────────┐    │  │
│  │   │ ████████████░░░░░░░░ Strong              │    │  │
│  │   └─────────────────────────────────────────┘    │  │
│  │   • Minimum 8 characters                         │  │
│  │   • At least one uppercase letter               │  │
│  │   • At least one number                         │  │
│  │   • At least one special character              │  │
│  │                                                    │  │
│  │   Confirm password                                │  │
│  │   ┌─────────────────────────────────────────┐    │  │
│  │   │ ••••••••••••••                    [👁]   │    │  │
│  │   └─────────────────────────────────────────┘    │  │
│  │                                                    │  │
│  │   ☐ I agree to Terms of Service and Privacy     │  │
│  │      Policy                                         │  │
│  │                                                    │  │
│  │   ┌─────────────────────────────────────────┐    │  │
│  │   │              CREATE ACCOUNT              │    │  │
│  │   └─────────────────────────────────────────┘    │  │
│  │                                                    │  │
│  │   ─────────────────────────────────────────────   │  │
│  │   Already have an account?  Sign in               │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Form Fields

#### Full Name
- **Type:** Text input
- **Placeholder:** "John Doe"
- **Validation:** Required, min 2 characters

#### Email
- **Type:** Email input
- **Placeholder:** "example@company.com"
- **Validation:** Required, valid email format, unique in system

#### Password
- **Type:** Password input với toggle
- **Placeholder:** "Create a strong password"
- **Validation:** Required
- **Strength Indicator:** Real-time feedback
  - Weak: Red, < 8 chars
  - Fair: Orange, 8+ chars, missing complexity
  - Good: Yellow, meets most criteria
  - Strong: Green, meets all criteria

#### Password Requirements Checklist
- ✓ Minimum 8 characters
- ✓ At least one uppercase letter
- ✓ At least one number
- ✓ At least one special character (!@#$...)

#### Confirm Password
- **Type:** Password input với toggle
- **Placeholder:** "Confirm your password"
- **Validation:** Must match password field

### 4.2 Terms Checkbox
- **Type:** Checkbox
- **Text:** "I agree to Terms of Service and Privacy Policy"
- **Link:** Terms → Terms of Service page, Privacy → Privacy Policy page
- **Validation:** Required to be checked

### 4.3 Buttons
- **Primary:** "CREATE ACCOUNT"
- **OAuth:** "Sign up with Google", "Sign up with GitHub"

---

## 5. Luồng chức năng

### 5.1 Registration Flow

```
[User fills form]
        ↓
[Real-time validation]
        ↓
[User clicks "CREATE ACCOUNT"]
        ↓
    ┌───────────────────┐
    │ Validate all       │
    │ fields             │
    └───────────────────┘
        ↓ (pass)
    ┌───────────────────┐
    │ API POST          │
    │ /auth/register    │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Create pending     │
    │ account            │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Send verification  │
    │ email              │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show success:      │
    │ "Check your email  │
    │ to verify"         │
    └───────────────────┘
```

### 5.2 Email Verification Flow

```
[User clicks verification link in email]
        ↓
    ┌───────────────────┐
    │ Validate token     │
    │ (not expired,      │
    │ not used)          │
    └───────────────────┘
        ↓ (valid)
    ┌───────────────────┐
    │ Activate account   │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show success:      │
    │ "Email verified!   │
    │ Sign in now"       │
    └───────────────────┘
        ↓
[Redirect to Login]
```

### 5.3 OAuth Registration

```
[User clicks OAuth button]
        ↓
    ┌───────────────────┐
    │ Redirect to        │
    │ OAuth provider     │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ User authorizes    │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ If new user:       │
    │ Create account     │
    │ (no verification   │
    │ needed)            │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Create session     │
    │ Redirect to        │
    │ Dashboard          │
    └───────────────────┘
```

---

## 6. Password Strength Indicator

```
┌─────────────────────────────────────────────┐
│ ████░░░░░░░░░░░░░░░░░░░░░░░░░░░ Weak       │
└─────────────────────────────────────────────┘
│ ██████████████░░░░░░░░░░░░░░░░░░░ Fair      │
└─────────────────────────────────────────────┘
│ ████████████████████████░░░░░░░░░░░ Good     │
└─────────────────────────────────────────────┘
│ ████████████████████████████████████ Strong  │
└─────────────────────────────────────────────┘
```

**Rules:**
- Weak: < 8 characters
- Fair: 8+ characters, missing 1 complexity rule
- Good: 8+ characters, meets 3 complexity rules
- Strong: 8+ characters, meets all 4 complexity rules

---

## 7. Error Handling

| Error Case | Message | Behavior |
|------------|---------|----------|
| Empty name | "Full name is required" | Inline error |
| Invalid email | "Please enter a valid email" | Inline error |
| Email exists | "An account with this email already exists" | Inline error |
| Password too weak | "Password does not meet requirements" | Inline error + highlight checklist |
| Passwords don't match | "Passwords do not match" | Inline error |
| Terms not checked | "You must agree to the terms" | Inline error |
| Network error | "Unable to create account. Please try again." | Toast error |
| Token expired | "Verification link expired. Request new one." | Show resend option |

---

## 8. States

### 8.1 Field States
- **Empty:** Placeholder visible
- **Focused:** Blue border
- **Filled:** Value displayed (or masked for password)
- **Valid:** Green checkmark icon
- **Invalid:** Red border, error message below
- **Disabled:** Grayed out

### 8.2 Password Toggle
- **Default:** Eye-off icon (password hidden)
- **Active:** Eye icon (password visible)

### 8.3 Submit Button
- **Default:** "CREATE ACCOUNT"
- **Hover:** Darker background
- **Loading:** Spinner + "Creating account..."
- **Disabled:** When form invalid or loading

---

## 9. Responsive Behavior

### Desktop (> 1024px)
- Centered card, max-width 420px
- Stacked form fields

### Mobile (< 768px)
- Full-width form
- OAuth buttons stack
- Sticky submit button option

---

## 10. Validation Rules

### Client-side
1. Name: Required, min 2 chars
2. Email: Required, valid format
3. Password: Required, meets complexity
4. Confirm: Must match password
5. Terms: Must be checked

### Server-side
1. Email uniqueness check
2. Rate limiting (max 5 registrations/minute/IP)
3. Profanity filter on name (optional)

---

## 11. Security Considerations

- Passwords hashed with bcrypt/argon2 before storage
- Verification tokens are cryptographically random, time-limited
- Tokens single-use (marked after use)
- CSRF protection on form
- Rate limiting on registration endpoint
- Email enumeration prevention (same message for existing/non-existing email)

---

## 12. Email Template

**Subject:** Verify your API Forge account
**Content:**
- Greeting with user's name
- "Please verify your email address"
- Button: "Verify Email Address"
- Link (backup if button doesn't work)
- Warning about expiration (24 hours)
- "If you didn't create an account, ignore this email"

---

## 13. Related Screens

- [01-login.md](01-login.md) - Login screen
- [03-forgot-password.md](03-forgot-password.md) - Password reset
- [04-verify-email.md](04-verify-email.md) - Email verification result

---

## 14. Acceptance Criteria

- [ ] User có thể đăng ký với thông tin hợp lệ
- [ ] Password strength indicator hoạt động real-time
- [ ] Password requirements checklist update khi typing
- [ ] Validation error hiển thị khi không meet requirements
- [ ] Email verification được gửi sau registration
- [ ] Account tạo ở trạng thái "pending" cho đến khi verify
- [ ] User được redirect về login sau khi register thành công
- [ ] OAuth signup tạo account đã verified ngay lập tức
- [ ] Terms checkbox bắt buộc
- [ ] Link về login hoạt động
