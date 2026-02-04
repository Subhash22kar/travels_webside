# Preetesh Travels Website 🌏

A premium travel agency website built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 How to Deploy on Vercel

This project is optimized for deployment on [Vercel](https://vercel.com).

### Step 1: Push to GitHub
1. Create a new repository on GitHub.
2. Push this code to the repository.
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** -> **"Project"**.
3. Import your GitHub repository.
4. Vercel will auto-detect **Next.js**.
5. Click **Deploy**.

That's it! Your site will be live in minutes.

## 🛠️ Local Development

To run the project locally:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000).

## ✨ Features
- **Mobile Responsive**: Optimized for all devices.
- **Dark Mode**: Toggle between light and dark themes.
- **Animations**: Smooth transitions using Framer Motion.
- **Contact Forms**: (UI Ready) - Connect to a backend service like EmailJS or Formspree.

## 📁 Project Structure
- `/src/components`: Reusable UI components (Header, Hero, etc.)
- `/src/app`: Page routing and layout.
- `/public`: Static assets (images, logos).
