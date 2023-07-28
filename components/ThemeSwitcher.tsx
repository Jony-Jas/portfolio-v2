"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* <button onClick={() => setTheme("light")}>Light Mo</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button> */}
      <DarkModeSwitch
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </>
  );
}

export default ThemeSwitcher;
