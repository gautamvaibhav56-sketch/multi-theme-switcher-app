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
- **Fake Store API**

---

## 📁 Project Structure

\`\`\`
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
\`\`\`

---

## 🧪 Getting Started

### 📦 Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 🚀 Run the App Locally

\`\`\`bash
npm run dev
\`\`\`

### 🔧 Build for Production

\`\`\`bash
npm run build
\`\`\`

---

## 🔗 Routes

| Route         | Description                          |
|---------------|--------------------------------------|
| \`/\`           | Themed Home Page (based on selection)|
| \`/about\`      | Static About page                    |
| \`/contact\`    | Static Contact page                  |
| \`*\`           | 404 Fallback Page                    |

---

## 📄 License

This project was developed as part of the **React Frontend Developer Assessment** for Hipster Pte. Ltd. All rights reserved.

---

## 📬 Contact

**Hipster Pte. Ltd.**  
📍 75 Ayer Rajah Crescent, #01-04, Singapore 139953  
📧 hr@hipster-inc.com  
📞 +65 8231 4107  
🌐 [www.hipster-inc.com](https://www.hipster-inc.com)

---

**Made with ❤️ using React + Tailwind + TypeScript**
