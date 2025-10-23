# Content Management Quick Reference 🚀

## 📂 File Locations

| What to Edit | File Location |
|--------------|---------------|
| Service list | `app/data/services.json` |
| Case studies | `app/data/cases.json` |
| English text | `app/translations/en.json` |
| Russian text | `app/translations/ru.json` |
| Polish text | `app/translations/pl.json` |

---

## ⚡ Quick Tasks

### Add a New Service
1. Add entry to `app/data/services.json`
2. Add content to all 3 translation files under `servicesData.yourService`
3. Place header image in `/public/heroCards/`

### Add a New Case Study
1. Add entry to `app/data/cases.json` with:
   - All three language versions (title, titleRu, titlePl)
   - Tags for filtering
   - Content blocks array

### Show Cases on Service Page
Add to service content in translation files:
```json
"cases": {
  "title": "Related Cases",
  "tags": ["Tag Name"]
}
```

### Change Existing Text
1. Find text in translation file using search (Ctrl+F / Cmd+F)
2. Edit the value (text after the colon)
3. **Don't change the key** (text before the colon)

---

## 🏷️ Available Tags

Use these exact tag names for case filtering:
- `"Corporate Structuring"`
- `"IP Protection"`
- `"International Commercial Arbitration"`
- `"Private & Delicate Matters"`

To create a new tag: Just use it consistently in cases and services!

---

## 📝 Content Block Types (for cases)

### Subtitle
```json
{
  "type": "subtitle",
  "text": "English",
  "textRu": "Русский",
  "textPl": "Polski"
}
```

### Paragraph
```json
{
  "type": "paragraph",
  "text": "English text...",
  "textRu": "Русский текст...",
  "textPl": "Polski tekst..."
}
```

### List
```json
{
  "type": "list",
  "items": ["Item 1", "Item 2"],
  "itemsRu": ["Пункт 1", "Пункт 2"],
  "itemsPl": ["Punkt 1", "Punkt 2"]
}
```

---

## 🎯 Service Content Template

```json
"yourService": {
  "title": "Service Name",
  "description": "Short description",
  "content": {
    "hero": {
      "title": "SERVICE NAME",
      "subtitle": "One-liner"
    },
    "sections": {
      "section1": {
        "title": "Section Title",
        "items": ["Point 1", "Point 2"]
      }
    },
    "cases": {
      "title": "Related Cases",
      "tags": ["Tag Name"]
    },
    "conclusion": "Summary text"
  }
}
```

---

## ⚠️ Common Mistakes

| ❌ Don't | ✅ Do |
|---------|-------|
| Change key names | Only change values |
| Forget commas | Add commas between items |
| Use spaces in slugs | Use dashes: `my-service` |
| Edit only one language | Update all 3 languages |
| Leave trailing commas | Remove last comma in lists |

---

## 🔍 Testing Checklist

- [ ] All 3 language files updated (en, ru, pl)
- [ ] JSON syntax is valid (no missing brackets or commas)
- [ ] Tags match exactly between services and cases
- [ ] Images exist in correct folder
- [ ] Slugs use lowercase and dashes only

---

## 💡 Pro Tips

1. **Copy-paste existing entries** as templates
2. **Use JSON validator** online if unsure about syntax
3. **Test in all languages** after making changes
4. **Keep backups** before making large changes
5. **Consistent naming** - use same tag names everywhere

---

## 🆘 Quick Fixes

**JSON error?** → Check for:
- Missing closing bracket `}` or `]`
- Missing comma between items
- Missing quote marks `"`

**Case not showing?** → Check:
- Tag names match exactly (case-sensitive!)
- Case exists in `cases.json`
- Service has `cases` section with correct tags

**Translation missing?** → Check:
- Same structure exists in all 3 translation files
- Keys are identical across languages

---

**Need full guide?** See `CONTENT_MANAGEMENT_GUIDE.md`

