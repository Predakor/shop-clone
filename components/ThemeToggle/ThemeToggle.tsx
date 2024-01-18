"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const isLightTheme = theme === "light";
  const handleThemeChange = () => {
    const newTheme = isLightTheme ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Button variant={"ghost"} onClick={handleThemeChange}>
      {isLightTheme ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
