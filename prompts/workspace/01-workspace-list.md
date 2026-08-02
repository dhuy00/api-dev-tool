# Figma Make Prompt: Workspace List (WS-001)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 450, 480, 540
- 8px base spacing unit
- Cards: bg=canvas, border=hairline, rounded.lg, padding=spacing.lg
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions, selected states |
| {colors.canvas} | #FFFFFF | Page background, cards |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Card borders, dividers |
| {colors.surface-soft} | #F5F5F5 | Sidebar, hover states |
| {colors.semantic-success} | #34A853 | Online indicator |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.card-title} - 24px, 700 weight - Card titles
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Meta text, labels
{typography.caption} - 12px, 400 weight - Timestamps
{typography.eyebrow} - 18px, 400 weight, uppercase - Section headers
```

### Components
```
button-primary: bg=primary, text=white, rounded.pill
button-secondary: bg=canvas, text=ink, rounded.pill
card: bg=canvas, border=hairline, rounded.lg, padding=spacing.lg
template-card: bg=surface-soft, rounded.md, padding=spacing.md
```

---

## Screen Requirements

### Purpose
Display all workspaces the user has access to (personal + team), allow creating new workspaces.

### Layout
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Top Bar: [☰] [API Forge]                           [🔔] [👤 John Doe ▼]               │
├──────────────┬───────────────────────────────────────────────────────────────────────┤
│              │                                                                               │
│ All          │  ┌─────────────────────────────────────────────────────────────┐        │
│              │  │ WORKSPACES                                         [+ New] │        │
│ WORKSPACES   │  └─────────────────────────────────────────────────────────────┘        │
│ ─────────    │                                                                               │
│ > Personal   │  ┌─────────────────────────────────────────────────────────────┐        │
│   My API     │  │ PERSONAL WORKSPACES                           [+ New Workspace] │        │
│   Test       │  └─────────────────────────────────────────────────────────────┘        │
│              │                                                                               │
│ > Team       │  ┌──────────────────────┐  ┌──────────────────────┐                     │
│   Acme       │  │ 📁  My API            │  │ 📁  Test API          │                     │
│   Startup    │  │ 12 projects         │  │ 5 projects            │                     │
│              │  │ 👤 Owner             │  │ 👤 Owner              │                     │
│ PROJECTS     │  │ Last: 2h ago        │  │ Last: 1d ago         │                     │
│ ─────────    │  └──────────────────────┘  └──────────────────────┘                     │
│ > My API     │                                                                               │
│   Auth       │  ┌─────────────────────────────────────────────────────────────┐        │
│   Users      │  │ TEAM WORKSPACES                                             │        │
│   Orders     │  └─────────────────────────────────────────────────────────────┘        │
│              │                                                                               │
│              │  ┌──────────────────────┐  ┌──────────────────────┐                     │
│              │  │ 👥  Acme Corp       │  │ 👥  Startup Inc       │                     │
│              │  │ 23 projects        │  │ 8 projects           │                     │
│              │  │ 👑 Owner           │  │ ⚙️ Admin             │                     │
│              │  │ Last: 5m ago       │  │ Last: 3h ago        │                     │
│              │  └──────────────────────┘  └──────────────────────┘                     │
│              │                                                                               │
│              │  ┌─────────────────────────────────────────────────────────────┐        │
│              │  │ + Create New Workspace                                      │        │
│              │  └─────────────────────────────────────────────────────────────┘        │
└──────────────┴───────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Page Header
- Title: "WORKSPACES" (eyebrow or headline)
- Primary action button: "+ New" or "+ New Workspace"
- button-primary component
- Flex layout: title left, button right
- Margin-bottom: spacing.lg (24px)

#### 2. Section Headers
- Typography: eyebrow (uppercase, letter-spacing 0.54px)
- Text: "PERSONAL WORKSPACES", "TEAM WORKSPACES"
- Color: ink
- Margin-bottom: spacing.md (16px)
- Optional: count badge

#### 3. Workspace Card (Personal)
```
┌─────────────────────────────────┐
│ 📁  My API                      │
│ 12 projects                    │
│ 👤 Owner                        │
│ Last: 2h ago                   │
└─────────────────────────────────┘
```
- Card component: bg=canvas, border=hairline, rounded.lg
- Padding: spacing.lg (24px)
- Hover state: subtle shadow or border color change
- Icon: folder emoji or simple icon
- Title: card-title typography
- Meta: body-sm typography, muted color
- Last activity: caption typography

#### 4. Workspace Card (Team)
```
┌─────────────────────────────────┐
│ 👥  Acme Corp                  │
│ 23 projects                    │
│ 👑 Owner                       │
│ Last: 5m ago                   │
└─────────────────────────────────┘
```
- Same as personal but with team icon (👥)
- Role badge: 👑 Owner, ⚙️ Admin, 👁 Viewer

#### 5. Role Badges
```
- Owner: primary/black badge
- Admin: surface-soft badge
- Viewer: surface-soft badge, muted text
```
- Typography: body-sm
- Padding: spacing.xs (8px) horizontal
- Border-radius: rounded.sm (6px)

#### 6. Create Workspace Card
```
┌─────────────────────────────────┐
│ + Create New Workspace          │
└─────────────────────────────────┘
```
- Dashed border (hairline)
- "+" icon or text
- Centered text
- Hover: solid border, surface-soft background

#### 7. Modal/Dialog for Create Workspace
```
┌─────────────────────────────────┐
│ Create New Workspace            │
│ ─────────────────────────────────│
│                                 │
│ Workspace Name                   │
│ ┌─────────────────────────────┐ │
│ │                             │ │
│ └─────────────────────────────┘ │
│                                 │
│ Description (optional)           │
│ ┌─────────────────────────────┐ │
│ │                             │ │
│ └─────────────────────────────┘ │
│                                 │
│ Workspace Type                   │
│ ○ Personal                      │
│ ● Team                          │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Cancel    [Create Workspace]│ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

### Responsive Behavior
```
Desktop: 2-3 cards per row
Tablet: 2 cards per row
Mobile: 1 card per row, full width
```

### Card States
```
Default: border=hairline
Hover: border=primary, subtle shadow
Selected: bg=surface-soft, border=primary
Loading: skeleton placeholder
```

---

## Output Instructions

Create Figma frames for:
1. **Workspace list** with multiple cards
2. **Personal workspace card** detail
3. **Team workspace card** detail
4. **Create workspace modal/dialog**
5. **Empty state** (no workspaces)

Proper naming: "WS-001_WorkspaceList_Default", "WS-001_WorkspaceList_CreateModal", etc.
