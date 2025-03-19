
### **Technologies Used**
- React.js (Frontend UI)
- Redux Toolkit (State Management)
- Tailwind CSS (Styling)
- Create React Router (Navigation)
- Axios (API Calls)
---

## **Folder Structure**

```
/project-root
│── /src
│   │── /layouts       # Layout components (Header, Footer, Sidebar)
│   │── /pages         # Main Page Structure
│   │   │── /admin                # Admin Panel
│   │   │   │── /pages            # Admin Pages
│   │   │   │   │── /pageName     # Folder for each Admin Page
│   │   │   │   │   │── index.jsx # Main Page File
│   │   │   │   │   │── /components # Page-specific Components
│   │   │   │── /components       # Admin Shared Components (Used across admin pages)
│   │   │── /user                 # User Panel
│   │   │   │── /pages            # User Pages
│   │   │   │   │── /pageName     # Folder for each User Page
│   │   │   │   │   │── index.jsx # Main Page File
│   │   │   │   │   │── /components # Page-specific Components
│   │   │   │── /components       # User Shared Components (Used across user pages)
│   │── /components               # Global Reusable Components (Buttons, Modals, Forms, etc.)
│   │── /routes                   # Routes Folder (Stores All Route Configurations)
│   │   │── adminRoutes.js        # Admin-specific Routes
│   │   │── userRoutes.js         # User-specific Routes
│   │   │── index.js              # Centralized Route File
│   │── /assets                   # Static assets (icons, images, styles, etc.)
│   │── /hooks                    # Custom hooks (API calls, authentication, etc.)
│   │── /store                    # Redux Store (Actions, Reducers, Store configuration)
│   │── /utils                    # Utility functions/helpers
│── /public                       # Public assets
│── /config                       # Configuration files
│── .env                          # Environment Variables
│── .gitignore
│── package.json
│── README.md

```

## **Installation & Setup**

1. Clone the repository:
   ```sh
   git clone https://github.com/Shivraj-Chavan/zp.git
   cd zp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

### **Environment Variables**
Create a `.env` file in the root directory and add the necessary environment variables.
Example:
```env
REACT_APP_API_BASE_URL=https://api.example.com
```

---

## **Code Guidelines**

- Use **PascalCase** for React components.
- Use **camelCase** for variables and functions.
- Follow the **Redux Toolkit** best practices for state management.
- Use **Axios** for API calls inside the `Hooks/` directory.
- Keep UI logic separate from business logic.

---

## **Contribution Guidelines**

1. **Branching Strategy**:
   - `main` → Stable production-ready branch.
   - `dev` → Development branch for integration.
   - `feature/branch-name` → Feature-specific branches.

2. **Code Review Process**:
   - All PRs should be reviewed by at least one developer before merging.

3. **Commit Message Convention**:
   - Use clear and meaningful commit messages.
   - Example: `feat(auth): Added login functionality`

---
