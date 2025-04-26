import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import ReportPage from "./components/ReportPage";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Header Navigation */}
        <nav className="bg-indigo-600 p-4 text-white flex justify-center gap-8">
          <Link to="/" className="hover:underline">خانه</Link>
          <Link to="/report" className="hover:underline">گزارش</Link>
        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
