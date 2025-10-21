# Content Management Guide

## 📖 Table of Contents

1. [Introduction](#introduction)
2. [Understanding the Content Structure](#understanding-the-content-structure)
3. [Managing Services](#managing-services)
4. [Managing Cases](#managing-cases)
5. [Managing Translations](#managing-translations)
6. [Advanced Content Features](#advanced-content-features)
7. [Common Examples](#common-examples)

---

## Introduction

This guide will help you add and edit content on your website without programming knowledge. The site uses JSON files for content storage and supports three languages: **English (EN)**, **Russian (RU)**, and **Polish (PL)**.

### Key Files You'll Work With:

- 📁 `app/data/services.json` - Service page structure
- 📁 `app/data/cases.json` - Case studies data
- 📁 `app/data/blog.json` - Blog posts data
- 📁 `app/translations/en.json` - English content
- 📁 `app/translations/ru.json` - Russian content
- 📁 `app/translations/pl.json` - Polish content

---

## Understanding the Content Structure

### How Content Works

The site separates **structure** from **content**:

- **Structure files** (`services.json`, `cases.json`) define what pages exist
- **Translation files** (`en.json`, `ru.json`, `pl.json`) contain the actual text content

This approach makes it easy to manage multilingual content!

---

## Managing Services

### 1. Adding a New Service

#### Step 1: Add Service to `app/data/services.json`

```json
{
  "services": [
    {
      "id": "my-new-service",
      "titleKey": "servicesData.myNewService.title",
      "descriptionKey": "servicesData.myNewService.description",
      "image": "/heroCards/image.svg",
      "slug": "my-new-service",
      "contentKey": "servicesData.myNewService.content"
    }
  ]
}
```

**Field Explanations:**

- `id` - Unique identifier (use lowercase with dashes)
- `titleKey` - Points to the title in translation files
- `descriptionKey` - Points to the description in translation files
- `image` - Path to header image (place images in `/public/heroCards/`)
- `slug` - URL path (e.g., `/services/my-new-service`)
- `contentKey` - Points to the full page content in translation files

#### Step 2: Add Content to Translation Files

Open `app/translations/en.json` and add:

```json
"servicesData": {
  "myNewService": {
    "title": "My New Service",
    "description": "Short description for the service card",
    "content": {
      "hero": {
        "title": "MY NEW SERVICE",
        "subtitle": "A brief introduction to what this service offers."
      },
      "sections": {
        "section1": {
          "title": "First Section Title",
          "items": [
            "Bullet point 1",
            "Bullet point 2",
            "Bullet point 3"
          ]
        },
        "section2": {
          "title": "Second Section Title",
          "description": "Detailed description text goes here. You can write multiple paragraphs."
        }
      },
      "conclusion": "Final thoughts and summary of the service."
    }
  }
}
```

#### Step 3: Add Russian Translation

Open `app/translations/ru.json` and add the same structure with Russian text:

```json
"servicesData": {
  "myNewService": {
    "title": "Моя новая услуга",
    "description": "Краткое описание для карточки услуги",
    "content": {
      "hero": {
        "title": "МОЯ НОВАЯ УСЛУГА",
        "subtitle": "Краткое введение о том, что предлагает эта услуга."
      },
      "sections": {
        "section1": {
          "title": "Название первого раздела",
          "items": [
            "Пункт 1",
            "Пункт 2",
            "Пункт 3"
          ]
        }
      }
    }
  }
}
```

#### Step 4: Add Polish Translation

Repeat for `app/translations/pl.json` with Polish text.

### 2. Adding Related Cases to a Service

To show case studies on your service page, add a `cases` section:

```json
"content": {
  "hero": { ... },
  "sections": { ... },
  "cases": {
    "title": "Related Cases",
    "tags": ["Corporate Structuring", "Tax Planning"]
  },
  "conclusion": "..."
}
```

**How it works:**

- The system will automatically find cases from `cases.json` that have matching tags
- Cases will appear in a 2-column grid before the contact section
- Add the same to all three translation files (en.json, ru.json, pl.json)

---

## Managing Cases

### Adding a New Case Study

Open `app/data/cases.json` and add a new case:

```json
{
  "cases": [
    {
      "title": "Case Study Title in English",
      "titleRu": "Название кейса на русском",
      "titlePl": "Tytuł przypadku po polsku",
      "excerpt": "Brief preview text shown on blog cards...",
      "excerptRu": "Краткий превью-текст...",
      "excerptPl": "Krótki tekst podglądu...",
      "slug": "case-study-url-slug",
      "date": "15 Oct 2025",
      "tags": ["Corporate Structuring", "IP Protection"],
      "description": "Short description for case cards",
      "descriptionRu": "Краткое описание для карточек кейсов",
      "descriptionPl": "Krótki opis dla kart przypadków",
      "content": [
        {
          "type": "subtitle",
          "text": "Situation",
          "textRu": "Ситуация",
          "textPl": "Sytuacja"
        },
        {
          "type": "paragraph",
          "text": "Description of the situation in English...",
          "textRu": "Описание ситуации на русском...",
          "textPl": "Opis sytuacji po polsku..."
        },
        {
          "type": "subtitle",
          "text": "Solution",
          "textRu": "Решение",
          "textPl": "Rozwiązanie"
        },
        {
          "type": "paragraph",
          "text": "Description of the solution..."
        },
        {
          "type": "list",
          "items": [
            "Key achievement 1",
            "Key achievement 2",
            "Key achievement 3"
          ],
          "itemsRu": [
            "Ключевое достижение 1",
            "Ключевое достижение 2",
            "Ключевое достижение 3"
          ],
          "itemsPl": [
            "Kluczowe osiągnięcie 1",
            "Kluczowe osiągnięcie 2",
            "Kluczowe osiągnięcie 3"
          ]
        }
      ]
    }
  ]
}
```

### Important Case Fields:

| Field         | Required | Description                                                   |
| ------------- | -------- | ------------------------------------------------------------- |
| `title`       | ✅       | English title                                                 |
| `titleRu`     | ✅       | Russian title                                                 |
| `titlePl`     | ✅       | Polish title                                                  |
| `slug`        | ✅       | URL path (use lowercase-with-dashes)                          |
| `date`        | ✅       | Display date (e.g., "15 Oct 2025")                            |
| `tags`        | ✅       | Array of tags for filtering (e.g., ["Corporate Structuring"]) |
| `description` | ✅       | Short description for cards                                   |
| `excerpt`     | ⚪       | Preview text for blog-style layouts                           |
| `content`     | ✅       | Array of content blocks (see below)                           |

### Content Block Types:

#### 1. **Subtitle** (Section Header)

```json
{
  "type": "subtitle",
  "text": "Section Title",
  "textRu": "Название раздела",
  "textPl": "Tytuł sekcji"
}
```

#### 2. **Paragraph** (Regular Text)

```json
{
  "type": "paragraph",
  "text": "Your text in English...",
  "textRu": "Ваш текст на русском...",
  "textPl": "Twój tekst po polsku..."
}
```

#### 3. **List** (Bullet Points)

```json
{
  "type": "list",
  "items": ["Point 1", "Point 2", "Point 3"],
  "itemsRu": ["Пункт 1", "Пункт 2", "Пункт 3"],
  "itemsPl": ["Punkt 1", "Punkt 2", "Punkt 3"]
}
```

---

## Managing Translations

### Structure of Translation Files

Translation files follow a nested structure. Here's how to navigate them:

```json
{
  "header": {
    "nav": {
      "home": "Home",
      "services": "Services"
    }
  },
  "homepage": {
    "hero": {
      "title": "Main page title"
    }
  },
  "servicesData": {
    "corporateStructuring": {
      "title": "Service title",
      "content": { ... }
    }
  }
}
```

### Editing Existing Text

1. Open the appropriate translation file (`en.json`, `ru.json`, or `pl.json`)
2. Use your text editor's search function (Ctrl+F / Cmd+F) to find the text you want to change
3. Edit the text in quotes
4. **Important:** Don't change the keys (text before the colon)
5. Save the file

**Example:**

```json
// ❌ Wrong - Don't change the key
"title": "New Title" → "newTitle": "New Title"

// ✅ Correct - Only change the value
"title": "Old Title" → "title": "New Title"
```

---

## Advanced Content Features

### 1. Service Content with Multiple Section Types

You can create rich service pages with various content types:

```json
"content": {
  "hero": {
    "title": "SERVICE NAME",
    "subtitle": "One-line description"
  },
  "sections": {
    "overview": {
      "title": "Overview",
      "description": "Detailed text description"
    },
    "benefits": {
      "title": "Key Benefits",
      "items": [
        "Benefit 1",
        "Benefit 2",
        "Benefit 3"
      ]
    },
    "regions": {
      "title": "Coverage Areas",
      "regions": {
        "europe": {
          "title": "Europe",
          "countries": "Poland, Estonia, Netherlands, Cyprus"
        },
        "asia": {
          "title": "Asia",
          "countries": "Georgia, Uzbekistan, Kazakhstan"
        }
      }
    },
    "programmes": {
      "title": "Special Programs",
      "programmes": [
        {
          "name": "IT Park (Uzbekistan)",
          "benefits": "0% CIT, 0% dividend tax, 7.5% PIT"
        },
        {
          "name": "Virtual Zone (Georgia)",
          "benefits": "0% CIT on foreign income, 0% VAT"
        }
      ]
    }
  },
  "cases": {
    "title": "Related Cases",
    "tags": ["Corporate Structuring"]
  },
  "conclusion": "Final summary text"
}
```

### 2. Using Tags to Connect Content

Tags are used to automatically show related cases on service pages:

**Available Tags in the System:**

- "Corporate Structuring"
- "IP Protection"
- "International Commercial Arbitration"
- "Private & Delicate Matters"

To add a new tag category:

1. Add the tag to relevant cases in `cases.json`
2. Reference the tag in your service's `cases.tags` array
3. Cases with matching tags will automatically appear

---

## Common Examples

### Example 1: Adding a "Blockchain Advisory" Service

**Step 1:** Add to `app/data/services.json`:

```json
{
  "id": "blockchain-advisory",
  "titleKey": "servicesData.blockchainAdvisory.title",
  "descriptionKey": "servicesData.blockchainAdvisory.description",
  "image": "/heroCards/blockchain.svg",
  "slug": "blockchain-advisory",
  "contentKey": "servicesData.blockchainAdvisory.content"
}
```

**Step 2:** Add to `app/translations/en.json`:

```json
"blockchainAdvisory": {
  "title": "Blockchain Advisory",
  "description": "Legal guidance for blockchain and cryptocurrency projects",
  "content": {
    "hero": {
      "title": "BLOCKCHAIN ADVISORY",
      "subtitle": "Comprehensive legal support for blockchain projects and cryptocurrency businesses."
    },
    "sections": {
      "services": {
        "title": "Our Services",
        "items": [
          "Token launch legal structuring",
          "Regulatory compliance guidance",
          "Smart contract legal review",
          "Crypto licensing support"
        ]
      }
    },
    "conclusion": "Navigate the complex blockchain regulatory landscape with confidence."
  }
}
```

**Step 3:** Repeat for `ru.json` and `pl.json` with translations.

### Example 2: Adding a Case with Multiple Tags

```json
{
  "title": "ICO Legal Structuring and Licensing",
  "titleRu": "Юридическое структурирование и лицензирование ICO",
  "titlePl": "Strukturyzacja prawna i licencjonowanie ICO",
  "slug": "ico-legal-structuring",
  "date": "20 Nov 2025",
  "tags": ["Corporate Structuring", "Licensing", "Blockchain"],
  "description": "Complete legal support for token launch including entity setup and regulatory compliance.",
  "descriptionRu": "Полная юридическая поддержка запуска токена, включая создание компании и соблюдение регуляторных требований.",
  "descriptionPl": "Kompleksowe wsparcie prawne dla uruchomienia tokena, w tym założenie firmy i zgodność z przepisami.",
  "content": [
    {
      "type": "subtitle",
      "text": "Challenge"
    },
    {
      "type": "paragraph",
      "text": "Client needed to launch a token sale in a compliant manner..."
    }
  ]
}
```

This case will now appear on:

- Corporate Structuring service page (has "Corporate Structuring" tag)
- Licensing service page (has "Licensing" tag)
- Any future Blockchain Advisory page (has "Blockchain" tag)

### Example 3: Editing Homepage Content

To change the main hero text, edit `app/translations/en.json`:

```json
"homepage": {
  "hero": {
    "title": "Wolja Digital: your legal in-house team",
    "subtitle": "Legal force for IT and tech visioners",
    "cta": {
      "primary": "Get Consultation",
      "secondary": "Our Services"
    }
  }
}
```

Simply change the text values while keeping the keys the same.

---

## Tips and Best Practices

### ✅ Do's:

- Always update all three language files (en.json, ru.json, pl.json)
- Use descriptive slugs (e.g., "corporate-structuring" not "cs")
- Keep descriptions concise (2-3 sentences maximum)
- Use consistent tag names across cases
- Test your changes by viewing the pages in all three languages

### ❌ Don'ts:

- Don't change JSON key names (text before the colon)
- Don't forget commas between JSON objects
- Don't use special characters in slugs (only lowercase letters, numbers, and dashes)
- Don't delete closing brackets or braces
- Don't leave trailing commas after the last item in an array or object

### Validation Tips:

1. **Check JSON syntax** - Use an online JSON validator if you're unsure
2. **Match structure** - Copy existing entries as templates
3. **Consistent translations** - Ensure all three language files have the same structure
4. **Test locally** - Preview your changes before publishing

---

## Need Help?

### Common Errors:

**Error:** "Unexpected token" or "JSON parse error"

- **Cause:** Missing comma, bracket, or quote
- **Fix:** Check that all brackets `{}` and arrays `[]` are properly closed, and commas separate items

**Error:** Case not appearing on service page

- **Cause:** Tag mismatch between service and case
- **Fix:** Ensure exact tag name match (case-sensitive)

**Error:** Missing translation

- **Cause:** Content exists in one language but not others
- **Fix:** Copy the structure to all three translation files

---

## Quick Reference

### File Locations:

```
app/
├── data/
│   ├── services.json      ← Service structure
│   ├── cases.json         ← Case studies
│   └── blog.json          ← Blog posts
└── translations/
    ├── en.json            ← English content
    ├── ru.json            ← Russian content
    └── pl.json            ← Polish content
```

### Content Types in cases.json:

- `subtitle` - Section headers
- `paragraph` - Regular text
- `list` - Bullet points

### Service Content Sections:

- `hero` - Top title and subtitle
- `sections` - Main content areas
- `cases` - Related case studies (auto-filtered by tags)
- `conclusion` - Final summary

---

**Last Updated:** October 2025
**Version:** 1.0

For technical support, contact your development team.
