import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const DropList = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [drop, setDrop] = useState(false);
  const dropListClick = () => {
    setDrop((prev) => !prev);
  };
  return (
    <div className="w-fit mx-4 my-10 space-y-2 relative">
      <section
        onClick={dropListClick}
        className="flex items-center gap-8  px-6 py-3 bg-white dark:bg-blue-900 shadow-lg/8 shadow-blue-900 rounded-md 
      text-blue-950 dark:text-white/70 cursor-pointer"
      >
        <p className="font-nunito text-sm">Filter by Region</p>
        <FontAwesomeIcon
          className="w-3"
          icon={drop ? faChevronUp : faChevronDown}
        />
      </section>

      <section
        className={`bg-white dark:bg-blue-900 shadow-lg/8 shadow-blue-900 rounded-md 
      text-blue-950 dark:text-white/70 absolute w-full
      transition-all duration-300 ease-in-out  ${
        drop ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
      }`}
      >
        {regions.map((reg, index) => (
          <button key={index} className="px-6 py-1 w-full text-start font-nunito text-sm cursor-pointer hover:bg-grey-400/5 ">
            {reg}
          </button>
        ))}
      </section>
    </div>
  );
};

export default DropList;
