# Figma Make Prompt: Empty State (SHARED-001)

---

## Design System Reference

### Core Principles
```
- Monochrome system: {colors.primary} (black) and {colors.canvas} (white)
- Pill is the only button shape: {rounded.pill}
- figmaSans variable typeface at weights 320, 330, 340, 480
- 8px base spacing unit
- Empty states are opportunities for friendly, helpful messaging
```

### Colors to Use
| Token | Hex | Usage |
|-------|-----|-------|
| {colors.primary} | #000000 | Primary button, text |
| {colors.canvas} | #FFFFFF | Background |
| {colors.ink} | #000000 | Primary text |
| {colors.surface-soft} | #F5F5F5 | Illustration backgrounds |
| {colors.hairline} | #E5E5E5 | Dashed borders, dividers |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Empty state title
{typography.body} - 18px, 320 weight - Description text
{typography.body-sm} - 16px, 330 weight - Helper text
{typography.button} - 20px, 480 weight - CTA button
```

### Components
```
button-primary: bg=primary, text=white, rounded.pill
button-secondary: bg=canvas, text=ink, rounded.pill
illustration: simple, line-art style, 120-200px
```

---

## Empty State Variants

### Variant 1: No Projects
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                                                         │
│         ┌───────────────────────────────┐               │
│         │                               │               │
│         │         📁 (folder icon)      │               │
│         │                               │               │
│         └───────────────────────────────┘               │
│                                                         │
│                   No projects yet                        │
│                                                         │
│         Create your first project to start             │
│         building and testing APIs.                     │
│                                                         │
│              [+ Create Project]                        │
│                                                         │
│         or import from: Postman · Swagger · OpenAPI     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Variant 2: No Requests
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                                                         │
│         ┌───────────────────────────────┐               │
│         │                               │               │
│         │        📝 (document icon)     │               │
│         │                               │               │
│         └───────────────────────────────┘               │
│                                                         │
│                 No requests yet                         │
│                                                         │
│          Add your first API request to                 │
│          start testing.                                │
│                                                         │
│              [+ New Request]                            │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Variant 3: No Results (Search)
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                                                         │
│         ┌───────────────────────────────┐               │
│         │                               │               │
│         │         🔍 (search icon)       │               │
│         │                               │               │
│         └───────────────────────────────┘               │
│                                                         │
│               No results found                          │
│                                                         │
│          Try adjusting your search terms               │
│          or browse the categories below.               │
│                                                         │
│          Suggestions: workspaces, requests, collections │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Variant 4: No Environments
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                                                         │
│         ┌───────────────────────────────┐               │
│         │                               │               │
│         │        ⚙️ (gear icon)          │               │
│         │                               │               │
│         └───────────────────────────────┘               │
│                                                         │
│               No environments                           │
│                                                         │
│        Environments help you manage different          │
│        API configurations for development,             │
│        staging, and production.                        │
│                                                         │
│              [+ Create Environment]                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Variant 5: No Team Members
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                                                         │
│         ┌───────────────────────────────┐               │
│         │                               │               │
│         │          👥 (people icon)     │               │
│         │                               │               │
│         └───────────────────────────────┘               │
│                                                         │
│               No team members                          │
│                                                         │
│         Invite team members to collaborate             │
│         on this workspace.                             │
│                                                         │
│              [+ Invite Members]                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Illustration Container
- Size: 120-200px
- Background: surface-soft (subtle off-white)
- Border-radius: rounded.lg (24px)
- Icon/illustration centered
- Margin-bottom: spacing.lg (24px)

#### 2. Icon/Illustration
- Use simple, friendly line-art icons
- Size: 64-80px
- Color: ink (black) or surface-soft for secondary elements
- Examples:
  - 📁 Folder for projects
  - 📝 Document for requests
  - 🔍 Magnifying glass for search
  - ⚙️ Gear for settings/environments
  - 👥 People for team/members

#### 3. Title
- Typography: headline (26px, 540 weight)
- Text-align: center
- Color: ink
- Margin-bottom: spacing.sm (12px)
- Examples: "No projects yet", "No requests yet"

#### 4. Description Text
- Typography: body (18px, 320 weight)
- Text-align: center
- Color: ink
- Max-width: 360px (centered)
- Margin-bottom: spacing.lg (24px)
- Explain what this section does and why it's useful

#### 5. Primary CTA Button
- Component: button-primary
- Text varies by context:
  - "Create Project"
  - "New Request"
  - "Create Environment"
  - "Invite Members"
- Centered
- Margin-bottom: spacing.md (16px)

#### 6. Secondary Options (optional)
- Text: "or [action]" or "Suggestions: ..."
- body-sm typography
- Links to alternative actions
- Examples:
  - "or import from: Postman · Swagger · OpenAPI"
  - "Suggestions: workspaces, requests, collections"

### Design Guidelines for Empty States

```
✓ Use friendly, non-threatening illustrations
✓ Keep the tone helpful, not punitive
✓ Clear call-to-action button
✓ Brief, scannable description
✓ Consider offering alternative paths (import, etc.)

✗ Don't use error-red colors
✗ Don't use sad/confused faces
✗ Don't overwhelm with too much text
```

### Responsive Behavior
```
Desktop: Centered content, max-width 400px
Mobile: Full-width, smaller illustration (80-100px)
```

---

## Output Instructions

Create Figma frames for:
1. **No Projects** variant
2. **No Requests** variant
3. **No Results (Search)** variant
4. **No Environments** variant
5. **No Team Members** variant

Include illustration component that can be reused across variants by swapping the icon.

Proper naming: "SHARED-001_EmptyState_NoProjects", "SHARED-001_EmptyState_NoRequests", etc.
