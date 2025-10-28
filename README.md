# 🧾 **Employee Records App**

A modern and lightweight **Employee Records Management System** built with **React + TypeScript + Vite**.  
Empowers organizations to manage employee data efficiently with an elegant UI, theme support, and modular architecture.

---

## 🚀 **Features**

- Manage employee records with **Add / Edit / Delete** functionality  
- Filter by **Department** and **Status**  
- **Light / Dark theme toggle**  
- Modular and reusable **UI components** (`Button`, `Card`, `Modal`, etc.)  
- **Mock API** for local data management  
- Fully **responsive layout**  

---

## 🛠️ **Tech Stack**

| **Layer** | **Technology** |
|------------|----------------|
| **Framework** | React (Vite) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **State / Logic** | React Hooks |
| **Mock Backend** | Local mock API (`services/mockApi.ts`) |

---

## ⚙️ **Installation**

```bash
# Clone the repository
git clone https://github.com/<your-username>/employee-records-app.git
cd employee-records-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open 👉 **http://localhost:5173** in your browser.

---

## 🧩 **Folder Structure**

```
employee-records-app/
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── Select.tsx
│   ├── ConfirmDialog.tsx
│   ├── DepartmentManager.tsx
│   ├── EmployeeFormModal.tsx
│   ├── EmployeeManager.tsx
│   ├── EmployeeTable.tsx
│   ├── LandingPage.tsx
│   ├── ToastContainer.tsx
│   └── icons.tsx
│
├── services/
│   └── mockApi.ts
│
├── App.tsx
├── index.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
├── types.ts
├── package.json
└── README.md
```

---

## 🧠 **Development Tools**

- 🧩 **Qwen CLI** → AI-powered code generation and refactoring  
- ⚡ **Vibe Coding** → In-editor AI pairing for faster UI and logic development  
- 🧾 **Speckit** → Spec-first documentation for consistent, maintainable code  

---

## 🧪 **Scripts**

| **Command** | **Description** |
|--------------|-----------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run code linter |

---

## 📂 **Sample Departments**

- Human Resources  
- Finance  
- Marketing  
- Operations  
- IT / Engineering  
- Sales  
- Support  

---

## 📜 **License**

Licensed under the **MIT License** — free to use and modify.

---

## ✨ **Author**

Developed with ❤️ using **React**, **TypeScript**, and **Tailwind CSS**.
