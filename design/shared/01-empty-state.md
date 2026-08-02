# Shared Components - Empty States

## 1. Tổng quan

Document này mô tả các empty states cho toàn bộ ứng dụng. Empty states xuất hiện khi không có nội dung để hiển thị.

---

## 2. Empty States

### 2.1 No Projects

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                              📁                                               │
│                                                                              │
│                       No projects yet                                         │
│                                                                              │
│          Create your first project to start working with APIs.              │
│                                                                              │
│                                                                              │
│                    [+ Create Your First Project]                              │
│                                                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 No Requests in Collection

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                              📄                                               │
│                                                                              │
│                    This collection is empty                                   │
│                                                                              │
│              Add requests to organize your API testing.                      │
│                                                                              │
│                                                                              │
│                         [+ Add Request]                                        │
│                                                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.3 No Search Results

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                              🔍                                               │
│                                                                              │
│                    No results found                                           │
│                                                                              │
│               Try different keywords or adjust your filters.                 │
│                                                                              │
│                                                                              │
│                         Clear search                                          │
│                                                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.4 No Environments

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                              🌐                                               │
│                                                                              │
│                   No environments configured                                  │
│                                                                              │
│     Create environments to manage different API configurations                 │
│     (development, staging, production).                                      │
│                                                                              │
│                                                                              │
│                      [+ Create Environment]                                    │
│                                                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.5 No Test Results

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                              ✓                                               │
│                                                                              │
│                   No tests have been run yet                                  │
│                                                                              │
│              Tests will appear here after you send a request.               │
│                                                                              │
│                                                                              │
│                       [Write your first test]                                 │
│                                                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.6 No History

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                              📜                                               │
│                                                                              │
│                   No request history yet                                       │
│                                                                              │
│             Your request history will appear here after                       │
│             you send requests.                                               │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.7 No Documentation

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                              📚                                               │
│                                                                              │
│                  No documentation yet                                        │
│                                                                              │
│          Generate documentation from your API assets to                      │
│          share with your team or external consumers.                          │
│                                                                              │
│                                                                              │
│                    [Generate Documentation]                                   │
│                                                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.8 No Flows

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                              ⚡                                               │
│                                                                              │
│                     No request flows yet                                      │
│                                                                              │
│        Create flows to orchestrate multi-step API sequences                   │
│        with conditions, loops, and data passing.                             │
│                                                                              │
│                                                                              │
│                        [+ Create Flow]                                        │
│                                                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.9 Workspace Loading

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                              ⏳                                               │
│                                                                              │
│                        Loading...                                             │
│                                                                              │
│                    Please wait a moment                                      │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.10 Error State

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                              ⚠️                                               │
│                                                                              │
│                     Something went wrong                                       │
│                                                                              │
│              We encountered an error loading this content.                    │
│              Please try again.                                                │
│                                                                              │
│                                                                              │
│                       [Try Again]                                             │
│                                                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Components

### 3.1 Illustration
- Simple icon or illustration
- Muted color (gray/neutral)
- Size: 64x64px or 80x80px

### 3.2 Title
- Main message
- Bold weight
- Primary text color

### 3.3 Description
- Supporting text
- Normal weight
- Secondary text color

### 3.4 Primary Action
- Primary button
- Main CTA

### 3.5 Secondary Action (optional)
- Text link or secondary button
- Less prominent

---

## 4. Design Guidelines

### Colors
- Icon: `#9CA3AF` (gray-400)
- Title: `#111827` (gray-900) or `#F9FAFB` (gray-50 in dark mode)
- Description: `#6B7280` (gray-500)
- Button: Primary color from theme

### Spacing
- Icon to title: 16px
- Title to description: 8px
- Description to button: 24px

### Layout
- Centered vertically and horizontally
- Max-width: 320px for content
- Padding: 48px vertical minimum

---

## 5. Acceptance Criteria

- [ ] Consistent icon usage
- [ ] Consistent spacing
- [ ] Actionable CTAs present
- [ ] Clear messaging
- [ ] Matches light/dark theme
