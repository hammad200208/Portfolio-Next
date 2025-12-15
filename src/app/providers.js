"use client";

import { useEffect, useState, createContext, useContext } from "react";

// Create a context for theme
const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function Providers({ children }) {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
