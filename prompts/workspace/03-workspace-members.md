# Figma Make Prompt: Workspace Members (WS-003)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 450, 480, 540
- 8px base spacing unit
- Tables/lists: hairline dividers between rows
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions, selected |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Row dividers, borders |
| {colors.surface-soft} | #F5F5F5 | Zebra rows, hover |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Table cells, labels
{typography.button} - 20px, 480 weight - Buttons
```

### Components
```
button-primary: bg=primary, text=white, rounded.pill
button-secondary: bg=canvas, text=ink, rounded.pill
avatar: rounded.full, sizes 24px, 32px, 40px
badge: small pill, bg variations
```

---

## Screen Requirements

### Purpose
Manage workspace members - view list, change roles, invite new members, remove members.

### Layout
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Top Bar                                                                                 │
├──────────┬─────────────────────────────────────────────────────────────────────────────┤
│          │                                                                              │
│ Settings │  ┌───────────────────────────────────────────────────────────────────────┐  │
│          │  │ Members                              [+ Invite Member]              │  │
│ General  │  └───────────────────────────────────────────────────────────────────────┘  │
│ ──────── │                                                                              │
│ Members ●│  ┌───────────────────────────────────────────────────────────────────────┐  │
│ Billing  │  │ Search members...                                         [Filter ▼]│  │
│          │  └───────────────────────────────────────────────────────────────────────┘  │
│          │                                                                              │
│          │  ┌───────────────────────────────────────────────────────────────────────┐  │
│          │  │ Name / Email        Role            Projects        Actions          │  │
│          │  ├───────────────────────────────────────────────────────────────────────┤  │
│          │  │ 👤 John Doe         👑 Owner        All           ...                 │  │
│          │  │     john@example.com                                                  │  │
│          │  ├───────────────────────────────────────────────────────────────────────┤  │
│          │  │ 👤 Jane Smith       ⚙️ Admin       5 projects   [Change] [Remove]   │  │
│          │  │     jane@example.com                                                  │  │
│          │  ├───────────────────────────────────────────────────────────────────────┤  │
│          │  │ 👤 Bob Wilson       👁 Viewer      2 projects   [Change] [Remove]   │  │
│          │  │     bob@example.com                                                  │  │
│          │  └───────────────────────────────────────────────────────────────────────┘  │
│          │                                                                              │
│          │  Showing 1-3 of 12 members                              [<] 1 2 3 [>]      │
│          │                                                                              │
└──────────┴─────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Page Header
- Title: "Members"
- Primary action: "+ Invite Member" button
- Member count badge (optional)

#### 2. Search & Filter Bar
```
┌─────────────────────────────────────────────────────────────┐
│ 🔍 Search members...                                   [▼] │
└─────────────────────────────────────────────────────────────┘
```
- Search input: text-input
- Filter dropdown: by role, by status
- Full width or flex layout

#### 3. Members Table
```
┌────────────────────────────────────────────────────────────────────────────────┐
│ Name / Email         Role            Projects       Actions                  │
├────────────────────────────────────────────────────────────────────────────────┤
│ 👤 John Doe          👑 Owner        All           [•••]                      │
│    john@example.com                                                        │
├────────────────────────────────────────────────────────────────────────────────┤
│ 👤 Jane Smith        ⚙️ Admin       5 projects    [Change] [Remove]           │
│    jane@example.com                                                        │
└────────────────────────────────────────────────────────────────────────────────┘
```
- Header row: eyebrow typography, uppercase
- Row divider: 1px hairline
- Hover state: surface-soft background

#### 4. Member Row
- Avatar: 40px circle
- Name: body-sm, font-weight 450
- Email: body-sm, muted color
- Role: badge
- Projects count or "All"
- Actions: dropdown or buttons

#### 5. Role Badges
```
👑 Owner   - primary/ink background, white text
⚙️ Admin   - surface-soft background, ink text
👁 Viewer  - surface-soft background, muted text
```
- Pill shape: rounded.sm (6px)
- Icon + text
- 24px height

#### 6. Actions
- Change Role: dropdown or button
- Remove: button with confirmation
- More (•••): dropdown menu
  - Change role
  - View activity
  - Remove from workspace

#### 7. Pagination
```
Showing 1-3 of 12 members                [<] 1 2 3 [>]
```
- body-sm typography
- Prev/Next buttons
- Page numbers

### Invite Member Modal
```
┌─────────────────────────────────────────────────┐
│ Invite Member                                    │
│ ────────────────────────────────────────────────│
│                                                 │
│ Email addresses                                  │
│ ┌─────────────────────────────────────────────┐ │
│ │ member@example.com, another@company.com    │ │
│ └─────────────────────────────────────────────┘ │
│ Separate multiple emails with commas            │
│                                                 │
│ Role                                            │
│ ○ Viewer - Can view requests and collections   │
│ ● Editor - Can create and edit requests        │
│ ○ Admin  - Can manage workspace settings       │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ Cancel              [Send Invitation]       │ │
│ └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

### Pending Invitations Section
```
┌────────────────────────────────────────────────────────────────────────────────┐
│ PENDING INVITATIONS                                    2                      │
├────────────────────────────────────────────────────────────────────────────────┤
│ 📧 alice@example.com      Invited as Editor      [Resend] [Revoke]    2d ago │
│ 📧 bob@startup.io         Invited as Viewer      [Resend] [Revoke]    5d ago │
└────────────────────────────────────────────────────────────────────────────────┘
```
- Different styling for pending (muted, email icon)
- Time since sent
- Resend/Revoke actions

---

## Output Instructions

Create Figma frames for:
1. **Members list** with table
2. **Invite member modal**
3. **Pending invitations** section
4. **Change role dropdown**
5. **Remove member confirmation**

Proper naming: "WS-003_WorkspaceMembers_List", "WS-003_WorkspaceMembers_InviteModal", etc.
