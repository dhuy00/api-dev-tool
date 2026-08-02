# Figma Make Prompt: Change Password Screen (AUTH-005)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Form inputs: {rounded.md} (8px), padding 12px 14px
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary button |
| {colors.canvas} | #FFFFFF | Page background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Input borders |
| {colors.surface-soft} | #F5F5F5 | Warning background |
| {colors.semantic-success} | #34A853 | Password strength |
| {colors.accent-magenta} | #E54980 | Password strength weak |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Section title
{typography.body-sm} - 16px, 330 weight - Labels, helper text
{typography.button} - 20px, 480 weight - Button text
```

### Components
```
button-primary: bg=primary, text=white, rounded.pill
text-input: bg=canvas, border=hairline, rounded.md
```

---

## Screen Requirements

### Purpose
Allow logged-in users to change their current password.

### Layout
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   ┌─────────────────────────────────────────────────┐  │
│   │  🔐 Change Password                             │  │
│   │                                                  │  │
│   │  Ensure your account is using a strong,         │  │
│   │  unique password.                               │  │
│   │                                                  │  │
│   │  Current password                                │  │
│   │  ┌───────────────────────────────────────────┐  │  │
│   │  │ ••••••••••••••                    [👁]    │  │  │
│   │  └───────────────────────────────────────────┘  │  │
│   │                                                  │  │
│   │  New password                                    │  │
│   │  ┌───────────────────────────────────────────┐  │  │
│   │  │ ••••••••••••••                    [👁]    │  │  │
│   │  └───────────────────────────────────────────┐  │  │
│   │  ┌─ Password strength ───────────────────────┐  │  │
│   │  │ ████████████████░░░░░░░░░░░░░░░░ Strong   │  │  │
│   │  └───────────────────────────────────────────┘  │  │
│   │  • Minimum 8 characters                         │  │
│   │  • At least one uppercase letter               │  │
│   │  • At least one number                         │  │
│   │  • At least one special character              │  │
│   │                                                  │  │
│   │  Confirm new password                           │  │
│   │  ┌───────────────────────────────────────────┐  │  │
│   │  │ ••••••••••••••                    [👁]    │  │  │
│   │  └───────────────────────────────────────────┘  │  │
│   │                                                  │  │
│   │  ┌───────────────────────────────────────────┐  │  │
│   │  │           UPDATE PASSWORD                 │  │  │
│   │  └───────────────────────────────────────────┘  │  │
│   │                                                  │  │
│   │  ⚠️ Changing your password will log you       │  │
│   │  out of all other sessions.                    │  │
│   │                                                  │  │
│   └─────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Container Card
- Background: canvas (white)
- Border: 1px hairline
- Border-radius: rounded.lg (24px)
- Padding: spacing.xl (32px)
- Max-width: 480px
- Margin: auto (centered)

#### 2. Section Header
- Icon: lock icon (🔐)
- Title: "Change Password"
- Typography: headline (26px, 540 weight)
- Margin-bottom: spacing.sm (12px)

#### 3. Intro Text
- Body typography (18px, 320 weight)
- "Ensure your account is using a strong, unique password."
- Margin-bottom: spacing.lg (24px)

#### 4. Current Password Input
- Label: "Current password" (body-sm)
- text-input with eye toggle
- Placeholder: "Enter current password"
- Margin-bottom: spacing.md (16px)

#### 5. New Password Input
- Label: "New password" (body-sm)
- text-input with eye toggle
- Placeholder: "Enter new password"
- Password strength indicator below
- Password requirements checklist
- Margin-bottom: spacing.md (16px)

#### 6. Confirm New Password Input
- Label: "Confirm new password" (body-sm)
- text-input with eye toggle
- Placeholder: "Confirm new password"
- Margin-bottom: spacing.lg (24px)

#### 7. Primary Button (UPDATE PASSWORD)
- button-primary component
- Full width
- Margin-bottom: spacing.md (16px)

#### 8. Warning Banner
- Background: surface-soft (light yellow tint)
- Border-left: 4px solid (amber/orange)
- Border-radius: rounded.sm (6px)
- Padding: spacing.md (16px)
- Icon: warning triangle (⚠️)
- Text: "Changing your password will log you out of all other sessions."
- body-sm typography

### Warning Banner Design
```
┌─────────────────────────────────────────────┐
│ ⚠️ Changing your password will log you     │
│     out of all other sessions.              │
└─────────────────────────────────────────────┘
```
- Background: #FFF9E6 or surface-soft
- Left border: amber/orange
- Icon: warning triangle, amber/orange

### Validation Rules
```
- Current password: required, must match
- New password: required, meets complexity
- Confirm password: must match new password
- New password ≠ Current password
```

### Error States
```
- Current password wrong: "Current password is incorrect"
- New password too weak: "Password does not meet requirements"
- Passwords don't match: "Passwords do not match"
- Same as current: "New password must be different"
```

---

## Output Instructions

Create Figma frames:
1. **Default** state (empty form)
2. **Filled** state (form with values)
3. **Warning banner** highlighted

Proper naming: "AUTH-005_ChangePassword_Default", "AUTH-005_ChangePassword_Filled"
