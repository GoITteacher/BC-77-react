# Заняття 13 - Маршрутизація

- Вкладені сторінки
- Сторінка 404
- Універсальні маршрути (catch-all routes)

- Програмна навігація
  - router.push()
  - router.replace()
  - router.back()
  - router.forward()

- Вкладені layout

- Паралельні маршрути (слоти)

https://otto-zimmermann.store/

```text
app/
├── inbox/
│   ├── layout.tsx
│   ├── @main/
│   │   └── default.tsx          ← контент
│   └── @sidebar/
│       ├── page.tsx          ← сайдбар
│       ├── filters/
│       │   └── page.tsx      ← фільтри
│       ├── folders/
│       │   └── page.tsx      ← шось якісь папки
│       └── settings/
│           └── page.tsx      ← налаштування

```
