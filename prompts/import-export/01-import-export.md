# Figma Make Prompt: Import/Export (IMP-001)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers |
| {colors.surface-soft} | #F5F5F5 | Drop zones |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Labels
{typography.button} - 20px, 480 weight - Buttons
```

---

## Screen Requirements

### Purpose
Import API definitions from various formats, export projects and collections.

### Layout
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Import & Export                                                                      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  ┌────────────────────────────────┬───────────────────────────────────────────────────┐  │
│  │                                │                                                   │  │
│  │  IMPORT                        │  EXPORT                                           │  │
│  │  ────────                      │  ──────                                           │  │
│  │                                │                                                   │  │
│  │  ┌──────────────────────────┐ │  ┌─────────────────────────────────────────────┐│  │
│  │  │                          │ │  │  What to Export                              ││  │
│  │  │     ┌────────────────┐   │ │  │                                             ││  │
│  │  │     │   📁 Upload    │   │ │  │  ○ Current Project                           ││  │
│  │  │     │   File Here    │   │ │  │  ○ Current Workspace                         ││  │
│  │  │     │   or drag &    │   │ │  │  ● Selected Collections                      ││  │
│  │  │     │   drop         │   │ │  │                                             ││  │
│  │  │     └────────────────┘   │ │  │  ┌─────────────────────────────────────────┐ ││  │
│  │  │                          │ │  │  │  [✓] Authentication API                   │ ││  │
│  │  └──────────────────────────┘ │  │  │  [✓] User Management API                │ ││  │
│  │                                │ │  │  [ ] Orders API                          │ ││  │
│  │  Supported formats:           │ │  │  └─────────────────────────────────────────┘ ││  │
│  │  • OpenAPI / Swagger         │ │  │                                             ││  │
│  │  • Postman Collection         │ │  │  Export Format                             ││  │
│  │  • HAR                        │ │  │  [OpenAPI JSON ▼]                          ││  │
│  │  • Insomnia                   │ │  │                                             ││  │
│  │                                │ │  │  [Export]                                  ││  │
│  │                                │ │  └─────────────────────────────────────────────┘│  │
│  └────────────────────────────────┴───────────────────────────────────────────────────┘  │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Page Header
- Title: "Import & Export"
- Tabs or two-column layout

#### 2. Import Section
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                      │
│  IMPORT                                                                              │
│  ────────────────────────────────────────────────────────────────────────────────│ │
│                                                                                      │
│  ┌──────────────────────────────────────────────────────────────────────────────┐  │
│  │                                                                                  │  │
│  │                        ┌────────────────────┐                                   │  │
│  │                        │                    │                                    │  │
│  │                        │     📁            │                                    │  │
│  │                        │   Upload File     │                                    │  │
│  │                        │   or drag & drop  │                                    │  │
│  │                        │                    │                                    │  │
│  │                        └────────────────────┘                                   │  │
│  │                                                                                  │  │
│  │  ─── or paste your API definition below ───                                     │  │
│  │                                                                                  │  │
│  └──────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                      │
│  Supported formats:                                                                  │
│  • OpenAPI / Swagger (JSON, YAML)                                                    │
│  • Postman Collection (JSON)                                                         │
│  • HAR (HTTP Archive)                                                                │
│  • Insomnia Export                                                                    │
│  • API Blueprint                                                                      │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

#### 3. Drop Zone
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                      │
│                        ┌────────────────────┐                                        │
│                        │                    │                                        │
│                        │       📁           │                                        │
│                        │   Upload File      │                                        │
│                        │   or drag & drop   │                                        │
│                        │                    │                                        │
│                        └────────────────────┘                                        │
│                                                                                      │
│  ─── or paste your API definition below ───                                          │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Dashed border
- Upload icon
- Text instruction
- Hover: border solid, bg change
- Active/dragging: highlight border

#### 4. Format List
```
Supported formats:
• OpenAPI / Swagger (JSON, YAML)
• Postman Collection (JSON)
• HAR (HTTP Archive)
• Insomnia Export
• API Blueprint
```
- Body-sm typography
- Icon or bullet per format
- Optional: links to learn more

#### 5. Paste Option
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  Paste your API definition here...                                                   │
│  ────────────────────────────────────────────────────────────────────────────────│ │
│                                                                                      │
│                                                                                      │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Text area
- Syntax highlighting optional

#### 6. Export Section
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                      │
│  EXPORT                                                                              │
│  ────────────────────────────────────────────────────────────────────────────────│ │
│                                                                                      │
│  What to Export                                                                      │
│  ────────────────────────────────────────────────────────────────────────────────│ │
│  ○ Current Project                                                                   │
│  ○ Current Workspace                                                                 │
│  ● Selected Collections                                                              │
│                                                                                      │
│  ┌─────────────────────────────────────────────┐                                    │
│  │ [✓] Authentication API                        │                                    │
│  │ [✓] User Management API                      │                                    │
│  │ [ ] Orders API                               │                                    │
│  └─────────────────────────────────────────────┘                                    │
│                                                                                      │
│  Export Format                                                                       │
│  [OpenAPI JSON ▼]                                                                    │
│                                                                                      │
│  [Export]                                                                            │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

#### 7. Export Format Dropdown
```
OpenAPI JSON
OpenAPI YAML
Swagger JSON
Swagger YAML
Postman Collection
HAR
Insomnia
Markdown
```

#### 8. Import Preview Modal
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  Import Preview                                                                       │
│  ────────────────────────────────────────────────────────────────────────────────│ │
│                                                                                      │
│  Found 15 requests in 3 collections:                                                 │
│                                                                                      │
│  📁 Authentication API                                                                 │
│  ├─ POST /auth/login                                                                │
│  ├─ POST /auth/register                                                             │
│  └─ POST /auth/logout                                                               │
│                                                                                      │
│  📁 User Management API                                                              │
│  ├─ GET /users                                                                      │
│  └─ POST /users                                                                     │
│                                                                                      │
│  Import to: [Current Workspace ▼]                                                    │
│                                                                                      │
│  [Cancel]  [Import]                                                                  │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Shows detected content
- Collection/folder preview
- Import destination selector
- Import/Cancel buttons

#### 9. Progress Indicator
```
Importing...  ████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  75%
```
- Progress bar
- Percentage
- File being processed

---

## Output Instructions

Create Figma frames for:
1. **Import/Export tabs** or two-column
2. **Drop zone** states
3. **Import preview** modal
4. **Export options** form

Proper naming: "IMP-001_ImportExport_Default", "IMP-001_ImportExport_Preview", etc.
