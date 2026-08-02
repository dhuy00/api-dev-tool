# Figma Make Prompt: Environment Quick Switch (ENV-002)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmapons variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Compact dropdown/modal for quick switching
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Selected, active |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Borders |
| {colors.surface-soft} | #F5F5F5 | Hover |

### Typography Scale
```
{typography.body-sm} - 16px, 330 weight - Labels
{typography.button} - 20px, 480 weight - Buttons
```

---

## Screen Requirements

### Purpose
Quick switch between environments from anywhere in the app.

### Layout (Dropdown)
```
┌─────────────────────────────────────────┐
│ Environment                              │
│ ─────────────────────────────────────────│
│                                         │
│ 🔧 Development              [✓ Active]  │
│ 🔧 Staging                                 │
│ 🚀 Production                            │
│                                         │
│ ─────────────────────────────────────────│
│ [⚙️ Manage Environments]                  │
│                                         │
└─────────────────────────────────────────┘
```

### Components to Implement

#### 1. Environment Selector (Top Bar)
```
┌─────────────────────────────────┐
│ 🔧 Development ▼               │
└─────────────────────────────────┘
```
- Compact button in top bar
- Shows current environment
- Dropdown indicator (▼)
- Color-coded icon

#### 2. Dropdown Panel
```
┌─────────────────────────────────────────┐
│ Environment                              │
│ ─────────────────────────────────────────│
│                                         │
│ 🔧 Development              [✓ Active]  │
│ 🔧 Staging                                 │
│ 🚀 Production                            │
│                                         │
│ ─────────────────────────────────────────│
│ [⚙️ Manage Environments]                  │
│                                         │
└─────────────────────────────────────────┘
```
- Floating dropdown
- Shadow: soft elevation
- Border: hairline
- Border-radius: rounded.md or rounded.lg
- Width: 220-280px
- Checkmark for active environment
- Link to full settings at bottom

#### 3. Environment Option
```
🔧 Development              [✓ Active]
```
- Icon + name
- Checkmark if active
- Hover: bg=surface-soft
- Click to switch

#### 4. Environment Icons
```
Development: 🔧 - amber/yellow
Staging: 🧪 - blue
Production: 🚀 - green
Custom: ⚙️ - gray
```

#### 5. Manage Link
```
[⚙️ Manage Environments]
```
- Link at bottom of dropdown
- Opens full environment manager
- body-sm typography

### Usage Context
```
In Top Bar:
┌────────────────────────────────────────────────────────────────────────────────┐
│ [Logo]  [Breadcrumb]                    [Env: 🔧 Dev ▼] [Search] [User]        │
└────────────────────────────────────────────────────────────────────────────────┘
```

### Toast/Notification on Switch
```
┌─────────────────────────────────────────────────────────┐
│ ✓ Switched to Development                              │
└─────────────────────────────────────────────────────────┘
```
- Brief toast notification
- Auto-dismiss after 2-3 seconds
- Green checkmark

---

## Output Instructions

Create Figma frames for:
1. **Closed state** (button showing current env)
2. **Open dropdown** with all environments
3. **Hover states** for options
4. **Toast notification** on switch

Proper naming: "ENV-002_QuickSwitch_Closed", "ENV-002_QuickSwitch_Open", etc.
