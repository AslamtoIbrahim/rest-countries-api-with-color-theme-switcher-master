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
    <div className="relative mx-4 xs:mx-6 w-52 md:mx-8 md:w-fit lg:mx-0 font-sans md:text-sm">
      <section
        onClick={dropListClick}
        className="flex cursor-pointer items-center justify-between gap-8 rounded-md bg-white px-6 py-4 text-blue-950 shadow-lg/8 shadow-blue-900 md:px-5 dark:bg-blue-900 dark:text-white/65"
      >
        <p>{region}</p>
        <FontAwesomeIcon
          className="icon-size"
          icon={drop ? faChevronUp : faChevronDown}
        />
      </section>

      <section
        className={`absolute mt-2 w-full rounded-md bg-white py-2 text-blue-950 shadow-lg/8 shadow-blue-900 transition-all duration-300 ease-in-out lg:mt-4 dark:bg-blue-900 dark:text-white/65 ${
          drop
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0"
        }`}
      >
        {regions.map((reg, index) => (
          <button
            onClick={() => onSelectRegion(reg)}
            key={index}
            className="hover:bg-grey-400/5 w-full cursor-pointer px-5 py-1 text-start md:px-6 "
          >
            {reg}
          </button>
        ))}
      </section>
    </div>
  );
};

export default DropList;
