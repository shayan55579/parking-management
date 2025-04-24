import React, { useState } from "react";
import { motion } from "framer-motion";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        setError("");
        onLogin();
      } else {
        setError("نام کاربری یا رمز عبور اشتباه است");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-600 via-indigo-500 to-indigo-700">
      <motion.div
        className="w-[320px] bg-white rounded-2xl shadow-lg px-6 py-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        dir="rtl"
      >
        {/* Red test box (remove if not needed) */}
        {/* <div className="bg-red-500 text-white p-4 text-center text-xl mb-4 rounded">
          ✅ If you see this, Tailwind is working!
        </div> */}

        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-2">
          ورود به حساب
        </h2>
        <p className="text-center text-gray-500 text-sm mb-4">
          لطفاً اطلاعات خود را وارد کنید
        </p>

        {error && (
          <motion.div
            className="text-red-500 text-sm mb-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="نام کاربری"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none text-sm"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="رمز عبور"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="form-checkbox"
              />
              <span>مرا به خاطر بسپار</span>
            </label>
            <a href="#" className="text-indigo-500 hover:underline">
              فراموشی رمز؟
            </a>
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white font-medium transition ${
              loading
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
            disabled={loading}
          >
            {loading ? "در حال ورود..." : "ورود"}
          </button>
        </form>

        <div className="mt-4 text-center text-xs text-gray-500">
          حساب ندارید؟{" "}
          <a href="#" className="text-indigo-500 hover:underline">
            ثبت‌نام کنید
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
