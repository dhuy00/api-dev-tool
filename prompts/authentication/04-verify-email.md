# Figma Make Prompt: Verify Email Screen (AUTH-004)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- No shadows on default surfaces
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary button |
| {colors.canvas} | #FFFFFF | Page background |
| {colors.ink} | #000000 | Text |
| {colors.surface-soft} | #F5F5F5 | Background accents |
| {colors.semantic-success} | #34A853 | Success states, checkmark |

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
```

---

## Screen Requirements

### Purpose
Confirmation page shown after user clicks verification link in email.

### Layout (Verification Success)
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│                                         │
│         ✓ Email Verified!               │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │                                 │  │
│   │            🎉                   │  │
│   │            ✓                    │  │
│   │                                 │  │
│   └─────────────────────────────────┘  │
│                                         │
│   Your email has been successfully      │
│   verified.                            │
│                                         │
│   Welcome to API Forge! You can now     │
│   sign in to your account.              │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │         SIGN IN NOW              │  │
│   └─────────────────────────────────┘  │
│                                         │
│                                         │
└─────────────────────────────────────────┘
```

### Layout (Verification Failed)
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│                                         │
│         ⚠️ Verification Failed          │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │            ❌                   │  │
│   └─────────────────────────────────┘  │
│                                         │
│   This verification link is invalid     │
│   or has expired.                       │
│                                         │
│   Possible reasons:                     │
│   • Link has already been used          │
│   • Link has expired (24 hours)        │
│   • Email address was already verified  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │      RESEND VERIFICATION         │  │
│   └─────────────────────────────────┘  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │         BACK TO SIGN IN          │  │
│   └─────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### Layout (Already Verified)
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│                                         │
│         ℹ️ Email Already Verified       │
│                                         │
│   This email has already been verified. │
│   You can sign in to your account.     │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │         SIGN IN NOW              │  │
│   └─────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

### Layout (Loading State)
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│                                         │
│         ⏳ Verifying...                  │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │      ◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌◌        │  │
│   └─────────────────────────────────┘  │
│                                         │
│   Please wait while we verify your      │
│   email address...                      │
│                                         │
└─────────────────────────────────────────┘
```

### Components to Implement

#### 1. Icon (Large, centered)
- Success: checkmark (✓) or celebration icon
- Failed: X mark (❌) or warning triangle (⚠️)
- Already verified: info icon (ℹ️)
- Loading: spinner or hourglass (⏳)
- Size: 64px or larger
- Color: semantic-success (green) for success, ink for others
- Background circle optional (surface-soft)
- Margin-bottom: spacing.lg (24px)

#### 2. Title
- Success: "Email Verified!"
- Failed: "Verification Failed"
- Already verified: "Email Already Verified"
- Loading: "Verifying..."
- Typography: headline (26px, 540 weight)
- Text-align: center
- Margin-bottom: spacing.md (16px)

#### 3. Description Text
- Body typography (18px, 320 weight)
- Center-aligned
- Success: "Your email has been successfully verified." + "Welcome to API Forge! You can now sign in to your account."
- Failed: "This verification link is invalid or has expired." + bullet list of possible reasons
- Already verified: "This email has already been verified. You can sign in to your account."
- Loading: "Please wait while we verify your email address..."
- Margin-bottom: spacing.lg (24px)

#### 4. Bullet List (Failed state only)
- body-sm typography
- Possible reasons:
  - "Link has already been used"
  - "Link has expired (24 hours)"
  - "Email address was already verified"
- Margin-bottom: spacing.lg (24px)

#### 5. Progress Indicator (Loading state)
- Horizontal progress bar
- Indeterminate animation (or simple bar)
- surface-soft background track
- primary fill
- Margin-bottom: spacing.lg (24px)

#### 6. Primary Button
- Success: "SIGN IN NOW"
- Failed: "RESEND VERIFICATION"
- Already verified: "SIGN IN NOW"
- button-primary component
- Width: auto or max-width 200px
- Centered
- Margin-bottom: spacing.sm (12px) if second button exists

#### 7. Secondary Button / Link
- "BACK TO SIGN IN" - text link or button-secondary
- Used in Failed state only
- Centered

### Responsive Behavior
```
Desktop: Centered card/container, max-width 400px
Mobile: Full-width, reduced padding
```

---

## Output Instructions

Create Figma frames for:
1. **Success** state
2. **Failed** state
3. **Already Verified** state
4. **Loading** state

Proper naming: "AUTH-004_VerifyEmail_Success", "AUTH-004_VerifyEmail_Failed", etc.
