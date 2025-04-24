import React, { useState } from "react";
import LoginPage from "./components/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? (
    <div className="text-center text-2xl text-green-600 mt-20 font-bold">🎉 Logged in!</div>
  ) : (
    <LoginPage onLogin={() => setLoggedIn(true)} />
  );
}

export default App;
