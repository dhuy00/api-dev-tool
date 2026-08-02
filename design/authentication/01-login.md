# Màn hình Login

## 1. Tổng quan

- **Mã màn hình:** AUTH-001
- **Tên màn hình:** Login / Sign In
- **Loại:** Authentication Screen
- **Vị trí:** Entry point của ứng dụng (khi chưa đăng nhập)

---

## 2. Mục đích

Cho phép người dùng đăng nhập vào hệ thống API Forge bằng email/password hoặc OAuth providers (Google, GitHub).

---

## 3. Layout

```
┌─────────────────────────────────────────────────────────┐
│                    [Logo: API Forge]                    │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │                    SIGN IN                          │  │
│  │                                                    │  │
│  │   Email address                                   │  │
│  │   ┌─────────────────────────────────────────┐    │  │
│  │   │ example@company.com                        │    │  │
│  │   └─────────────────────────────────────────┘    │  │
│  │                                                    │  │
│  │   Password                                         │  │
│  │   ┌─────────────────────────────────────────┐    │  │
│  │   │ ••••••••••••••                    [👁]   │    │  │
│  │   └─────────────────────────────────────────┘    │  │
│  │                                                    │  │
│  │   ☐ Remember me          Forgot password?        │  │
│  │                                                    │  │
│  │   ┌─────────────────────────────────────────┐    │  │
│  │   │              SIGN IN                       │    │  │
│  │   └─────────────────────────────────────────┘    │  │
│  │                                                    │  │
│  │   ─────────────────────────────────────────────   │  │
│  │   Don't have an account?  Sign up                 │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Header
- Logo API Forge (centered hoặc top-left)
- Tagline: "Intelligent API Development Platform" (optional)

### 4.2 Form Fields

#### Email Field
- **Type:** Email input
- **Placeholder:** "example@company.com"
- **Validation:** Format validation, required field
- **Error states:** Invalid email format, empty field

#### Password Field
- **Type:** Password input với toggle visibility
- **Placeholder:** "Enter your password"
- **Toggle button:** Eye icon để show/hide password
- **Validation:** Required field, min 8 characters

### 4.3 Checkbox & Links
- **Remember me:** Checkbox để giữ đăng nhập
- **Forgot password?:** Link đến màn hình password reset

### 4.4 Buttons
- **Primary button:** "SIGN IN" - Full width, filled
- **OAuth buttons:**
  - "Continue with Google" - Outline style với Google icon
  - "Continue with GitHub" - Outline style với GitHub icon

### 4.5 Footer Link
- "Don't have an account? Sign up" → Link đến registration

---

## 5. Luồng chức năng

### 5.1 Đăng nhập Email/Password

```
[User enters email]
        ↓
[User enters password]
        ↓
[User clicks "SIGN IN"]
        ↓
    ┌───────────────────┐
    │ Validate fields   │
    └───────────────────┘
        ↓ (pass)
    ┌───────────────────┐
    │ Show loading      │
    │ on button          │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Call API auth     │
    │ /login            │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Success?           │
    └───────────────────┘
        ↓ (yes)
    ┌───────────────────┐
    │ Store session      │
    │ Redirect to        │
    │ Dashboard/Workspace│
    └───────────────────┘
        ↓ (no)
    ┌───────────────────┐
    │ Show error toast  │
    │ (invalid creds)    │
    └───────────────────┘
```

### 5.2 Đăng nhập OAuth (Google/GitHub)

```
[User clicks OAuth button]
        ↓
    ┌───────────────────┐
    │ Open OAuth popup   │
    │ or redirect to     │
    │ provider           │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ User authorizes    │
    │ at provider        │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Provider returns   │
    │ auth code/token    │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Backend verifies   │
    │ & creates session  │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Redirect to        │
    │ Dashboard           │
    └───────────────────┘
```

### 5.3 Quên Password

```
[User clicks "Forgot password?"]
        ↓
    ┌───────────────────┐
    │ Open modal/page    │
    │ "Reset Password"   │
    └───────────────────┘
        ↓
[User enters email]
        ↓
[User clicks "Send Reset Link"]
        ↓
    ┌───────────────────┐
    │ Show success:      │
    │ "Check your email" │
    └───────────────────┘
```

---

## 6. Error Handling

| Error Case | Message | Behavior |
|------------|---------|----------|
| Empty email | "Email is required" | Show inline error |
| Invalid email format | "Please enter a valid email" | Show inline error |
| Empty password | "Password is required" | Show inline error |
| Invalid credentials | "Invalid email or password" | Show error toast |
| Account locked | "Account temporarily locked" | Show message + lock duration |
| Network error | "Unable to connect. Please try again." | Show retry option |
| OAuth failed | "Sign-in failed. Please try again." | Show retry option |

---

## 7. States

### 7.1 Form States
- **Default:** Empty form, buttons enabled
- **Filled:** Fields have values, buttons enabled
- **Loading:** Buttons show spinner, fields disabled
- **Error:** Inline errors displayed below fields
- **Success:** Redirect to next screen

### 7.2 Button States
- **Default:** Solid fill
- **Hover:** Slightly darker background
- **Active/Pressed:** Darker background
- **Disabled:** 50% opacity, cursor not-allowed
- **Loading:** Spinner icon, text "Signing in..."

### 7.3 OAuth Button States
- **Default:** Outline with icon
- **Hover:** Light fill background
- **Loading:** Spinner, disabled
- **Disabled:** Muted colors

---

## 8. Responsive Behavior

### Desktop (> 1024px)
- Centered card layout, max-width 400px
- Logo above form
- Generous padding

### Tablet (768px - 1024px)
- Same as desktop
- Slightly smaller padding

### Mobile (< 768px)
- Full-width form
- OAuth buttons stack vertically
- Bottom-aligned link to signup

---

## 9. Validation Rules

### Client-side Validation
1. Email format: Standard email regex
2. Password: Min 8 characters
3. Required fields: Email, Password

### Server-side Validation
1. Email exists in system
2. Password matches stored hash
3. Account is active (not deactivated)
4. Account is verified (email confirmed)
5. Rate limiting: Max 5 attempts per minute

---

## 10. Accessibility

- All inputs have associated labels
- Error messages linked to inputs via aria-describedby
- Focus management: Focus on first error field on submit
- Keyboard navigation: Tab through all interactive elements
- OAuth buttons have descriptive aria-labels
- Loading states announced via aria-live
- Color contrast meets WCAG AA

---

## 11. Security Considerations

- Passwords never logged or displayed
- Session tokens stored securely (HttpOnly cookies)
- CSRF protection on form submission
- Rate limiting to prevent brute force
- OAuth state parameter to prevent CSRF
- Secure redirect after login

---

## 12. Related Screens

- [02-register.md](02-register.md) - Registration screen
- [03-forgot-password.md](03-forgot-password.md) - Password reset
- [04-verify-email.md](04-verify-email.md) - Email verification

---

## 13. Acceptance Criteria

- [ ] User có thể đăng nhập với email/password hợp lệ
- [ ] User có thể đăng nhập với Google OAuth
- [ ] User có thể đăng nhập với GitHub OAuth
- [ ] Validation hiển thị đúng khi nhập sai format
- [ ] Error message hiển thị khi credentials sai
- [ ] Loading state hiển thị trong quá trình đăng nhập
- [ ] Redirect về dashboard sau khi đăng nhập thành công
- [ ] "Remember me" lưu session lâu hơn
- [ ] "Forgot password" link hoạt động
- [ ] Link đến registration hoạt động
- [ ] Responsive trên mobile/tablet/desktop
