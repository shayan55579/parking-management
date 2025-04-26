**Build the Project**
```bash
npm create vite@latest parking-management --template react-ts
cd parking-parking-management
```
**🚀Install Tailwinds**
```bash
npm install tailwindcss @tailwindcss/vite
https://tailwindcss.com/docs/installation/using-vite
```
**🚀Install Required Dependencies**
```bash
npm install moment-jalaali @fontsource/vazir
```
**📂Project Structure**
```bash
src/
├── assets/
│   └── fonts/            # Custom Persian fonts (e.g., Vazir)
├── components/
│   ├── LoginPage.tsx     # Login form component
│   ├── Dashboard.tsx     # Main dashboard after login
│   ├── PlateForm.tsx     # Form for entering license plates
│   └── CarsTable.tsx     # Table to display parked cars
├── types/
│   └── Car.ts            # Car interface/type definition
├── utils/
│   └── date.ts           # Date helper using moment-jalaali
├── App.tsx               # Root component, handles routing/login state
├── index.tsx             # React app entry point
├── index.css             # Global styles + RTL direction + font
└── react-app-env.d.ts
```
```bash
npm install framer-motion
npm install file-saver
npm install react-router-dom
npm install --save-dev @types/file-saver
```