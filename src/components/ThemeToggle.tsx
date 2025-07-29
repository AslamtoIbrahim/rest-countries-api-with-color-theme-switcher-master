import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ThemeToggle = () => {
  const preferDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDArk] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && preferDark())
    );
  });

  const toggleTheme = () => {
    const newMode = !isDark;
    document.documentElement.classList.toggle("dark", newMode);
    setIsDArk(newMode);
    localStorage.theme = newMode ? "dark" : "";
  };
  return (
    <div
      className="flex items-center gap-2 xl:gap-4 cursor-pointer"
      onClick={toggleTheme}
    >
      <FontAwesomeIcon className="lg:text-xl 2xl:text-2xl" icon={isDark ? solidMoon : faMoon} />
      <p className="font-sans capitalize md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Dark mode</p>
    </div>
  );
};

export default ThemeToggle;
