import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type DropListProps = {
  onSelect: (reging: string) => void;
};

const DropList = ({ onSelect }: DropListProps) => {
  const regions = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
    "All Regions",
  ];
  const [drop, setDrop] = useState(false);
  const [region, setRegion] = useState("Filter by Region");
  const onSelectRegion = (region: string) => {
    let newRegion = region;
    if (region === regions[5]) {
      newRegion = "";
    }
    onSelect(newRegion);
    setRegion(region);
    setDrop(false);
  };
  const dropListClick = () => {
    setDrop((prev) => !prev);
  };
  return (
    <div className="w-48 mx-4 my-5 space-y-2 relative">
      <section
        onClick={dropListClick}
        className="flex justify-between items-center gap-8  px-6 py-3 bg-white dark:bg-blue-900 shadow-lg/8 shadow-blue-900 rounded-md 
      text-blue-950 dark:text-white/70 cursor-pointer"
      >
        <p className="font-nunito text-sm">{region}</p>
        <FontAwesomeIcon
          className="w-3"
          icon={drop ? faChevronUp : faChevronDown}
        />
      </section>

      <section
        className={`py-2 bg-white dark:bg-blue-900 shadow-lg/8 shadow-blue-900 rounded-md 
      text-blue-950 dark:text-white/70 absolute w-full
      transition-all duration-300 ease-in-out  ${
        drop ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
      }`}
      >
        {regions.map((reg, index) => (
          <button
            onClick={() => onSelectRegion(reg)}
            key={index}
            className="px-6 py-1 w-full text-start font-nunito text-sm cursor-pointer hover:bg-grey-400/5 "
          >
            {reg}
          </button>
        ))}
      </section>
    </div>
  );
};

export default DropList;
