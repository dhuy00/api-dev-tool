# Màn hình Environment Quick Switch

## 1. Tổng quan

- **Mã màn hình:** ENV-002
- **Tên màn hình:** Environment Quick Switcher
- **Loại:** Dropdown / Popover
- **Vị trí:** Top bar của Project view
- **Yêu cầu:** Member của project

---

## 2. Mục đích

Cho phép nhanh chóng switch giữa các environments từ bất kỳ đâu trong project view.

---

## 3. Layout

### 3.1 Closed State

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ← API Team  │  Authentication API  ▼     [🌐 Development ▼]  👤 John Doe  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Open Dropdown

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ← API Team  │  Authentication API  ▼                                    │
│                                                        [🌐 Development ▼]  │
│                                                              ↓            │
└─────────────────────────────────────────────────────────────────────────────┘
                                                           │
                                                           ▼
                        ┌─────────────────────────────────────────────┐
                        │                                             │
                        │  🌐 Development                         ●  │ ← Active
                        │     http://localhost:3000                    │
                        ├─────────────────────────────────────────────┤
                        │                                             │
                        │  🌐 Staging                                   │
                        │     https://staging.api.example.com          │
                        ├─────────────────────────────────────────────┤
                        │                                             │
                        │  🌐 Production                              │
                        │     https://api.example.com                  │
                        │     ⚠️ Production environment               │
                        ├─────────────────────────────────────────────┤
                        │                                             │
                        │  ⚙️ Manage Environments                     │
                        │                                             │
                        └─────────────────────────────────────────────┘
```

---

## 4. Các thành phần UI

### 4.1 Current Environment Display
- **Icon:** Globe (🌐)
- **Name:** Current environment name
- **Dropdown arrow:** Indicates clickable

### 4.2 Environment List Item
- **Icon:** Globe
- **Name:** Environment name
- **URL:** Base URL preview
- **Active indicator:** Dot (●)
- **Production warning:** Icon + text for production

### 4.3 Action
- **"Manage Environments" link:** Navigate to full settings

---

## 5. Luồng chức năng

### 5.1 Switch Environment

```
[User clicks environment dropdown]
        ↓
    ┌───────────────────┐
    │ Show env list       │
    └───────────────────┘
        ↓
[User clicks environment]
        ↓
    ┌───────────────────┐
    │ Set as active       │
    │ environment          │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Update all request  │
    │ variables           │
    │ with new env values  │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Close dropdown      │
    │ Update UI           │
    └───────────────────┘
        ↓
    ┌───────────────────┐
    │ Show toast:         │
    │ "Switched to Dev"   │
    └───────────────────┘
```

---

## 6. Variable Sync

```
When environment switches:
        ↓
┌─────────────────────────────────────────────────────────────┐
│  1. Load variables from new environment                     │
│  2. Preserve current runtime variable overrides             │
│  3. Re-evaluate all variable references in active requests  │
│  4. Update any open response views                          │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Focus environment selector |
| Enter/Space | Open dropdown |
| Arrow Up/Down | Navigate environments |
| Enter | Select focused environment |
| Escape | Close dropdown |

---

## 8. Related Screens

- [01-environment-manager.md](01-environment-manager.md) - Full settings

---

## 9. Acceptance Criteria

- [ ] Hiển thị current environment
- [ ] Dropdown list hiển thị tất cả environments
- [ ] Active environment được highlight
- [ ] Có thể switch environment
- [ ] Variables được update sau switch
- [ ] Production warning hiển thị cho prod
- [ ] "Manage Environments" link hoạt động
- [ ] Keyboard navigation hoạt động
- [ ] Toast notification sau switch
