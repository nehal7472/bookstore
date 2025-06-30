
# 📚 Neth BookPoint — React Bookstore App with Admin Panel

link - https://nehal-bookstore.vercel.app/

Welcome to **Neth BookPoint**, a modern React-based book eCommerce platform built with **React Router**, **Tailwind CSS**, and **local state management** using `useState`.

This project includes a user-friendly frontend for customers to explore and search books, and a powerful **Admin Panel** to manage products.

---

## 🔗 Live Demo

🚀 _Coming Soon_ or deploy using [Vercel]([https://vercel.com](https://nehal-bookstore.vercel.app/)) 

---

## 📁 Project Structure

📦 src
├── components/ # Reusable components (Navbar, Sidebar, etc.)
├── data/ # Static JSON (product data)
├── layout/ # Layouts for frontend and admin
├── pages/ # Pages for both user and admin
│ ├── admin/ # Admin pages (e.g. Products)
│ ├── Home.jsx
│ ├── About.jsx
│ └── ShopNow.jsx
├── App.jsx # Routing logic
└── index.js # Entry point


---

## 💡 Features

### 🛍️ Frontend Bookstore (Public)

- Clean, modern homepage with branding
- **Search and filter** books on the **Shop Now** page
- Product listings with:
  - Name, description, price, category, and availability status
- Mobile-responsive navigation
- Informational pages:
  - About
  - Sellers
  - Delivery Team

---

### 🛠️ Admin Panel

- Separate `/admin` route
- Styled layout with sidebar (`AdminSidebar`) and main content (`AdminLayout`)
- Admin can:
  - View all products
  - Filter/search by name, status, or description
  - Use pagination and change number of rows per page
- Button to add new items (UI ready)

---

## 🚀 Tech Stack

- ⚛️ **React** — SPA with component-based structure
- 🧭 **React Router DOM** — Route management with layout nesting
- 🎨 **Tailwind CSS** — Utility-first responsive styling
- 🔍 **React Icons** — Consistent icon set
- 🔄 **React `useState` & `useEffect`** — Local state & search filtering

---

## 📦 Installation

1. **Clone this repo**
   ```bash
   git clone https://github.com/your-username/neth-bookpoint.git
   cd neth-bookpoint

npm install

npm run dev

💡 This project uses Vite as the build tool for faster development experience.
