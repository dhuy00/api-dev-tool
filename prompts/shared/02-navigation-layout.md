# Figma Make Prompt: Navigation Layout (SHARED-002)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 450, 480, 540
- 8px base spacing unit
- Form inputs: {rounded.md} (8px), padding 12px 14px
- Subtle shadows: "soft elevation" 0 4px 16px rgba(0,0,0,0.06) for floating menus
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Selected items, primary actions |
| {colors.canvas} | #FFFFFF | Page background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers, borders |
| {colors.surface-soft} | #F5F5F5 | Sidebar background, hover states |
| {colors.inverse-ink} | #FFFFFF | Text on dark surfaces |
| {colors.on-inverse-soft} | rgba(255,255,255,0.16) | Icon buttons on dark |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page titles
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Sidebar items, labels
{typography.button} - 20px, 480 weight - Buttons
{typography.caption} - 12px, 400 weight, uppercase - Section labels
{typography.eyebrow} - 18px, 400 weight, uppercase - Section headers
```

### Components
```
button-primary: bg=primary, text=white, rounded.pill
button-secondary: bg=canvas, text=ink, rounded.pill
button-icon-circular: 40px circle, bg=surface-soft
dropdown-menu: bg=canvas, border=hairline, shadow soft, rounded.md
text-input: bg=canvas, border=hairline, rounded.md
```

### Sidebar Design
```
Width: 240px (expanded), 48px (collapsed)
Background: surface-soft (not pure white - slightly off-white for depth)
Border-right: 1px hairline
Section headers: eyebrow typography, uppercase, letter-spacing 0.54px
```

---

## Layout Structure

### Main Application Shell
```
┌────────────────────────────────────────────────────────────────────────────────┐
│ Top Bar (56px height)                                                         │
│ [☰] [Logo: API Forge]  [Breadcrumb: Workspaces > My API > Auth]    [Env][🔍][🔔][👤]│
├──────────────┬─────────────────────────────────────────────────────────────────┤
│ Sidebar      │ Main Content Area                                              │
│ (240px)      │                                                                 │
│              │                                                                 │
│ [All]        │  ┌──────────────────────────────────────────────────────────┐ │
│              │  │ Content header                                           │ │
│ WORKSPACES   │  │                                                          │ │
│ ──────────── │  │                                                          │ │
│ > Personal   │  │                                                          │ │
│   My API     │  │                                                          │ │
│   Test       │  │                                                          │ │
│ > Team       │  │                                                          │ │
│   Acme       │  │                                                          │ │
│              │  │                                                          │ │
│ PROJECTS     │  │                                                          │ │
│ ──────────── │  │                                                          │ │
│ > My API     │  │                                                          │ │
│   Auth       │  └──────────────────────────────────────────────────────────┘ │
│   Users      │                                                                 │
│   Orders     │                                                                 │
│              │                                                                 │
│ ──────────── │                                                                 │
│ Settings     │                                                                 │
│ Help         │                                                                 │
└──────────────┴─────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Top Bar
- Height: 56px
- Background: canvas (white)
- Border-bottom: 1px hairline
- Left section:
  - Menu toggle button (hamburger icon)
  - Logo "API Forge" (or minimal icon + text)
  - Breadcrumb navigation (optional)
- Right section:
  - Environment selector (dropdown)
  - Global search button (opens search modal)
  - Notifications button (icon, badge for unread count)
  - User avatar with dropdown menu

#### 2. Sidebar
- Width: 240px (expanded), 48px (collapsed)
- Background: surface-soft (#F7F7F7 or similar)
- Border-right: 1px hairline
- Sections:
  - All Projects (icon + text)
  - WORKSPACES section header
  - Workspace items (expandable tree)
  - PROJECTS section header
  - Project items (expandable tree)
  - COLLECTIONS section (if applicable)
  - FLOWS section (if applicable)
- Bottom:
  - Settings link
  - Help link

#### 3. Sidebar Item States
| State | Visual Treatment |
|-------|------------------|
| Default | Text ink color |
| Hover | bg=surface-soft highlight |
| Selected/Active | bg=primary/10%, left border 2px primary, text primary |
| Expanded | Chevron rotated down |
| Collapsed | Chevron pointing right |
| Disabled | Text muted, no interaction |

#### 4. Sidebar Tree Structure
```
> Workspace Name (expandable)
  ├─ 📁 Project 1
  ├─ 📁 Project 2
  └─ 📁 Project 3
```

#### 5. User Avatar Dropdown
- Avatar: circular, 32px
- Dropdown menu:
  - User name and email
  - Divider
  - Settings
  - Keyboard shortcuts
  - Theme toggle (optional)
  - Divider
  - Sign out

#### 6. Environment Selector
- Dropdown showing current environment
- Badge/icon indicating env type (dev/staging/prod)
- Quick switch between environments

#### 7. Notification Bell
- Icon button
- Badge with unread count (red dot or number)
- Dropdown showing recent notifications

### Collapsed Sidebar (48px)
```
┌───────┐
│       │
│  ☰    │
│  📁   │
│       │
│  👤   │
│       │
│  ⚙️   │
│  ❓   │
└───────┘
```
- Icons only
- Tooltip on hover showing label
- Same sections, just collapsed

### Responsive Behavior
```
Desktop (>1024px): Full sidebar visible
Tablet (768-1024px): Collapsible sidebar (toggle to show/hide)
Mobile (<768px): Hidden sidebar, hamburger menu opens overlay
```

---

## Output Instructions

Create Figma frames for:
1. **Expanded sidebar** with all sections visible
2. **Collapsed sidebar** (icon only)
3. **Sidebar with dropdown open** (workspace/project expanded)
4. **User menu open**
5. **Mobile hamburger menu**

Proper naming: "SHARED-002_Navigation_Expanded", "SHARED-002_Navigation_Collapsed", etc.
