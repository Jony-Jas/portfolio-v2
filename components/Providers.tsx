"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>;
}

export default Providers;
