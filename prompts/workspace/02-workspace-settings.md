# Figma Make Prompt: Workspace Settings (WS-002)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 450, 480, 540
- 8px base spacing unit
- Form inputs: {rounded.md}, padding 12px 14px
- Sections separated by hairline dividers
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers, borders |
| {colors.surface-soft} | #F5F5F5 | Input backgrounds |
| {colors.accent-magenta} | #E54980 | Danger actions |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.body} - 18px, 320 weight - Section descriptions
{typography.body-sm} - 16px, 330 weight - Labels, helper text
{typography.button} - 20px, 480 weight - Buttons
{typography.eyebrow} - 18px, 400 weight, uppercase - Section headers
```

### Components
```
button-primary: bg=primary, text=white, rounded.pill
button-secondary: bg=canvas, text=ink, rounded.pill
button-danger: bg=accent-magenta or red, text=white, rounded.pill
text-input: bg=canvas, border=hairline, rounded.md
toggle: rounded.full track, circle thumb
```

---

## Screen Requirements

### Purpose
Manage workspace settings including name, description, icon, billing, and danger zone.

### Layout (Tab-based Settings)
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Top Bar                                                                                 │
├──────────┬─────────────────────────────────────────────────────────────────────────────┤
│          │                                                                              │
│ Settings │  ┌───────────────────────────────────────────────────────────────────────┐  │
│          │  │ Workspace Settings                                           [Save] │  │
│ General  │  └───────────────────────────────────────────────────────────────────────┘  │
│ ──────── │                                                                              │
│ Members  │  ┌───────────────────────────────────────────────────────────────────────┐  │
│ Billing  │  │ General                                                               │  │
│          │  │                                                                       │  │
│          │  │  Workspace Icon                                                       │  │
│          │  │  ┌─────────┐  [Change] [Remove]                                       │  │
│          │  │  │   📁    │  Recommended: 256x256px, PNG or SVG                       │  │
│          │  │  └─────────┘                                                          │  │
│          │  │                                                                       │  │
│          │  │  Workspace Name                                                      │  │
│          │  │  ┌───────────────────────────────────────────────────────────────┐   │  │
│          │  │  │ My API Project                                                │   │  │
│          │  │  └───────────────────────────────────────────────────────────────┘   │  │
│          │  │                                                                       │  │
│          │  │  Description                                                         │  │
│          │  │  ┌───────────────────────────────────────────────────────────────┐   │  │
│          │  │  │ API development and testing workspace for...                   │   │  │
│          │  │  └───────────────────────────────────────────────────────────────┘   │  │
│          │  │                                                                       │  │
│          │  │  Workspace URL                                                       │  │
│          │  │  apiforge.io/workspaces/my-api-project                               │  │
│          │  │                                                                       │  │
│          │  │  ───────────────────────────────────────────────────────────────────│  │
│          │  │                                                                       │  │
│          │  │  Notifications                                                       │  │
│          │  │  [Toggle] Email notifications for team activity                      │  │
│          │  │  [Toggle] Desktop notifications                                       │  │
│          │  │                                                                       │  │
│          │  └───────────────────────────────────────────────────────────────────────┘  │
│          │                                                                              │
│          │  ┌───────────────────────────────────────────────────────────────────────┐  │
│          │  │ Danger Zone                                           🔴             │  │
│          │  │                                                                       │  │
│          │  │ Transfer Ownership                                                   │  │
│          │  │ Transfer this workspace to another user                              │  │
│          │  │                                        [Transfer]                      │  │
│          │  │                                                                       │  │
│          │  │ Delete Workspace                                                      │  │
│          │  │ Once deleted, this workspace cannot be recovered                      │  │
│          │  │                                        [Delete]                        │  │
│          │  └───────────────────────────────────────────────────────────────────────┘  │
│          │                                                                              │
└──────────┴─────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Settings Navigation (Left)
- Vertical tabs/navigation
- Active: bg=primary/10%, text=primary, left border
- Items: General, Members, Billing, etc.
- Width: ~180px
- Sticky positioning

#### 2. Settings Header
- Title: "Workspace Settings"
- Save button (primary) - top right
- Optional: Discard button

#### 3. Settings Section
- Container with subtle background or card
- Section header (optional)
- Form fields with labels
- Clear visual grouping

#### 4. Icon Upload/Display
```
┌─────────┐
│   📁    │  [Change] [Remove]
└─────────┘
```
- 80-100px square
- Rounded corners
- Edit buttons below or overlaid

#### 5. Form Inputs
- Labels above inputs (body-sm)
- text-input component
- Helper text below (caption/body-sm, muted)
- Margin-bottom: spacing.lg (24px) between groups

#### 6. Toggle Switches
```
[Toggle] Email notifications for team activity
```
- Track: rounded.full, bg changes between states
- Off: surface-soft
- On: primary (black)
- Thumb: white circle
- Label: body-sm

#### 7. Danger Zone Section
- Container with red/danger styling
- Border: 1px danger color (or just separated)
- Header: "Danger Zone" with danger icon (🔴)
- Actions:
  - Transfer Ownership
  - Delete Workspace (button-danger)

#### 8. Action Buttons
- Primary: button-primary
- Secondary: button-secondary
- Danger: bg=danger-red, text=white, rounded.pill

### Tab Structure
```
General          - Name, description, icon, notifications
Members          - Team member list, roles, invite
Billing          - Plan, payment methods, invoices
API Keys         - Workspace-level API keys
Integrations     - Connected services
Audit Log        - Activity history
Danger Zone      - Transfer, delete
```

### Form Validation
```
- Workspace name: required, min 1 char, max 50 chars
- Description: optional, max 200 chars
- URL: auto-generated, read-only
```

---

## Output Instructions

Create Figma frames for:
1. **General tab** with form fields
2. **Members tab** (see WS-003)
3. **Danger Zone** section
4. **Settings modal** (compact version)

Proper naming: "WS-002_WorkspaceSettings_General", "WS-002_WorkspaceSettings_DangerZone", etc.
