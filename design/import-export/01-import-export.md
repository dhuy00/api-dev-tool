# Màn hình Import/Export

## 1. Tổng quan

- **Mã màn hình:** IMP-001
- **Tên màn hình:** Import / Export
- **Loại:** Modal/Screen
- **Vị trí:** Project → Import/Export buttons
- **Yêu cầu:** Editor role trở lên

---

## 2. Mục đích

Import API definitions từ các định dạng khác và export project data.

---

## 3. Layout - Import

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Import                                                         [×]        │
│  ───────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  Select a format to import:                                                  │
│                                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────┐  │
│  │  📄 OpenAPI 3.x     │  │  📄 Swagger 2.0     │  │  📦 Postman     │  │
│  │  Import OpenAPI     │  │  Import Swagger      │  │  Import Postman  │  │
│  │  definition        │  │  definition         │  │  Collection    │  │
│  └──────────────────────┘  └──────────────────────┘  └──────────────────┘  │
│                                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────┐  │
│  │  📦 Hoppscotch      │  │  📝 cURL            │  │  📄 HAR         │  │
│  │  Import Hoppscotch  │  │  Import cURL        │  │  Import HAR     │  │
│  │  Collection         │  │  command            │  │  file           │  │
│  └──────────────────────┘  └──────────────────────┘  └──────────────────┘  │
│                                                                              │
│  ──────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  Or drag and drop a file here:                                               │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                              │  │
│  │                       📁                                                  │  │
│  │                  Drop file here                                          │  │
│  │                 or click to browse                                      │  │
│  │                                                                              │  │
│  │              Supported: .json, .yaml, .har, .curl                     │  │
│  │                                                                              │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│                               [Cancel]                                        │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Import Preview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Import Preview                                                         [×] │
│  ───────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  File: openapi.json (2.4 MB)                                             │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  Import Settings                                                              │  │
│  │  ──────────────────────────────────────────────────────────────────  │  │
│  │                                                                              │  │
│  │  Import as:                                                                    │  │
│  │  ○ New project          ○ Existing project: [Select ▼]                │  │
│  │                                                                              │  │
│  │  Project name:                                                                   │  │
│  │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│  │  │ My API                                                           │  │  │
│  │  └─────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                              │  │
│  │  Environment:                                                                  │  │
│  │  [Create new: Development ▼]                                               │  │
│  │                                                                              │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  Import Summary                                                              │  │
│  │  ──────────────────────────────────────────────────────────────────  │  │
│  │                                                                              │  │
│  │  Found:                                                                         │  │
│  │  • 45 endpoints                                                        │  │
│  │  • 12 schemas                                                        │  │
│  │  • 8 security schemes                                               │  │
│  │                                                                              │  │
│  │  To be imported:                                                             │  │
│  │  ☑ Endpoints (45)                                                     │  │
│  │  ☑ Schemas (12)                                                      │  │
│  │  ☑ Security definitions (8)                                           │  │
│  │  ☐ Examples (12)                                                    │  │
│  │  ☐ Documentation                                                     │  │
│  │                                                                              │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  ⚠️ Warnings & Notes                                                     │  │
│  │  ──────────────────────────────────────────────────────────────────  │  │
│  │  • 3 endpoints have ambiguous paths                                    │  │
│  │  • 2 schemas reference external files (will be inlined)             │  │
│  │  • OAuth flows not fully supported (will be imported as generic)   │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│                               [Cancel]  [Import]                            │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Export Options

```
┌─────────────────────────────────────────┐
│  Export Project                     [X] │
│  ────────────────────────────────────── │
│                                          │
│  Format                                   │
│  ┌─────────────────────────────────────┐│
│  │ 📦 API Forge (Native)              ││
│  ├─────────────────────────────────────┤│
│  │ 📄 OpenAPI 3.0 (JSON)              ││
│  ├─────────────────────────────────────┤│
│  │ 📄 OpenAPI 3.0 (YAML)              ││
│  ├─────────────────────────────────────┤│
│  │ 📄 Swagger 2.0 (JSON)              ││
│  ├─────────────────────────────────────┤│
│  │ 📦 Postman Collection v2.1         ││
│  ├─────────────────────────────────────┤│
│  │ 📦 Postman Collection v2.0         ││
│  └─────────────────────────────────────┘│
│                                          │
│  Options                                 │
│  ☑ Include environments                 │
│  ☑ Include test suites                  │
│  ☑ Include documentation                │
│  ☑ Include history (last 30 days)     │
│  ────────────────────────────────────── │
│  ☐ Include secrets (NOT RECOMMENDED)   │
│                                          │
│  ┌─────────────────────────────────────┐│
│  │              EXPORT                    ││
│  └─────────────────────────────────────┘│
│                                          │
│        [Cancel]                          │
│                                          │
└─────────────────────────────────────────┘
```

---

## 6. Import Status

```
┌─────────────────────────────────────────┐
│  Importing...                       [X] │
│  ────────────────────────────────────── │
│                                          │
│  ┌─────────────────────────────────────┐│
│  │  ████████████████████░░░░░░ 75%    ││
│  │  Importing endpoints...              ││
│  └─────────────────────────────────────┘│
│                                          │
│  Step 1: Parsing file...          ✓    │
│  Step 2: Validating schema...      ✓    │
│  Step 3: Importing endpoints...    ●    │
│  Step 4: Importing schemas...      ○    │
│  Step 5: Finalizing...             ○    │
│                                          │
│  34 of 45 endpoints imported...        │
│                                          │
└─────────────────────────────────────────┘
```

---

## 7. Import Result

```
┌─────────────────────────────────────────┐
│  Import Complete                       [×] │
│  ────────────────────────────────────── │
│                                          │
│  ✓ Import successful!                    │
│                                          │
│  Imported:                               │
│  • 45 endpoints                        │
│  • 12 schemas                          │
│  • 8 security schemes                  │
│                                          │
│  ⚠️ 3 items skipped (see warnings)       │
│                                          │
│  Project: "My API" created              │
│                                          │
│  ┌─────────────────────────────────────┐│
│  │        OPEN PROJECT                    ││
│  └─────────────────────────────────────┘│
│                                          │
│        [Close]                           │
│                                          │
└─────────────────────────────────────────┘
```

---

## 8. Supported Formats

| Format | Import | Export |
|--------|--------|--------|
| API Forge (Native) | ✓ | ✓ |
| OpenAPI 3.x | ✓ | ✓ |
| Swagger 2.0 | ✓ | ✓ |
| Postman Collection v2.0 | ✓ | ✓ |
| Postman Collection v2.1 | ✓ | ✓ |
| Hoppscotch | ✓ | ✗ |
| cURL | ✓ | ✗ |
| HAR | ✓ | ✗ |

---

## 9. Related Screens

- [../project/01-project-list.md](../project/01-project-list.md) - Project list

---

## 10. Acceptance Criteria

- [ ] Hiển thị các format options
- [ ] Drag-drop file hoạt động
- [ ] Preview hiển thị trước khi import
- [ ] Có thể chọn items để import
- [ ] Warnings hiển thị cho potential issues
- [ ] Progress bar hiển thị during import
- [ ] Success/error result được hiển thị
- [ ] Export format options đầy đủ
- [ ] Secret warning hiển thị khi export secrets
