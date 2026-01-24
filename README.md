
# Virtual Science Lab

An interactive **Virtual Science Laboratory** built with **React, TypeScript, and Vite**.  
This project simulates **Chemistry and Physics experiments** using reusable lab components, allowing users to visually explore experiments in a web environment.

---

##  Features

-  **Chemistry Experiments**
  - Beaker, Burette, Burner, Condenser, and more
  - Data-driven experiment setup
- ️ **Physics Experiments**
  - Modular structure for easy expansion
- ♻ **Reusable Components**
  - Each lab apparatus is built as an independent React component
-  **Fast & Modern Stack**
  - Vite for lightning-fast development
  - React + TypeScript for scalability and safety
-  **Feature-based Folder Structure**
  - Clean separation of chemistry and physics modules

---

## Tech Stack

- **Frontend:** React + TypeScript
- **Bundler:** Vite
- **Styling:** CSS / Component-level styles
- **Linting:** ESLint
- **Package Manager:** npm

---





## Installation

Clone the repository and install dependencies:

```bash
cd home-lab
cd home-lab
npm install
````

---

##  Running the Project

Start the development server:

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

---

## Adding a New Experiment

1. Create a new component inside:

   ```
   src/features/{chemistry|physics}/components/
   ```
2. Add experiment metadata to:

   ```
   src/assets/data/
   ```
3. Import and render the component inside the relevant feature module.

---

##  Contributing

This is a **multi-person project**.

*  Do not modify global configs unless necessary
*  Keep changes feature-scoped
*  Follow existing component patterns
*  Use meaningful commit messages

---

##  Future Improvements

* Experiment animations
* Step-by-step experiment instructions
* Result validation & scoring
* Mobile responsiveness


---

