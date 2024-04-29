"use client";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        className="hidden dark:block"
        onClick={() => setTheme("light")}
      >
        <Sun className="w-6 h-6" />
      </button>
      <button
        className="dark:hidden bg-transparent text-black"
        onClick={() => setTheme("dark")}
      >
        <Moon className="w-6 h-6" />
      </button>
    </>
  );
}
