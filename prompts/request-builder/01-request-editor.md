# Figma Make Prompt: Request Editor (REQ-001)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 450, 480, 540
- 8px base spacing unit
- Code editors: monospace font (JetBrains Mono / SF Mono)
- Split-pane layout for request/response
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary button, active tabs |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Dividers, borders |
| {colors.surface-soft} | #F5F5F5 | Panel backgrounds |
| HTTP Methods | GET=#34A853, POST=#F5A623, PUT=#3B82F6, DEL=#EF4444, PATCH=#8B5CF6 | Method badges |

### Typography Scale
```
{typography.body-sm} - 16px, 330 weight - UI labels, table cells
{typography.button} - 20px, 480 weight - Buttons
{typography.eyebrow} - 18px, 400 weight, uppercase - Tabs
Code: JetBrains Mono, 14px - Request/response body
```

### Components
```
button-primary: bg=primary, text=white, rounded.pill
button-secondary: bg=canvas, text=ink, rounded.pill
tab-bar: underline or pill style
text-input: bg=canvas, border=hairline, rounded.md
code-editor: bg=surface-soft, monospace font
```

---

## Screen Requirements

### Purpose
Compose and execute HTTP requests, view response, and manage request components (params, headers, body, auth).

### Layout
```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [←] POST /auth/login                                              [Save ▼] [Environment: Development] [Send ▶]           │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                                               │
│  ┌──────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │          │                                                                                                               │  │
│  │ Params   │  ┌──────┐ ┌────────────────────────────────────────────────────────────────────────┐                        │  │
│  │ Auth     │  │ POST │ │ https://api.example.com/auth/login                                    │                        │  │
│  │ Headers  │  └──────┘ └────────────────────────────────────────────────────────────────────────┘                        │  │
│  │ Body     │                                                                                                               │  │
│  │           │  ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐  │  │
│  │           │  │ [Params] [Headers] [Body] [Auth] [Pre-request] [Tests]                                                │  │  │
│  │           │  └──────────────────────────────────────────────────────────────────────────────────────────────────┘  │  │
│  │           │                                                                                                               │  │
│  │           │  ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐  │  │
│  │           │  │                                                                                                          │  │  │
│  │           │  │  Content-Type: JSON ▼    [Beautify] [Format] [Clear]                                                   │  │  │
│  │           │  │                                                                                                          │  │  │
│  │           │  │  ┌──────────────────────────────────────────────────────────────────────────────────────────────┐  │  │  │
│  │           │  │  │ {                                                                                                   │  │  │  │
│  │           │  │  │   "email": "user@example.com",                                                                     │  │  │  │
│  │           │  │  │   "password": "securePassword123",                                                                 │  │  │  │
│  │           │  │  │   "rememberMe": true                                                                               │  │  │  │
│  │           │  │  │ }                                                                                                   │  │  │  │
│  │           │  │  └──────────────────────────────────────────────────────────────────────────────────────────────┘  │  │  │
│  │           │  │                                                                                                          │  │  │
│  │           │  │  [Generate Data 💡]  [Bulk Edit]                                                                       │  │  │
│  │           │  │                                                                                                          │  │  │
│  │           │  └──────────────────────────────────────────────────────────────────────────────────────────────────┘  │  │
│  │           │                                                                                                               │  │
│  └──────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ Response                                             Status: 200 OK ✓    Time: 245ms    Size: 1.2 KB    [Save] [Copy] │  │
│  ├───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤  │
│  │                                                                                                                       │  │
│  │  [Body ▼] [Headers] [Timeline] [Cookies] [Test Results]                                                              │  │
│  │                                                                                                                       │  │
│  │  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────┐  │  │
│  │  │                                                                                                                 │  │  │
│  │  │  JSON ▼  [Beautify] [Raw] [Preview] [Copy]                                                                     │  │  │
│  │  │                                                                                                                 │  │  │
│  │  │  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐  │  │  │
│  │  │  │ {                                                                                                         │  │  │  │
│  │  │  │   "success": true,                                                                                         │  │  │  │
│  │  │  │   "data": {                                                                                                │  │  │  │
│  │  │  │     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",                                                     │  │  │  │
│  │  │  │     "expiresIn": 3600,                                                                                       │  │  │  │
│  │  │  │     "user": {                                                                                               │  │  │  │
│  │  │  │       "id": "usr_abc123",                                                                                  │  │  │  │
│  │  │  │       "email": "user@example.com"                                                                           │  │  │  │
│  │  │  │     }                                                                                                       │  │  │  │
│  │  │  │   }                                                                                                         │  │  │  │
│  │  │  │ }                                                                                                           │  │  │  │
│  │  │  └─────────────────────────────────────────────────────────────────────────────────────────────────────┘  │  │  │
│  │  │                                                                                                                 │  │  │
│  │  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Header Bar
- Back button: [←]
- Request name: editable title
- Save dropdown: [Save ▼]
- Environment selector
- Send button: [Send ▶] (primary)

#### 2. URL Bar
```
┌──────┐ ┌────────────────────────────────────────────────────────────────────────────────────┐
│ POST │ │ https://{{baseUrl}}/auth/login                                                      │
└──────┘ └────────────────────────────────────────────────────────────────────────────────────┘
```
- Method dropdown: GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD
- URL input: text-input, supports variables {{var}}
- Variable highlighting in URL

#### 3. Sidebar Tabs
```
┌──────────┐
│ Params   │
│ Auth     │
│ Headers  │
│ Body     │
└──────────┘
```
- Vertical tabs
- Active: left border, bg highlight
- Badge for count (e.g., Headers (3))

#### 4. Request Tabs
```
[Params] [Headers] [Body] [Auth] [Pre-request] [Tests]
```
- Horizontal tabs
- Active: underline or pill bg
- Content area below

#### 5. Body Editor
```
┌──────────────────────────────────────────────────────────────┐
│ Content-Type: JSON ▼    [Beautify] [Format] [Clear]        │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ {                                                           │ │
│ │   "email": "user@example.com",                            │ │
│ │   "password": "securePassword123",                        │ │
│ │   "rememberMe": true                                     │ │
│ │ }                                                          │ │
│ └──────────────────────────────────────────────────────────┘ │
│                                                              │
│ [Generate Data 💡]  [Bulk Edit]                              │
└──────────────────────────────────────────────────────────┘
```
- Code editor: monospace font, syntax highlighting
- Content-type selector dropdown
- Toolbar: Beautify, Format, Clear, Generate Data
- Additional actions

#### 6. Response Panel
```
┌──────────────────────────────────────────────────────────────┐
│ Response        Status: 200 OK ✓    Time: 245ms    Size: 1.2KB│
├──────────────────────────────────────────────────────────────┤
│ [Body ▼] [Headers] [Timeline] [Cookies] [Test Results]       │
└──────────────────────────────────────────────────────────────┘
```
- Status badge: 200 OK (green), 4xx (yellow), 5xx (red)
- Metrics: Time, Size
- Response tabs

#### 7. Response Body
```
┌──────────────────────────────────────────────────────────────┐
│ JSON ▼  [Beautify] [Raw] [Preview] [Copy]                   │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ {                                                         │ │
│ │   "success": true,                                        │ │
│ │   "data": { ... }                                         │ │
│ │ }                                                         │ │
│ └──────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```
- Syntax-highlighted response
- View modes: Beautify, Raw, Preview
- Copy button

#### 8. Key-Value Editors (Params, Headers)
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ Key              Value                  Description                     [Delete]     │
├──────────────────────────────────────────────────────────────────────────────────────┤
│ Content-Type    application/json       Request content type              [×]         │
│ Authorization   Bearer {{token}}      Auth token                         [×]         │
├──────────────────────────────────────────────────────────────────────────────────────┤
│ [+ Add]                                                                              │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Table with Key, Value, Description columns
- Checkbox for enable/disable
- Delete button
- Bulk edit toggle

### Code Editor Styling
```
Background: surface-soft (#F7F7F7)
Font: JetBrains Mono or SF Mono, 14px
Line height: 1.5
Syntax colors: strings (green), numbers (blue), keys (red), punctuation (gray)
Gutter: slightly darker background with line numbers
```

---

## Output Instructions

Create Figma frames for:
1. **Request editor** with GET request, empty response
2. **Request editor** with POST request, response loaded
3. **Body tab** with different content types
4. **Headers/Params** key-value editor
5. **Response** with different view modes

Proper naming: "REQ-001_RequestEditor_Default", "REQ-001_RequestEditor_WithResponse", etc.
