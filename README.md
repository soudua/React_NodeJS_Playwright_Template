# React + Node.js + Playwright Template

A simple boilerplate project combining **React** (frontend), **Node.js/Express** (backend), and **Playwright** (end-to-end testing). This template is designed to help you get started quickly with a full-stack JavaScript project and built-in testing support.

## ✨ Features

- ⚛️ React frontend with modern tooling (Vite or CRA)
- 🔧 Node.js + Express backend
- ✅ Playwright setup for end-to-end browser testing
- 📦 Easy to extend and customize

## 📁 Project Structure

```text
.
├── client/                     # React frontend (Vite)
│   ├── public/                 # Public assets
│   ├── src/                    # React source code
│   │   ├── assets/             # Static assets like images or icons
│   │   ├── App.jsx             # Main App component
│   │   ├── index.css           # Global styles
│   │   ├── main.jsx            # React entry point
│   │   └── ...                 # Other components and styles
│   ├── index.html              # HTML template
│   ├── vite.config.js          # Vite configuration
│   ├── eslint.config.js        # ESLint configuration
│   ├── package.json            # Frontend dependencies and scripts
│   └── README.md               # Frontend README (optional)
│
├── server/                     # Node.js backend (Express)
│   ├── index.js                # Express server entry point
│   ├── package.json            # Backend dependencies and scripts
│   └── node_modules/           # Backend dependencies
│
├── playwright/                 # Playwright test setup
│
└── README.md                   # Project documentation (this file)
