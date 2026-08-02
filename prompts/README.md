# Figma Make Prompts - API Forge

Collection of design prompts for Figma Make, based on the design system in `design/design.md`.

## Usage

Each prompt file contains:
1. **Design System Reference** - Tokens, colors, typography from `design.md`
2. **Screen Requirements** - Layout, components, states from screen specs
3. **Output Instructions** - Frame naming conventions

## Prompt Files

### Authentication (`/authentication`)
| File | Screen | Description |
|------|--------|-------------|
| `01-login.md` | AUTH-001 | Login with email/password and OAuth |
| `02-register.md` | AUTH-002 | Registration with password strength |
| `03-forgot-password.md` | AUTH-003 | Password reset request and form |
| `04-verify-email.md` | AUTH-004 | Email verification confirmation |
| `05-change-password.md` | AUTH-005 | Change password for logged-in users |

### Shared (`/shared`)
| File | Screen | Description |
|------|--------|-------------|
| `01-empty-state.md` | SHARED-001 | Empty state templates |
| `02-navigation-layout.md` | SHARED-002 | App shell with sidebar |

### Workspace (`/workspace`)
| File | Screen | Description |
|------|--------|-------------|
| `01-workspace-list.md` | WS-001 | Workspace listing and creation |
| `02-workspace-settings.md` | WS-002 | Workspace configuration |
| `03-workspace-members.md` | WS-003 | Member management |
| `04-invite-member.md` | WS-004 | Invite modal |

### Project (`/project`)
| File | Screen | Description |
|------|--------|-------------|
| `01-project-list.md` | PRJ-001 | Project listing |
| `02-project-view.md` | PRJ-002 | Project with request tree |
| `03-project-settings.md` | PRJ-003 | Project settings |

### Request Builder (`/request-builder`)
| File | Screen | Description |
|------|--------|-------------|
| `01-request-editor.md` | REQ-001 | HTTP request editor |
| `02-request-history.md` | REQ-002 | Request history |

### Collections (`/collections`)
| File | Screen | Description |
|------|--------|-------------|
| `01-collection-manager.md` | COL-001 | Collection management |

### Environments (`/environments`)
| File | Screen | Description |
|------|--------|-------------|
| `01-environment-manager.md` | ENV-001 | Environment variables |
| `02-environment-quick-switch.md` | ENV-002 | Quick switch dropdown |

### Tests (`/tests`)
| File | Screen | Description |
|------|--------|-------------|
| `01-test-editor.md` | TEST-001 | Test script editor |
| `02-test-results.md` | TEST-002 | Test execution results |
| `03-test-suite-manager.md` | TEST-003 | Test suite management |

### Flow Builder (`/flow-builder`)
| File | Screen | Description |
|------|--------|-------------|
| `01-flow-canvas.md` | FLOW-001 | Visual flow editor |
| `02-flow-results.md` | FLOW-002 | Flow execution results |

### Other (`/other`)
| File | Screen | Description |
|------|--------|-------------|
| `search/01-global-search.md` | SEARCH-001 | Command palette search |
| `performance/01-performance-dashboard.md` | PERF-001 | Performance metrics |
| `timeline/01-request-timeline.md` | TIMELINE-001 | Request timing breakdown |
| `documentation/01-documentation-generator.md` | DOC-001 | API documentation |
| `import-export/01-import-export.md` | IMP-001 | Import/export tools |
| `settings/01-account-settings.md` | SETTINGS-001 | Account management |

## Design Tokens Reference

### Colors
```
primary:      #000000  - Primary button, headlines
canvas:       #FFFFFF  - Background, inputs
ink:          #000000  - Text on light
hairline:     #E5E5E5  - Borders, dividers
surface-soft: #F5F5F5  - Hover, secondary backgrounds
```

### Typography
```
headline:   26px / 540 weight - Page titles
card-title: 24px / 700 weight - Card titles
body:       18px / 320 weight - Body text
body-sm:    16px / 330 weight - Labels, meta
button:     20px / 480 weight - Button text
```

### Spacing
```
xs:   8px
sm:  12px
md:  16px
lg:  24px
xl:  32px
xxl: 48px
```

### Components
```
button-primary:   bg=primary, text=white, rounded.pill
button-secondary: bg=canvas, text=ink, rounded.pill
text-input:       bg=canvas, border=hairline, rounded.md
card:             bg=canvas, border=hairline, rounded.lg
```

## Key Design Rules

- **Monochrome system**: Only primary (black) and canvas (white)
- **Pill buttons only**: `{rounded.pill}` for all CTAs
- **No color blocks on auth screens**: Keep authentication clean
- **No shadows**: Use hairline borders for depth
- **No mid-gray text**: Use font weight for hierarchy
