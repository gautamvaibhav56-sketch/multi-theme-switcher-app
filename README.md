# 🌈 Multi-Theme Switcher React App

A responsive, theme-switchable React application built with TypeScript, Tailwind CSS, and React Router. The app features 3 visually distinct themes, dynamic content rendering, persistent theme selection, and page routing including a custom 404 fallback page.

---

## 🚀 Features

- 🎨 **Three Unique Themes**:
  - **Theme 1**: Minimalist layout with light background and sans-serif font
  - **Theme 2**: Dark mode layout with sidebar and bold serif typography
  - **Theme 3**: Colorful card grid using products from a public API
- 🗂️ **Multi-page Support**: Home, About, Contact, and 404 Not Found pages
- 🔄 **Theme Persistence**: Saves user selection in `localStorage`
- ⚛️ **Context API**: Manages global theme state
- ⚙️ **TypeScript**: Fully typed components and state
- 📦 **API Integration**: Data fetched from [Fake Store API](https://fakestoreapi.com/)
- 💅 **Tailwind CSS**: Utility-first responsive styling
- 📱 **Responsive Design**: Optimized for all devices
- 🎭 **Animations**: Smooth transitions on theme switch and interactions
- 🚧 **404 Fallback Page**: Custom page for unknown routes

---

## 🧑‍💻 Tech Stack

- **React** (v18+)
- **TypeScript**
- **Tailwind CSS**
- **React Router DOM**
- **Context API**
- **Vite**
- **Fake Store API**

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   └── Dropdown.tsx
├── contexts/
│   └── themesContext.tsx
├── pages/
│   ├── ThemeOne.tsx
│   ├── ThemeTwo.tsx
│   ├── ThemeThree.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── App.tsx
└── main.tsx
```

---

## 🧪 Getting Started

### 📦 1. Clone the repository

```bash
git clone https://github.com/gautamvaibhav56-sketch/multi-theme-switcher-app
cd multi-theme-switcher-app
```

### 📦 2. Install dependencies

```bash
npm install
```

### 🚀 3. Run the app locally (for development)

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### 🧱 4. Build for production

```bash
npm run build
```

The production-ready files will be output to the `dist/` directory.

### 🔍 5. Preview the production build locally (optional)

```bash
npm run preview
```

> This is useful to test the production build before deploying.

---

## 🔗 Routes

| Route         | Description                          |
|---------------|--------------------------------------|
| `/`           | Themed Home Page (based on selection)|
| `/about`      | Static About page                    |
| `/contact`    | Static Contact page                  |
| `*`           | 404 Fallback Page                    |

---

## 🌐 Live Demo

Check out the live deployed app here:  
👉 [https://themeswitchermulti.netlify.app](https://themeswitchermulti.netlify.app)

---

## 📄 License

This project was developed as part of the **React Frontend Developer Assessment** for Hipster Pte. Ltd. All rights reserved.

---

## 📬 Contact

**Vaibhav Gautam - React Developer**  
📍 Kota, Rajasthan  
📧 gautamvaibhav56@gmail.com  
📞 +91-9024419322
---

**Made with ❤️ using React + Tailwind + TypeScript**
