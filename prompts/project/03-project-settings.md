# Figma Make Prompt: Project Settings (PRJ-003)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Form inputs: {rounded.md}
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary actions |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Text |
| {colors.hairline} | #E5E5E5 | Borders |
| {colors.accent-magenta} | #E54980 | Danger actions |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Labels
{typography.button} - 20px, 480 weight - Buttons
{typography.eyebrow} - 18px, 400 weight, uppercase - Section headers
```

---

## Screen Requirements

### Purpose
Manage project settings - name, description, icon, collaboration settings, and danger zone.

### Layout
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Top Bar                                                                                 │
├──────────┬─────────────────────────────────────────────────────────────────────────────┤
│          │                                                                              │
│ Settings │  ┌───────────────────────────────────────────────────────────────────────┐  │
│          │  │ Auth Project Settings                                        [Save] │  │
│ General ●│  └───────────────────────────────────────────────────────────────────────┘  │
│ ──────── │                                                                              │
│ Members  │  ┌───────────────────────────────────────────────────────────────────────┐  │
│ Variables│  │ General                                                               │  │
│          │  │                                                                       │  │
│          │  │  Project Icon                                                         │  │
│          │  │  ┌─────────┐  [Change] [Remove]                                       │  │
│          │  │  │   🔐    │  Recommended: 128x128px, PNG or SVG                       │  │
│          │  │  └─────────┘                                                          │  │
│          │  │                                                                       │  │
│          │  │  Project Name                                                        │  │
│          │  │  ┌───────────────────────────────────────────────────────────────┐   │  │
│          │  │  │ Auth                                                            │   │  │
│          │  │  └───────────────────────────────────────────────────────────────┘   │  │
│          │  │                                                                       │  │
│          │  │  Description                                                         │  │
│          │  │  ┌───────────────────────────────────────────────────────────────┐   │  │
│          │  │  │ API authentication and user management endpoints...           │   │  │
│          │  │  └───────────────────────────────────────────────────────────────┘   │  │
│          │  │                                                                       │  │
│          │  │  ─────────────────────────────────────────────────────────────────│  │
│          │  │                                                                       │  │
│          │  │  Collaboration                                                      │  │
│          │  │  [Toggle] Allow team members to edit this project                   │  │
│          │  │                                                                       │  │
│          │  │  ─────────────────────────────────────────────────────────────────│  │
│          │  │                                                                       │  │
│          │  │  ┌───────────────────────────────────────────────────────────────┐   │  │
│          │  │  │ Members with access (3)                      [+ Invite]       │   │  │
│          │  │  ├───────────────────────────────────────────────────────────────┤   │  │
│          │  │  │ 👤 John Doe (Owner)                                    [•••] │   │  │
│          │  │  │ 👤 Jane Smith (Editor)                                  [•••] │   │  │
│          │  │  │ 👤 Bob Wilson (Viewer)                                   [•••] │   │  │
│          │  │  └───────────────────────────────────────────────────────────────┘   │  │
│          │  │                                                                       │  │
│          │  └───────────────────────────────────────────────────────────────────────┘  │
│          │                                                                              │
│          │  ┌───────────────────────────────────────────────────────────────────────┐  │
│          │  │ Danger Zone                                           🔴             │  │
│          │  │                                                                       │  │
│          │  │ Archive Project                                                       │  │
│          │  │ Archived projects are read-only but can be restored                     │  │
│          │  │                                        [Archive]                        │  │
│          │  │                                                                       │  │
│          │  │ Delete Project                                                        │  │
│          │  │ This will permanently delete the project and all its requests.           │  │
│          │  │                                        [Delete]                        │  │
│          │  └───────────────────────────────────────────────────────────────────────┘  │
│          │                                                                              │
└──────────┴─────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Settings Navigation (Left)
- General (active)
- Members
- Variables
- Similar pattern to workspace settings

#### 2. Project Header
- Title: "Project Name Settings"
- Save button: button-primary

#### 3. Icon Upload
```
┌─────────┐
│   🔐    │  [Change] [Remove]
└─────────┘
```
- 80px square
- Project-specific icon

#### 4. Form Fields
- Project Name: text-input
- Description: text-area
- Labels above inputs

#### 5. Collaboration Toggle
```
[Toggle] Allow team members to edit this project
```
- Standard toggle switch design

#### 6. Members List (Compact)
- Avatar, name, role
- Actions dropdown
- Smaller than workspace members list

#### 7. Danger Zone
- Archive option (less severe)
- Delete option (most severe)
- Clear warning messaging

---

## Output Instructions

Create Figma frames for:
1. **General settings tab**
2. **Members tab**
3. **Variables tab**
4. **Danger zone section**

Proper naming: "PRJ-003_ProjectSettings_General", etc.
