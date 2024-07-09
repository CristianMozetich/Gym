// app/components/ThemeSwitcher.tsx
"use client";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "../globals.css";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-2 transition-icon">
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <MoonIcon />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <SunIcon />
        </button>
      )}
    </div>
  );
}
