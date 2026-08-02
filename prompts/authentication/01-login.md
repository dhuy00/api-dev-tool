# Figma Make Prompt: Login Screen (AUTH-001)

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
| {colors.primary} | #000000 | Primary button background, headlines |
| {colors.canvas} | #FFFFFF | Page background, input background |
| {colors.ink} | #000000 | Text on light surfaces |
| {colors.hairline} | #E5E5E5 | Input borders |
| {colors.surface-soft} | #F5F5F5 | Hover states, icon buttons |
| {colors.on-inverse-soft} | rgba(255,255,255,0.16) | Disabled states |
| {colors.semantic-success} | #34A853 | Success states |
| {colors.accent-magenta} | #E54980 | Error states only (rare) |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.body} - 18px, 320 weight - Form labels
{typography.body-sm} - 16px, 330 weight - Helper text, links
{typography.button} - 20px, 480 weight - Button text
{typography.link} - 20px, 480 weight - Clickable links
```

### Spacing
```
{spacing.sm} - 12px - Form input vertical padding
{spacing.md} - 16px - Form input horizontal padding
{spacing.lg} - 24px - Section padding
{spacing.xl} - 32px - Element spacing
{spacing.xxl} - 48px - Major section gaps
```

### Components
```
button-primary: bg=primary, text=white, rounded.pill, padding 10px 20px
button-secondary: bg=canvas, text=ink, rounded.pill, padding 8px 18px 10px
text-input: bg=canvas, border=hairline, rounded.md, padding 12px 14px
button-icon-circular: 40px circle, bg=surface-soft
```

### Do's & Don'ts
```
✓ Centered card layout, max-width 400px
✓ Logo above form
✓ Generous padding
✓ Pill buttons only
✓ Black primary CTA
✓ White secondary buttons

✗ NO color blocks on auth screens
✗ NO shadows
✗ NO square buttons
✗ NO gradients
✗ NO mid-gray text (use weight, not opacity)
```

---

## Screen Requirements

### Purpose
Login screen - entry point of the application for unauthenticated users.

### Layout (Desktop)
```
┌─────────────────────────────────────────────┐
│                                             │
│              [Logo: API Forge]              │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │                                         │  │
│  │            SIGN IN                     │  │
│  │                                         │  │
│  │  Email address                         │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │ example@company.com               │  │  │
│  │  └─────────────────────────────────┘  │  │
│  │                                         │  │
│  │  Password                              │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │ ••••••••••••••          [👁]   │  │  │
│  │  └─────────────────────────────────┘  │  │
│  │                                         │  │
│  │  ☐ Remember me     Forgot password?   │  │
│  │                                         │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │           SIGN IN               │  │  │
│  │  └─────────────────────────────────┘  │  │
│  │                                         │  │
│  │         ───── OR ─────                 │  │
│  │                                         │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │ [G]  Continue with Google       │  │  │
│  │  └─────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │ [H]  Continue with GitHub        │  │  │
│  │  └─────────────────────────────────┘  │  │
│  │                                         │  │
│  │  ─────────────────────────────────── │  │
│  │  Don't have an account?  Sign up      │  │
│  │                                         │  │
│  └───────────────────────────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Logo
- Placeholder logo "API Forge" text or simple icon
- Centered, above the form card
- Size: ~40px height

#### 2. Form Card
- Background: canvas (white)
- Border: 1px hairline
- Border-radius: rounded.lg (24px)
- Padding: spacing.xl (32px)
- Max-width: 400px
- Centered on page

#### 3. Page Title
- Text: "SIGN IN"
- Typography: headline (26px, 540 weight)
- Letter-spacing: -0.26px
- Margin-bottom: spacing.lg (24px)
- Left-aligned inside card

#### 4. Email Input
- Label: "Email address" (body-sm, above input)
- Input: text-input component
- Placeholder: "example@company.com"
- Margin-bottom: spacing.md (16px)

#### 5. Password Input
- Label: "Password" (body-sm, above input)
- Input: text-input component with eye icon
- Eye icon: button-icon-circular, right-aligned inside input
- Placeholder: "Enter your password"
- Margin-bottom: spacing.sm (12px)

#### 6. Remember Me + Forgot Password Row
- Layout: flex, space-between
- Remember me: checkbox + label (body-sm)
- Forgot password: link (body-sm, ink color)
- Margin-bottom: spacing.lg (24px)

#### 7. Primary Button (SIGN IN)
- Component: button-primary
- Text: "SIGN IN"
- Full width inside card
- Margin-bottom: spacing.lg (24px)

#### 8. Divider with OR
- Text: "OR" centered
- Typography: eyebrow (uppercase, letter-spacing 0.54px)
- Line: 1px hairline, left and right of text
- Margin: spacing.lg (24px) vertical

#### 9. OAuth Buttons
- Two buttons, stacked vertically
- Component: button-secondary (white pill, black text)
- Google button: "[G]" icon + "Continue with Google"
- GitHub button: "[H]" icon + "Continue with GitHub"
- Full width, margin-bottom: spacing.sm (12px) between
- Icons: simple letter representations or minimal SVG icons

#### 10. Footer Link
- Text: "Don't have an account? Sign up"
- Link part "Sign up" uses link typography
- Margin-top: spacing.lg (24px)
- Centered

### States to Design

#### Email Input States
- Default: border=hairline
- Focused: ring (not border change)
- Error: red border, error message below (very rare use of red)
- Disabled: bg=surface-soft, text=muted

#### Password Input States
- Same as email
- Eye icon toggles between:
  - Eye-off (password hidden, default)
  - Eye (password visible)

#### Primary Button States
- Default: bg=primary, text=white
- Hover: slightly lighter (scale 0.98)
- Active/Pressed: micro-scale effect
- Loading: spinner + "Signing in..."
- Disabled: bg=surface-soft

#### OAuth Button States
- Default: bg=canvas, border=hairline
- Hover: bg=surface-soft
- Loading: spinner, disabled
- Disabled: muted colors

### Error Handling (inline errors)
```
- Error message below input: body-sm, error color
- Red border on input
- Error icon optional
```

### Responsive Behavior
```
Desktop (>1024px):
- Centered card, max-width 400px
- Logo above form

Tablet (768-1024px):
- Same as desktop
- Slightly smaller padding

Mobile (<768px):
- Full-width form
- OAuth buttons stack vertically
- Bottom-aligned link to signup
- Padding: spacing.lg
```

---

## Output Instructions

Create a Figma frame with:
1. **Desktop variant** (428px width mobile, 480px width tablet, 400px centered desktop card)
2. **Component states** for all interactive elements
3. **Auto-layout** for responsive behavior
4. **Proper naming**: "AUTH-001_Login_Desktop", "AUTH-001_Login_Mobile"
5. **Design tokens** applied as styles where possible
