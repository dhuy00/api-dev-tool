# Figma Make Prompt: Invite Member Modal (WS-004)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Modals use overlay-scrim and soft shadow
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary button |
| {colors.canvas} | #FFFFFF | Modal background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Borders, dividers |
| {colors.overlay-scrim} | rgba(0,0,0,0.6) | Modal backdrop |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Modal title
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Labels, helper text
{typography.button} - 20px, 480 weight - Buttons
```

### Components
```
button-primary: bg=primary, text=white, rounded.pill
button-secondary: bg=canvas, text=ink, rounded.pill
text-input: bg=canvas, border=hairline, rounded.md
modal: bg=canvas, rounded.lg, shadow=soft elevation
```

---

## Modal Layout

### Invite Member Modal
```
┌─────────────────────────────────────────────────┐
│ Invite Member                              [X]  │
│ ────────────────────────────────────────────────│
│                                                 │
│ Email addresses                                  │
│ ┌─────────────────────────────────────────────┐ │
│ │                                             │ │
│ │                                             │ │
│ └─────────────────────────────────────────────┘ │
│ Enter email addresses, separated by commas     │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ alice@example.com (✓ valid)                │ │
│ │ bob@company.io (✓ valid)                    │ │
│ │ invalid-email (✗ invalid)                  │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ Role                                            │
│ ┌─────────────────────────────────────────────┐ │
│ │ ○ Viewer                                     │ │
│ │   Can view requests and collections         │ │
│ ├─────────────────────────────────────────────┤ │
│ │ ● Editor                                     │ │
│ │   Can create and edit requests              │ │
│ ├─────────────────────────────────────────────┤ │
│ │ ○ Admin                                      │ │
│ │   Can manage workspace settings             │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ Message (optional)                               │
│ ┌─────────────────────────────────────────────┐ │
│ │                                             │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ Cancel              [Send Invitation] (2)   │ │
│ └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Modal Container
- Background: canvas (white)
- Border-radius: rounded.lg (24px)
- Padding: spacing.xl (32px)
- Width: 480px (max)
- Shadow: soft elevation (0 4px 16px rgba(0,0,0,0.06))
- Backdrop: overlay-scrim (rgba(0,0,0,0.6))

#### 2. Modal Header
- Title: "Invite Member" (headline typography)
- Close button (X): top right, button-icon-circular
- Border-bottom: 1px hairline
- Margin-bottom: spacing.lg (24px)

#### 3. Email Input
- Label: "Email addresses" (body-sm)
- Multi-line or single-line input
- Placeholder: "Enter email addresses, separated by commas"
- Helper text: "Separate multiple emails with commas"
- Margin-bottom: spacing.md (16px)

#### 4. Email Tags/Validation Display
```
┌─────────────────────────────────────────────┐
│ alice@example.com ✓                        │
│ bob@company.io ✓                           │
│ invalid-email ✗                            │
└─────────────────────────────────────────────┘
```
- Tag style display for valid emails
- Valid: checkmark, muted/green
- Invalid: X mark, red/muted
- Removable with X button

#### 5. Role Selection (Radio Cards)
```
┌─────────────────────────────────────────────┐
│ ● Viewer                                     │
│   Can view requests and collections         │
└─────────────────────────────────────────────┘
```
- Radio button + description
- Selected: border=primary, bg=surface-soft
- Not selected: border=hairline
- Full-width cards
- Margin-bottom: spacing.md (16px)

#### 6. Role Descriptions
```
Viewer: "Can view requests and collections"
Editor: "Can create and edit requests"
Admin: "Can manage workspace settings"
Owner: "Full control including billing and deletion"
```

#### 7. Optional Message
- Label: "Message (optional)"
- Multi-line text area
- Placeholder: "Add a personal message..."
- Optional feature

#### 8. Modal Footer
- Cancel: button-secondary
- Send Invitation: button-primary
- Show count: "Send Invitation (2)" for multiple invites
- Flex layout: Cancel left, primary button right
- Margin-top: spacing.lg (24px)

### Success State
```
┌─────────────────────────────────────────────────┐
│ Invite Member                              [X]  │
│ ────────────────────────────────────────────────│
│                                                 │
│            ✓ Invitations sent!                  │
│                                                 │
│   Invitations sent to:                          │
│   • alice@example.com                          │
│   • bob@company.io                              │
│                                                 │
│   They will receive an email with a link        │
│   to join your workspace.                      │
│                                                 │
│                   [Done]                        │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Error States
```
- Invalid email: "Please enter valid email addresses"
- No email: "Please enter at least one email address"
- Already member: "john@example.com is already a member"
- Rate limit: "Too many invitations. Please try again later."
```

---

## Output Instructions

Create Figma frames for:
1. **Invite modal** (empty form)
2. **Invite modal** (with emails entered)
3. **Invite modal** (with validation errors)
4. **Success state** after sending

Proper naming: "WS-004_InviteMember_Default", "WS-004_InviteMember_Success", etc.
