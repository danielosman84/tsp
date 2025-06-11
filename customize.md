# Customizing This Template

Use this guide to rebrand the site for your client.

---

## 🎨 1. Change Branding

Edit `/app/page.tsx` or `/pages/index.tsx` and replace:
- Business name (e.g. Rouleur Co.)
- Headlines, descriptions, contact info

---

## 🌈 2. Update Tailwind Colors

Edit `tailwind.config.js`:

```js
colors: {
  brand: {
    DEFAULT: '#PRIMARY_COLOR',
    dark: '#DARK_COLOR',
    light: '#LIGHT_COLOR',
  },
}
```

---

## 🖼 3. Update Logo

Replace `public/logo.png` and update `<Image src="/logo.png" />` if used.

---

## 🚀 4. Deploy on Vercel

Connect repo to [Vercel](https://vercel.com/), add a domain, and it auto-deploys.

---

Done? Push your changes:
```bash
git add .
git commit -m "Rebrand and deploy"
git push
```
