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
    <div className="w-50 md:w-fit mx-4 md:mx-8 lg:mx-0  relative  ">
      <section
        onClick={dropListClick}
        className="flex justify-between items-center gap-8 px-6 md:px-8 lg:px-10 xl:px-12 py-3 md:py-4 lg:py-5 xl:py-6 bg-white dark:bg-blue-900 shadow-lg/8 shadow-blue-900 rounded-md 
      text-blue-950 dark:text-white/70 cursor-pointer"
      >
        <p className="font-nunito filter-size">{region}</p>
        <FontAwesomeIcon
          className="icon-size"
          icon={drop ? faChevronUp : faChevronDown}
        />
      </section>

      <section
        className={`py-2 bg-white dark:bg-blue-900 shadow-lg/8 shadow-blue-900 rounded-md 
      text-blue-950 dark:text-white/70 absolute w-full mt-2 lg:mt-4
      transition-all duration-300 ease-in-out  ${
        drop ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
      }`}
      >
        {regions.map((reg, index) => (
          <button
            onClick={() => onSelectRegion(reg)}
            key={index}
            className="px-6 md:px-8 py-1 md:py-2 lg:px-10 w-full text-start  font-nunito filter-size cursor-pointer hover:bg-grey-400/5 "
          >
            {reg}
          </button>
        ))}
      </section>
    </div>
  );
};

export default DropList;
