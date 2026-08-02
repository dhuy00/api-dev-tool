# Figma Make Prompt: Forgot Password Screen (AUTH-003)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Form inputs: {rounded.md} (8px), padding 12px 14px
- No shadows on default surfaces
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary button |
| {colors.canvas} | #FFFFFF | Page background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Input borders |
| {colors.surface-soft} | #F5F5F5 | Hover states |
| {colors.semantic-success} | #34A853 | Success states |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Helper text
{typography.button} - 20px, 480 weight - Button text
```

### Components
```
button-primary: bg=primary, text=white, rounded.pill, padding 10px 20px
button-secondary: bg=canvas, text=ink, rounded.pill
text-input: bg=canvas, border=hairline, rounded.md, padding 12px 14px
```

---

## Screen Requirements

### Purpose
Allow users to request a password reset via email.

### Layout (Request Reset State)
```
┌─────────────────────────────────────────┐
│                                         │
│         [X] Close                       │
│                                         │
│         🔑 Reset Password               │
│                                         │
│   Enter your email address and we'll     │
│   send you a link to reset your         │
│   password.                             │
│                                         │
│   Email address                          │
│   ┌─────────────────────────────────┐  │
│   │ example@company.com               │  │
│   └─────────────────────────────────┘  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │      SEND RESET LINK              │  │
│   └─────────────────────────────────┘  │
│                                         │
│   Back to Sign in                        │
│                                         │
└─────────────────────────────────────────┘
```

### Layout (Success State)
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│         ✉️ Email Sent!                  │
│                                         │
│   We've sent password reset instructions │
│   to example@company.com                 │
│                                         │
│   Check your email and click the link   │
│   to create a new password.             │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │      RESEND EMAIL                  │  │
│   └─────────────────────────────────┘  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │      BACK TO SIGN IN              │  │
│   └─────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### Layout (Reset Password Form - from email link)
```
┌─────────────────────────────────────────┐
│                                         │
│         🔑 Create New Password          │
│                                         │
│   Your new password must be different   │
│   from your previous password.          │
│                                         │
│   New password                           │
│   ┌─────────────────────────────────┐  │
│   │ ••••••••••••••            [👁]   │  │
│   └─────────────────────────────────┘  │
│   ┌─ Password strength ─────────────┐  │
│   │ ████████████████░░░░░░░░░ Strong │  │
│   └─────────────────────────────────┘  │
│                                         │
│   Confirm new password                   │
│   ┌─────────────────────────────────┐  │
│   │ ••••••••••••••            [👁]   │  │
│   └─────────────────────────────────┘  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │      RESET PASSWORD               │  │
│   └─────────────────────────────────┘  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │      BACK TO SIGN IN              │  │
│   └─────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### Layout (Link Expired/Invalid)
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│         ⚠️ Link Expired                 │
│                                         │
│   This password reset link has expired   │
│   or has already been used.             │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │      REQUEST NEW LINK             │  │
│   └─────────────────────────────────┘  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │      BACK TO SIGN IN              │  │
│   └─────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### Components to Implement

#### 1. Modal/Card Container
- Background: canvas (white)
- Border-radius: rounded.lg (24px)
- Padding: spacing.xl (32px)
- Max-width: 400px
- Can have close button (X) in top right for modal variant
- Centered on screen with overlay background (overlay-scrim)

#### 2. Icon
- Request state: lock/key icon (🔑)
- Success state: envelope icon (✉️) or checkmark
- Expired state: warning icon (⚠️)
- Size: 48px
- Color: ink (black)
- Margin-bottom: spacing.md (16px)

#### 3. Title
- Request state: "Reset Password"
- Success state: "Email Sent!"
- Expired state: "Link Expired"
- Typography: headline (26px, 540 weight)
- Margin-bottom: spacing.sm (12px)

#### 4. Description Text
- Body typography (18px, 320 weight)
- Color: ink
- Margin-bottom: spacing.lg (24px)
- Line-height: 1.45

#### 5. Email Input (Request state only)
- Label: "Email address" (body-sm)
- Placeholder: "example@company.com"
- text-input component
- Margin-bottom: spacing.lg (24px)

#### 6. Email Display (Success state)
- Shows the email address being used
- body typography
- Styled distinctly (maybe monospace or highlighted background)
- Margin-bottom: spacing.lg (24px)

#### 7. Primary Button
- Request state: "SEND RESET LINK"
- Success state: "RESEND EMAIL"
- Expired state: "REQUEST NEW LINK"
- Reset form state: "RESET PASSWORD"
- button-primary component
- Full width
- Margin-bottom: spacing.md (16px)

#### 8. Secondary Button / Link
- "Back to Sign in" - text link or button-secondary
- Margin-top: spacing.sm (12px)

### Password Reset Form (from email link)

#### 1. New Password Input
- Label: "New password" (body-sm)
- text-input with eye toggle
- Password strength indicator below

#### 2. Confirm Password Input
- Label: "Confirm new password" (body-sm)
- text-input with eye toggle

### Responsive Behavior
```
Mobile: Full-width form within card, reduced padding
```

---

## Output Instructions

Create Figma frames for:
1. **Request Reset** state - with modal/container
2. **Success** state
3. **Expired** state
4. **Reset Form** state (when clicking email link)

Proper naming: "AUTH-003_ForgotPassword_Request", "AUTH-003_ForgotPassword_Success", etc.
