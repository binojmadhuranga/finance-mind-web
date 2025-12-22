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
## 📁 Final Folder Structurer 

src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── transactions/
│   │   │   └── page.tsx
│   │   ├── categories/
│   │   │   └── page.tsx
│   │   ├── reports/
│   │   │   └── page.tsx
│   │
│   └── api/
│       └── health/
│           └── route.ts
│
├── store/
│   ├── index.ts
│   ├── hooks.ts
│
├── features/
│   ├── auth/
│   │   ├── authSlice.ts
│   │   ├── authThunks.ts
│   │   └── authTypes.ts
│   │
│   ├── transactions/
│   │   ├── transactionSlice.ts
│   │   ├── transactionThunks.ts
│   │   └── transactionTypes.ts
│   │
│   ├── categories/
│   │   ├── categorySlice.ts
│   │   ├── categoryThunks.ts
│   │   └── categoryTypes.ts
│   │
│   └── reports/
│       ├── reportSlice.ts
│       └── reportThunks.ts
│
├── services/
│   ├── apiClient.ts
│   ├── authService.ts
│   ├── transactionService.ts
│   ├── categoryService.ts
│   └── reportService.ts
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Modal.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   │
│   └── charts/
│       ├── ExpenseChart.tsx
│       └── IncomeChart.tsx
│
├── lib/
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
