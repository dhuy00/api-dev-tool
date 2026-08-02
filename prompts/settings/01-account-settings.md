# Figma Make Prompt: Account Settings (SETTINGS-001)

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
| {colors.hairline} | #E5E5E5 | Dividers |
| {colors.surface-soft} | #F5F5F5 | Input backgrounds |
| {colors.accent-magenta} | #E54980 | Danger actions |

### Typography Scale
```
{typography.headline} - 26px, 540 weight - Page title
{typography.body} - 18px, 320 weight - Body text
{typography.body-sm} - 16px, 330 weight - Labels
{typography.button} - 20px, 480 weight - Buttons
{typography.eyebrow} - 18px, 400 weight, uppercase - Section headers
```

### Components
```
button-primary: bg=primary, text=white, rounded.pill
button-secondary: bg=canvas, text=ink, rounded.pill
button-danger: bg=accent-magenta, text=white, rounded.pill
text-input: bg=canvas, border=hairline, rounded.md
toggle: rounded.full track, circle thumb
```

---

## Screen Requirements

### Purpose
Manage personal account settings - profile, security, notifications, API keys.

### Layout
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Account Settings                                                    [Save All Changes]     │
├──────────┬─────────────────────────────────────────────────────────────────────────┤
│          │                                                                              │
│ Profile  │  ┌───────────────────────────────────────────────────────────────────────┐  │
│ ──────── │  │ Profile Information                                                      │  │
│ Security │  │ ───────────────────────────────────────────────────────────────────────│  │
│ Notif. ●│  │                                                                              │  │
│ API Keys │  │  Profile Picture                                                         │  │
│          │  │  ┌─────────┐  [Change] [Remove]                                        │  │
│          │  │  │  👤    │  JPG, PNG or GIF. Max size: 2MB                            │  │
│          │  │  └─────────┘                                                          │  │
│          │  │                                                                         │  │
│          │  │  Full Name                                                              │  │
│          │  │  ┌───────────────────────────────────────────────────────────────┐   │  │
│          │  │  │ John Doe                                                          │   │  │
│          │  │  └───────────────────────────────────────────────────────────────┘   │  │
│          │  │                                                                         │  │
│          │  │  Email Address                                                        │  │
│          │  │  ┌───────────────────────────────────────────────────────────────┐   │  │
│          │  │  │ john.doe@example.com                                            │   │  │
│          │  │  └───────────────────────────────────────────────────────────────┘   │  │
│          │  │  [✓ Verified]                                                        │  │
│          │  │                                                                         │  │
│          │  │  Job Title                                                           │  │
│          │  │  ┌───────────────────────────────────────────────────────────────┐   │  │
│          │  │  │ Senior Developer                                                  │   │  │
│          │  │  └───────────────────────────────────────────────────────────────┘   │  │
│          │  │                                                                         │  │
│          │  │  Timezone                                                            │  │
│          │  │  [America/New_York (UTC-5) ▼]                                        │  │
│          │  │                                                                         │  │
│          │  │  Language                                                           │  │
│          │  │  [English (US) ▼]                                                   │  │
│          │  │                                                                         │  │
│          │  └───────────────────────────────────────────────────────────────────────┘  │
│          │                                                                              │
│          │  ┌───────────────────────────────────────────────────────────────────────┐  │
│          │  │ Notification Preferences                                              │  │
│          │  │ ───────────────────────────────────────────────────────────────────────│  │
│          │  │                                                                              │  │
│          │  │ Email Notifications                                                      │  │
│          │  │ [Toggle] Team member activity                                            │  │
│          │  │ [Toggle] Weekly summary                                                  │  │
│          │  │ [Toggle] Security alerts                                                 │  │
│          │  │                                                                         │  │
│          │  │ Desktop Notifications                                                    │  │
│          │  │ [Toggle] Request completed                                               │  │
│          │  │ [Toggle] Test failures                                                   │  │
│          │  │                                                                         │  │
│          │  └───────────────────────────────────────────────────────────────────────┘  │
│          │                                                                              │
│          │  ┌───────────────────────────────────────────────────────────────────────┐  │
│          │  │ Connected Apps                                                          │  │
│          │  │ ───────────────────────────────────────────────────────────────────────│  │
│          │  │                                                                         │  │
│          │  │ 🔵 VS Code                    Connected  [Disconnect]                  │  │
│          │  │    API Forge extension                                             │  │
│          │  │                                                                         │  │
│          │  │ 🟢 GitHub                      Connected  [Disconnect]                  │  │
│          │  │    OAuth integration                                               │  │
│          │  │                                                                         │  │
│          │  │ [+ Connect more apps]                                               │  │
│          │  │                                                                         │  │
│          │  └───────────────────────────────────────────────────────────────────────┘  │
│          │                                                                              │
│          │  ┌───────────────────────────────────────────────────────────────────────┐  │
│          │  │ Danger Zone                                           🔴             │  │
│          │  │                                                                         │  │
│          │  │ Delete Account                                                        │  │
│          │  │ Once deleted, your account cannot be recovered.                         │  │
│          │  │                                        [Delete Account]               │  │
│          │  │                                                                         │  │
│          │  └───────────────────────────────────────────────────────────────────────┘  │
│          │                                                                              │
└──────────┴─────────────────────────────────────────────────────────────────────────────┘
```

### Components to Implement

#### 1. Navigation (Left)
```
┌─────────────────────────┐
│                         │
│ Profile ●               │
│ ────────                │
│ Security                │
│ Notifications           │
│ API Keys                │
│ Connected Apps          │
│                         │
└─────────────────────────┘
```
- Vertical tabs
- Active: bg=primary/10%, text=primary, left border
- Inactive: text=ink

#### 2. Profile Section
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  Profile Information                                                               │
│  ────────────────────────────────────────────────────────────────────────────────│ │
│                                                                                      │
│  Profile Picture                                                                   │
│  ┌─────────┐  [Change] [Remove]                                                   │
│  │   👤    │  JPG, PNG or GIF. Max size: 2MB                                       │
│  └─────────┘                                                                        │
│                                                                                      │
│  Full Name                                                                         │
│  ┌───────────────────────────────────────────────────────────────┐                  │
│  │ John Doe                                                          │                  │
│  └───────────────────────────────────────────────────────────────┘                  │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Avatar upload area
- Form inputs with labels

#### 3. Avatar/Photo Upload
```
┌─────────┐
│         │
│   👤    │  [Change] [Remove]
│         │
└─────────┘
```
- 80-100px square
- Current photo or placeholder
- Change/Remove buttons below

#### 4. Form Fields
```
┌───────────────────────────────────────────────────────────────┐
│ Label                                                                │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ Input value                                                    │ │
│ └───────────────────────────────────────────────────────────┘ │
│ Helper text                                                        │
└───────────────────────────────────────────────────────────────┘
```
- Labels above inputs
- text-input component
- Helper/description text below

#### 5. Dropdown Selects
```
Timezone
[America/New_York (UTC-5) ▼]
```
- Styled dropdown
- Current value displayed
- Chevron indicator

#### 6. Toggle Switches
```
Email Notifications
[Toggle] Team member activity
[Toggle] Weekly summary
[Toggle] Security alerts
```
- Toggle component
- Label text
- Grouped by category

#### 7. Connected Apps List
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                      │
│  🔵 VS Code                    Connected  [Disconnect]                               │
│     API Forge extension                                                               │
│                                                                                      │
│  🟢 GitHub                      Connected  [Disconnect]                               │
│     OAuth integration                                                               │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- App icon
- App name
- Status: Connected
- Disconnect button

#### 8. Danger Zone
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  Danger Zone                                              🔴                         │
│  ────────────────────────────────────────────────────────────────────────────────│ │
│                                                                                      │
│  Delete Account                                                                    │
│  Once deleted, your account cannot be recovered.                                     │
│                                                     [Delete Account]                  │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```
- Red accent
- Warning icon
- Clear consequences stated
- Danger button

### Tab Structure
```
Profile           - Avatar, name, email, timezone, language
Security          - Password, 2FA, sessions
Notifications     - Email, desktop, in-app toggles
API Keys          - Personal API keys
Connected Apps    - OAuth apps, integrations
Billing           - Subscription, payment methods
Danger Zone       - Delete account
```

---

## Output Instructions

Create Figma frames for:
1. **Profile tab** with form
2. **Security tab**
3. **Notifications tab**
4. **Danger zone** section

Proper naming: "SETTINGS-001_AccountSettings_Profile", "SETTINGS-001_AccountSettings_Security", etc.
