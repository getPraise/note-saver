# 📝 Paste App

A simple, clean, and lightweight Pastebin-style web application built with **React**, **Redux Toolkit**, and **React Router**. This app allows users to create, view, edit, delete, search, and share text snippets (called "pastes") all stored locally in the browser via `localStorage`.

---

## 🚀 Features

- 🔖 **Create Paste** – Add a title and content, then save it locally.
- ✏️ **Edit Paste** – Update existing pastes using the home form.
- 📋 **View Paste** – View full content of a paste on a separate route.
- 🗑️ **Delete Paste** – Remove a paste with a single click.
- 🔍 **Search Pastes** – Filter pastes by title.
- 📤 **Share Link** – Shareable links for each paste.
- 📋 **Copy to Clipboard** – Copy content or URL with one click.
- 🎉 **Toasts for Feedback** – Smooth user feedback using `react-hot-toast`.

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Tailwind-like utility classes
- **State Management**: Redux Toolkit
- **Styling**: Custom components using utility-first classes
- **Data Persistence**: `localStorage`
- **Notifications**: `react-hot-toast`
- 
---

## 📂 Folder Structure

```

src/
│
├── components/
│   ├── Home.jsx
│   ├── Navbar.jsx
│   ├── Paste.jsx
│   ├── ViewPaste.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── CardContent.jsx
│       ├── Input.jsx
│       └── Textarea.jsx
│
├── assets/
│   └── store.js
│
├── redux/
│   └── pasteSlice.js
│
├── App.jsx
├── index.css
└── index.js

````

---

## 🧠 How It Works

- The app uses `Redux Toolkit` to manage a list of pastes in global state.
- Pastes are synced with `localStorage`, so data persists across page reloads.
- React Router manages multiple views:
  - `/` – Create or update pastes.
  - `/pastes` – List, search, and manage all pastes.
  - `/paste/:id` – View a single paste.
- Users can click buttons to:
  - **Copy** paste content
  - **Share** via URL
  - **Edit**, **Delete**, or **View** in detail

---

## 🧪 Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/paste-app.git
   cd paste-app
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open in your browser: `http://localhost:5173`

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🙌 Credits

* Built with ❤️ using React and Redux Toolkit
* Toast notifications by [`react-hot-toast`](https://react-hot-toast.com/)

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use it, modify it, and share it.

---
