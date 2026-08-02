# Figma Make Prompt: Documentation Generator (DOC-001)

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
| {colors.surface-soft} | #F5F5F5 | Code backgrounds |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Labels, code
{typography.button} - 20px, 480 weight - Buttons
```

---

## Screen Requirements

### Purpose
Generate and manage API documentation from requests and schemas.

### Layout
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Documentation Generator                              [Preview] [Export ▼] [Generate]        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Select Content                                                                 │ │
│  │  ──────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                                  │ │
│  │  [✓] Select All                                                                 │ │
│  │                                                                                  │ │
│  │  Authentication API                                                             │ │
│  │  ├─[✓] POST /auth/login                                                        │ │
│  │  ├─[✓] POST /auth/register                                                    │ │
│  │  └─[✓] POST /auth/logout                                                       │ │
│  │                                                                                  │ │
│  │  User Management API                                                            │ │
│  │  ├─[✓] GET /users                                                             │ │
│  │  ├─[ ] GET /users/:id                                                         │ │
│  │  └─[✓] POST /users                                                            │ │
│  │                                                                                  │ │
│  └──────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                        │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐ │
│  │  Documentation Options                                                         │ │
│  │  ──────────────────────────────────────────────────────────────────────────────│ │
│  │                                                                                  │ │
│  │  Format:                    [OpenAPI 3.0 ▼]                                      │ │
│  │  Include:                   [✓] Request examples                                │ │
│  │                              [✓] Response schemas                               │ │
│  │                              [✓] Error codes                                    │ │
│  │                              [ ] Authentication details                        │ │
│  │                              [✓] Rate limits                                    │ │
│  │                                                                                  │ │
│  │  Theme:                    [Dark ▼] [Light ▼]                                   │ │
│  │                                                                                  │ │
│  └──────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Layout (Generated Documentation Preview)
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Documentation Preview                                    [Edit] [Export] [Copy Link]       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  ┌────────────────────────────────────────────────────────────────────────────────┐  │
│  │                                                                                 │  │
│  │  Authentication API                                                             │  │
│  │  ───────────────────────────────────────────────────────────────────────────│  │  │
│  │                                                                                 │  │
│  │  POST /auth/login                                                              │  │
│  │  ───────────────────────────────────────────────────────────────────────────│  │  │
│  │                                                                                 │  │
│  │  Authenticate a user and receive an access token.                              │  │
│  │                                                                                 │  │
│  │  Request                                                                 /auth │  │
│  │  ───────────────────────────────────────────────────────────────────────────│  │  │
│  │                                                                                 │  │
│  │  Headers                                                                    │  │  │
│  │  ┌──────────────────────────────────────────────────────────────────────┐  │  │  │
│  │  │ Content-Type: application/json                                         │  │  │  │
│  │  └──────────────────────────────────────────────────────────────────────┘  │  │  │
│  │                                                                                 │  │  │
│  │  Body                                                                         │  │  │
│  │  ┌──────────────────────────────────────────────────────────────────────┐  │  │  │
│  │  │ {                                                                    │  │  │  │
│  │  │   "email": "user@example.com",                                       │  │  │  │
│  │  │   "password": "string"                                               │  │  │  │
│  │  │ }                                                                    │  │  │  │
│  │  └──────────────────────────────────────────────────────────────────────┘  │  │  │
│  │                                                                                 │  │  │
│  │  Response (200)                                                              │  │  │
│  │  ┌──────────────────────────────────────────────────────────────────────┐  │  │  │
│  │  │ {                                                                    │  │  │  │
│  │  │   "success": true,                                                   │  │  │  │
│  │  │   "data": {                                                          │  │  │  │
│  │  │     "token": "eyJ...",                                              │  │  │  │
│  │  │     "expiresIn": 3600                                               │  │  │  │
│  │  │   }                                                                  │  │  │  │
│  │  │ }                                                                    │  │  │  │
│  │  └──────────────────────────────────────────────────────────────────────┘  │  │  │
│  │                                                                                 │  │  │
│  └────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Page Header
- Title: "Documentation Generator"
- Preview button
- Export dropdown: JSON, YAML, Markdown, HTML
- Generate button: button-primary

#### 2. Content Selection Panel
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  Select Content                                                                    │
│  ──────────────────────────────────────────────────────────────────────────────│ │
│                                                                                      │
│  [✓] Select All                                                                   │
│                                                                                      │
│  📁 Authentication API                                                              │
│  ├─[✓] POST /auth/login                                                           │
│  ├─[✓] POST /auth/register                                                       │
│  └─[✓] POST /auth/logout                                                          │
│                                                                                      │
│  📁 User Management API                                                             │
│  ├─[✓] GET /users                                                                │
│  ├─[ ] GET /users/:id                                                            │
│  └─[✓] POST /users                                                               │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Tree structure with checkboxes
- Endpoint folders
- Individual endpoints with method badges
- Select all / deselect all

#### 3. Options Panel
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  Documentation Options                                                              │
│  ──────────────────────────────────────────────────────────────────────────────│ │
│                                                                                      │
│  Format:                    [OpenAPI 3.0 ▼]                                         │
│                                                                                      │
│  Include:                   [✓] Request examples                                    │
│                              [✓] Response schemas                                   │
│                              [✓] Error codes                                        │
│                              [ ] Authentication details                            │
│                              [✓] Rate limits                                        │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Dropdown for format
- Checkboxes for include options
- Theme selector

#### 4. Format Options
```
OpenAPI 3.0
Swagger 2.0
AsyncAPI
RAML
Markdown
HTML
```

#### 5. Documentation Preview Card
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                      │
│  Authentication API                                                                  │
│  ────────────────────────────────────────────────────────────────────────────────│ │
│                                                                                      │
│  POST /auth/login                                                                   │
│  ────────────────────────────────────────────────────────────────────────────────│ │
│                                                                                      │
│  Description text...                                                                 │
│                                                                                      │
│  Request / Response sections...                                                     │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Document styling
- Method badge
- Path
- Sections: Description, Request, Response, Examples
- Code blocks with syntax highlighting

#### 6. Export Options Dropdown
```
┌─────────────────────┐
│ Export as           │
│ ────────────────────│
│ OpenAPI JSON        │
│ OpenAPI YAML        │
│ Markdown            │
│ HTML                │
│ Postman Collection │
└─────────────────────┘
```

---

## Output Instructions

Create Figma frames for:
1. **Generator form** with selection
2. **Preview** of generated docs
3. **Export options**
4. **Individual endpoint doc** detail

Proper naming: "DOC-001_DocGenerator_Form", "DOC-001_DocGenerator_Preview", etc.
