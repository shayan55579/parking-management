// src/App.tsx
import React, { useState } from "react";
import LoginPage from "./components/LoginPage"
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? (
    <Dashboard />
  ) : (
    <LoginPage onLogin={() => setLoggedIn(true)} />
  );
};

export default App;
