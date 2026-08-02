# Figma Make Prompt: Global Search (SEARCH-001)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Modal/overlay with search interface
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions, selected |
| {colors.canvas} | #FFFFFF | Modal background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers |
| {colors.surface-soft} | #F5F5F5 | Hover, backgrounds |
| {colors.overlay-scrim} | rgba(0,0,0,0.6) | Backdrop |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Section titles
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Search results
{typography.caption} - 12px, 400 weight - Hints
```

---

## Screen Requirements

### Purpose
Quick search for requests, collections, environments, documentation across workspace.

### Layout (Empty/Initial State)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🔍 Search...                                              [⌘K]      │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │                                                                              │  │
│  │  Type to search requests, collections, environments, docs...             │  │
│  │                                                                              │  │
│  │  Recent searches:                                                        │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │  • POST /auth/login                                                     │  │
│  │  • GET /users/:id                                                       │  │
│  │  • Authentication API                                                   │  │
│  │                                                                              │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Layout (With Results)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  🔍 auth                                                     [×]      │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │                                                                              │  │
│  │  Requests (8)                                                              │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │  ● POST /auth/login                                  Authentication API   │  │
│  │  ● POST /auth/register                               Authentication API   │  │
│  │  ● POST /auth/logout                                Authentication API   │  │
│  │  ● GET /auth/session                                Authentication API   │  │
│  │                                                                              │  │
│  │  Collections (1)                                                           │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │  📂 Authentication API                              Project: Auth API    │  │
│  │                                                                              │  │
│  │  Environments (0)                                                          │  │
│  │  ───────────────────────────────────────────────────────────────────── │  │
│  │  No results                                                               │  │
│  │                                                                              │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────── │
│  [↹ Tab] Next   [⇧ Shift+↹] Previous   [↵ Enter] Open   [Esc] Close      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Modal Container
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ ...content...                                                          │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```
- Centered modal
- Overlay background: rgba(0,0,0,0.5)
- Border-radius: rounded.lg (24px)
- Width: 600-640px
- Max-height: 80vh
- Shadow: soft elevation

#### 2. Search Input
```
┌─────────────────────────────────────────────────────────────┐
│ 🔍 Search...                                    [⌘K]       │
└─────────────────────────────────────────────────────────────┘
```
- Large input field
- Search icon left
- Keyboard shortcut hint right
- No border, just the container
- Auto-focus on open

#### 3. Keyboard Hints
```
[↹ Tab] Next   [⇧ Shift+↹] Previous   [↵ Enter] Open   [Esc] Close
```
- Bottom of modal
- Caption typography
- Muted color
- Platform-specific hints (⌘ for Mac, Ctrl for Windows)

#### 4. Recent Searches
```
┌─────────────────────────────────────────────────────────────┐
│ Recent searches:                                              │
│ ────────────────────────────────────────────────────────────│
│ • POST /auth/login                                           │
│ • GET /users/:id                                              │
│ • Authentication API                                         │
└─────────────────────────────────────────────────────────────┘
```
- Label: "Recent searches:" body-sm
- List items with bullet icon
- Clickable to search
- Clear all option

#### 5. Result Groups
```
Requests (8)
─────────────────────────────────────────────────────────────────
● POST /auth/login                              Authentication API
● POST /auth/register                           Authentication API
```
- Section header: eyebrow typography, count badge
- Divider line
- Result items below

#### 6. Search Result Item
```
● POST /auth/login                              Authentication API
```
- Method badge: colored pill
- Path/name: body-sm
- Breadcrumb/project: body-sm, muted, right-aligned
- Hover: bg=surface-soft
- Selected (keyboard): bg=primary/10%, border-left primary

#### 7. Method Badges
```
● GET     - green
● POST    - amber/yellow
● PUT     - blue
● DELETE  - red
● PATCH   - purple
```

#### 8. Result Icons
```
Requests: ● (circle)
Collections: 📂 (folder)
Environments: ⚙️ (gear)
Documentation: 📄 (document)
Projects: 📁 (folder closed)
```

#### 9. No Results State
```
┌─────────────────────────────────────────────────────────────┐
│ No results for "xyz"                                         │
│ ────────────────────────────────────────────────────────────│
│ Try searching with different keywords or check your spelling │
└─────────────────────────────────────────────────────────────┘
```

#### 10. Loading State
```
┌─────────────────────────────────────────────────────────────┐
│ Searching...                                                │
└─────────────────────────────────────────────────────────────┘
```

---

## Output Instructions

Create Figma frames for:
1. **Empty state** (initial)
2. **With results**
3. **No results**
4. **Selected item** (keyboard navigation)

Proper naming: "SEARCH-001_GlobalSearch_Empty", "SEARCH-001_GlobalSearch_Results", etc.
