// src/context/AppContext.jsx
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // global states you might need
  const [theme, setTheme] = useState("dark"); // "dark" or "light"
  const [user, setUser] = useState(null);     // user object or null
  const [navHeight, setNavHeight] = useState(64); // px, useful for layout

  const toggleTheme = () => setTheme(t => (t === "dark" ? "light" : "dark"));

  return (
    <AppContext.Provider value={{
      theme,
      toggleTheme,
      user,
      setUser,
      navHeight,
      setNavHeight
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
