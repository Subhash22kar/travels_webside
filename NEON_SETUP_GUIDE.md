# 🚀 Preetesh Travels - Launch Guide

This guide will teach you how to set up your **Database** and **Deploy** your website to the world.

---

## Part 1: Setting up Neon Database (The Brain) 🧠
We need a place to save Inquiry Forms. We will use **Neon** (a fast, free Postgres database).

### Step 1: Create Database
1.  Go to **[neon.tech](https://neon.tech)** and click **Sign Up**.
2.  Create a new project named `preetesh-travels`.
3.  You will see a **Connection String** that looks like this:
    ```
    postgres://neondb_owner:AbCdEf123456@ep-cool-site.us-east-2.aws.neon.tech/neondb?sslmode=require
    ```
4.  **Copy** this string.
5.  **Paste** it into your `.env.local` file inside the `DATABASE_URL` quotes.

### Step 2: Push changes to Database
Once the key is in `.env.local`, run these commands in your terminal (I can run them for you if you paste the key!):
```bash
npx prisma generate
npx prisma db push
```
*(This tells Neon to create the "Inquiry" table).*

---

## Part 2: Deploying to Vercel (The World Stage) 🌍
Now let's put your website online.

### Step 1: Push to GitHub
Ensure your latest code is on GitHub. (I see this is done/ready).

### Step 2: Deploy
1.  Go to **[vercel.com](https://vercel.com)** and Sign Up/Login.
2.  Click **"Add New..."** -> **"Project"**.
3.  Select your `preetesh-travels` repository from GitHub.
4.  **CRITICAL STEP**: Look for **"Environment Variables"** section.
    *   Add a new variable named: `DATABASE_URL`
    *   Paste your **Neon Connection String** as the value.
    *   *(Also add `GOOGLE_SHEET_ID` and `EMAIL_USER` if they are in your .env.local).*
5.  Click **Deploy**.

---

### 🎉 Success!
Vercel will give you a link (e.g., `preetesh-travels.vercel.app`).
Share this link with your customers!
