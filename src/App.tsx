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
        
        {/* 🌟 Beautiful Header */}
        <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-4 shadow-lg">
          <div className="flex justify-center items-center space-x-8 rtl:space-x-reverse">
            <Link
              to="/"
              className="text-white text-lg font-bold hover:text-yellow-300 transition duration-300 transform hover:scale-110"
            >
              🏠 خانه
            </Link>
            <Link
              to="/report"
              className="text-white text-lg font-bold hover:text-yellow-300 transition duration-300 transform hover:scale-110"
            >
              📋 گزارش
            </Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
