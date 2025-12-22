# 💰 Finance Tracker Web

A simple and modern **Personal Finance Tracking** web application built using **Next.js** and **Redux Toolkit**.  
This frontend allows users to manage income, expenses, categories, and view monthly financial summaries through a clean and responsive UI.

---

## 🚀 Features
- User authentication (Login / Register)
- Add, edit, delete income & expenses
- Monthly summary with charts
- Category management
- Dark/Light mode
- Fully connected to backend API

---

## 🛠️ Tech Stack
- **Next.js**
- **Redux Toolkit**
- **TailwindCSS**
- **Axios**
- **Recharts** (or any chart library)

---
## 📁 Current Folder Structure

```
finance-tracker-web/
├── app/
│   ├── (auth)/                    # Authentication routes (grouped)
│   │   ├── login/
│   │   │   └── page.tsx          # Login page
│   │   └── register/
│   │       └── page.tsx          # Register page
│   │
│   ├── (dashboard)/               # Dashboard routes (grouped, protected)
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Main dashboard
│   │   └── transactions/
│   │       └── page.tsx          # Transactions page
│   │
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Landing page (home)
│   └── providers.tsx             # Redux Provider wrapper
│
├── components/
│   ├── Footer.tsx                # Footer component
│   └── Navbar.tsx                # Navigation bar component
│
├── services/
│   ├── apiClient.ts              # Base API client with fetch wrapper
│   └── authService.ts            # Authentication API service
│
├── store/
│   ├── authSlice.ts              # Auth Redux slice with thunks
│   ├── authTypes.ts              # TypeScript types for auth
│   ├── hooks.ts                  # Typed Redux hooks
│   └── index.ts                  # Redux store configuration
│
├── public/
│   └── icon.png                  # App favicon
│
├── middleware.ts                 # Next.js middleware for route protection
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── package.json                  # Dependencies and scripts
└── .env.local                    # Environment variables
```
│   ├── auth.ts
│   ├── constants.ts
│   └── helpers.ts
│
├── types/
│   ├── user.ts
│   ├── transaction.ts
│   └── category.ts
│
├── utils/
│   ├── formatCurrency.ts
│   ├── formatDate.ts
│   └── validators.ts
│
└── middleware.ts


---

## 📦 Installation

```bash
git clone https://github.com/binojmadhuranga/finance-tracker-web
cd finance-tracker-web
npm install
npm run dev
