import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("dark");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleChangeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return [theme, setTheme];
};
