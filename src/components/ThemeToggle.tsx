import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ThemeToggle = () => {
  const [moonIcon, setMoonIcon] = useState(true);
  const switchMoon = () => {
    setMoonIcon(prev => !prev)
  };
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={switchMoon}>
      <FontAwesomeIcon icon={moonIcon ? faMoon : solidMoon} />
      <p className="font-sans capitalize">Dark mode</p>
    </div>
  );
};

export default ThemeToggle;
