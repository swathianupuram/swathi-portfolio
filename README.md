# Swathi Anupuram — Portfolio

Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Deploy to Vercel (2 minutes)

### Option 1: GitHub + Vercel (Recommended)

1. Push this folder to a new GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — done! Vercel auto-detects Next.js

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be live at `your-name.vercel.app`.

## 🛠 Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Structure

```
app/
  components/
    Navbar.tsx      # Fixed nav with smooth scroll
    Hero.tsx        # Typewriter hero + stats
    Skills.tsx      # Skills grid by category
    Experience.tsx  # Timeline of work history
    Projects.tsx    # Expandable project cards (Handzy featured)
    Contact.tsx     # Contact section + footer
  globals.css       # Design tokens + animations
  layout.tsx        # Root layout + fonts + metadata
  page.tsx          # Page assembly
```

## ✏️ Customise

- **Add LinkedIn URL**: Update `Contact.tsx` → linkedin href
- **Add projects**: Edit `projects` array in `Projects.tsx`
- **Update info**: Edit copy directly in each component
