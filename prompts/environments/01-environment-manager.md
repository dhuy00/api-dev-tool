# Figma Make Prompt: Environment Manager (ENV-001)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Key-value editor for variables
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers |
| {colors.surface-soft} | #F5F5F5 | Hover, backgrounds |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Labels, cells
{typography.button} - 20px, 480 weight - Buttons
```

### Components
```
button-primary: bg=primary, text=white, rounded.pill
button-secondary: bg=canvas, text=ink, rounded.pill
card: bg=canvas, border=hairline, rounded.lg
```

---

## Screen Requirements

### Purpose
Manage environments (Development, Staging, Production) with their respective variables.

### Layout
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Environments                                             [+ New Environment]           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐ │
│  │                                                                                  │ │
│  │  [Development] [Staging] [Production]                                           │ │
│  │                                                                                  │ │
│  └──────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                        │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐ │
│  │  🔧 Development Environment                    [Edit] [Duplicate] [Delete]       │ │
│  │     ───────────────────────────────────────────────────────────────────────────  │ │
│  │                                                                                  │ │
│  │  ┌────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ Variable        Initial Value              Current Value        [Delete]  │ │ │
│  │  ├────────────────────────────────────────────────────────────────────────────┤ │ │
│  │  │ baseUrl         https://dev.api.example.com  https://dev.api...    [×]     │ │ │
│  │  │ apiKey          dev-key-xxx                  ••••••••••         [×]     │ │ │
│  │  │ timeout         5000                         5000                 [×]     │ │ │
│  │  │ enableLogging   true                         true                 [×]     │ │ │
│  │  ├────────────────────────────────────────────────────────────────────────────┤ │ │
│  │  │ [+ Add Variable]                                                           │ │ │
│  │  └────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                  │ │
│  │  ─────────────────────────────────────────────────────────────────────────────│ │ │
│  │                                                                                  │ │
│  │  GLOBAL VARIABLES (inherited by all environments)                              │ │
│  │  ┌────────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │ appName         API Forge                    API Forge             [×]     │ │ │
│  │  │ appVersion      1.0.0                        1.0.0                [×]     │ │ │
│  │  ├────────────────────────────────────────────────────────────────────────────┤ │ │
│  │  │ [+ Add Global Variable]                                                   │ │ │
│  │  └────────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                                  │ │
│  └──────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Page Header
- Title: "Environments"
- New Environment button: button-primary

#### 2. Environment Tabs
```
┌────────────────────────────────────────────────────┐
│ [Development] [Staging] [Production] [+ Add]       │
└────────────────────────────────────────────────────┘
```
- Tab pills: rounded.pill style
- Active: bg=primary, text=white
- Inactive: bg=canvas, border=hairline
- "+ Add" creates new environment

#### 3. Environment Card
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  🔧 Development Environment                         [Edit] [Duplicate] [Delete]       │
│  ───────────────────────────────────────────────────────────────────────────────────│
│                                                                                      │
│  Variable        Initial Value              Current Value        [Delete]           │
│  ───────────────────────────────────────────────────────────────────────────────────│
│                                                                                      │
│  [+ Add Variable]                                                                    │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Header with icon, name, actions
- Variable table below
- Edit mode toggle

#### 4. Environment Icon/Type
```
Development: 🔧 (wrench) - yellow/amber
Staging: 🧪 (flask) - blue
Production: 🚀 (rocket) - green/red
Custom: ⚙️ (gear) - gray
```

#### 5. Variable Table
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ Variable        Initial Value              Current Value        [Delete]           │
├──────────────────────────────────────────────────────────────────────────────────────┤
│ baseUrl         https://dev.api.example.com  https://dev.api...    [×]             │
│ apiKey          dev-key-xxx                  ••••••••••             [×]             │
│ timeout         5000                         5000                 [×]             │
│ enableLogging   true                         true                 [×]             │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Columns: Variable name, Initial value, Current value, Actions
- Row hover: bg=surface-soft
- Password masking option
- Variable name: {{variable}} syntax highlighting

#### 6. Variable Editor Row
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ Key: [________________]  Initial: [________________]  Current: [________________]  │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Inline editing
- Toggle for sensitive values
- Delete button

#### 7. Add Variable Button
```
[+ Add Variable]
```
- Text button
- Adds new row to table

#### 8. Global Variables Section
- Separate from environment-specific
- Inherited by all environments
- Can be overridden in specific environments

#### 9. Create/Edit Environment Modal
```
┌─────────────────────────────────────────────────────────────┐
│ Create Environment                                          │
│ ────────────────────────────────────────────────────────────│
│                                                              │
│ Environment Name                                             │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │                                                             │  │
│ └─────────────────────────────────────────────────────────┘  │
│                                                              │
│ Environment Type                                             │
│ ○ Development                                                │
│ ○ Staging                                                    │
│ ○ Production                                                 │
│ ○ Custom                                                     │
│                                                              │
│ Color                                                         │
│ [●] [○] [○] [○] [○]                                         │
│                                                              │
│ ┌─────────────────────────────────────────────────────────┐  │
│ │ Cancel                            [Create Environment] │  │
│ └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Output Instructions

Create Figma frames for:
1. **Environment list** with tabs
2. **Environment detail** with variables
3. **Edit mode** with inline editing
4. **Create environment modal**

Proper naming: "ENV-001_EnvironmentManager_List", "ENV-001_EnvironmentManager_Detail", etc.
