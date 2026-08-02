# Figma Make Prompt: Register Screen (AUTH-002)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Only use color blocks for storytelling sections - NOT for auth screens
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Form inputs: {rounded.md} (8px), padding 12px 14px
- No shadows on default surfaces
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary button background |
| {colors.canvas} | #FFFFFF | Page background, input background |
| {colors.ink} | #000000 | Text on light surfaces |
| {colors.hairline} | #E5E5E5 | Input borders |
| {colors.surface-soft} | #F5F5F5 | Hover states |
| {colors.semantic-success} | #34A853 | Password strength indicator |
| {colors.accent-magenta} | #E54980 | Password strength weak |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.body} - 18px, 320 weight - Form labels
{typography.body-sm} - 16px, 330 weight - Helper text, links, requirements
{typography.button} - 20px, 480 weight - Button text
{typography.link} - 20px, 480 weight - Clickable links
{typography.eyebrow} - 18px, 400 weight, uppercase - Section labels
```

### Components
```
button-primary: bg=primary, text=white, rounded.pill, padding 10px 20px
button-secondary: bg=canvas, text=ink, rounded.pill, padding 8px 18px 10px
text-input: bg=canvas, border=hairline, rounded.md, padding 12px 14px
```

### Do's & Don'ts
```
✓ Centered card layout, max-width 420px
✓ Password strength indicator
✓ Password requirements checklist
✓ Pill buttons only
✓ Terms checkbox with links

✗ NO color blocks on auth screens
✗ NO shadows
✗ NO square buttons
✗ NO mid-gray text (use weight, not opacity)
```

---

## Screen Requirements

### Purpose
Registration screen - allows users to create new accounts with email/password.

### Layout (Desktop)
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
│  │              ─────── OR ───────                   │  │
│  │                                                    │  │
│  │   ┌─────────────────────────────────────────┐    │  │
│  │   │  [G] Sign up with Google                │    │  │
│  │   └─────────────────────────────────────────┘    │  │
│  │   ┌─────────────────────────────────────────┐    │  │
│  │   │  [H] Sign up with GitHub                │    │  │
│  │   └─────────────────────────────────────────┘    │  │
│  │                                                    │  │
│  │   ─────────────────────────────────────────────   │  │
│  │   Already have an account?  Sign in               │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Logo
- Same as login screen

#### 2. Form Card
- Background: canvas (white)
- Border: 1px hairline
- Border-radius: rounded.lg (24px)
- Padding: spacing.xl (32px)
- Max-width: 420px (slightly wider than login for more fields)
- Centered on page

#### 3. Page Title
- Text: "CREATE ACCOUNT"
- Typography: headline (26px, 540 weight)
- Margin-bottom: spacing.lg (24px)

#### 4. Full Name Input
- Label: "Full name" (body-sm)
- Placeholder: "John Doe"
- Margin-bottom: spacing.md (16px)

#### 5. Email Input
- Label: "Email address" (body-sm)
- Placeholder: "example@company.com"
- Margin-bottom: spacing.md (16px)

#### 6. Password Input with Strength Indicator
- Label: "Password" (body-sm)
- Input: text-input with eye toggle
- Margin-bottom: spacing.xs (8px)

##### Password Strength Indicator
- Progress bar below input
- Height: 4px
- Border-radius: 2px
- Background track: surface-soft
- Fill colors based on strength:
  - Weak (<8 chars): accent-magenta (red)
  - Fair (8+ chars, missing 1 rule): orange (#F5A623)
  - Good (8+ chars, meets 3 rules): yellow (#FFD60A)
  - Strong (8+ chars, meets all rules): semantic-success (green)
- Text label: "Weak" / "Fair" / "Good" / "Strong" next to bar
- Margin-bottom: spacing.xs (8px)

##### Password Requirements Checklist
- List of 4 requirements
- Each with checkbox icon (empty or checkmark)
- Checkmark color: semantic-success when met
- Text: body-sm, color muted when unmet, ink when met
- Requirements:
  - "Minimum 8 characters"
  - "At least one uppercase letter"
  - "At least one number"
  - "At least one special character"
- Margin-bottom: spacing.md (16px)

#### 7. Confirm Password Input
- Label: "Confirm password" (body-sm)
- Input: text-input with eye toggle
- Margin-bottom: spacing.md (16px)

#### 8. Terms Checkbox
- Checkbox + text (body-sm)
- Text: "I agree to Terms of Service and Privacy Policy"
- "Terms of Service" and "Privacy Policy" are links (link typography)
- Margin-bottom: spacing.lg (24px)

#### 9. Primary Button (CREATE ACCOUNT)
- Component: button-primary
- Full width
- Margin-bottom: spacing.lg (24px)

#### 10. OAuth Buttons
- Same as login screen
- Stacked vertically

#### 11. Footer Link
- Text: "Already have an account? Sign in"
- "Sign in" is a link

### Password Strength States
```
Weak: ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  Red
Fair: ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░  Orange
Good: ████████████████████████░░░░░░░░░░░░░░░░░░  Yellow
Strong: ████████████████████████████████████████  Green
```

### Responsive Behavior
```
Desktop: Centered card, max-width 420px
Mobile: Full-width form, stacked OAuth buttons
```

---

## Output Instructions

Create a Figma frame with:
1. **Desktop variant** (420px width card)
2. **Password strength states** shown together or separately
3. **Component states** for all inputs and buttons
4. **Auto-layout** for responsive behavior
5. **Proper naming**: "AUTH-002_Register_Desktop"
