import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";

type SearchProps = {
  onChange: (value: string) => void;
};
const Search = ({ onChange }: SearchProps) => {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search);
  useEffect(() => {
    onChange(debounced);
  }, [debounced]);
  return (
    <label
      htmlFor="search"
      className="mx-4 md:mx-8 lg:mx-0  my-8 px-6 md:px-7 lg:px-8 xl:px-10 py-3 md:py-4 lg:py-5 xl:py-6 bg-white dark:bg-blue-900 shadow-lg/8 shadow-blue-900 rounded-md 
    flex items-center gap-5 lg:gap-6"
    >
      <FontAwesomeIcon
        className="text-grey-400/50 dark:text-green-50/70 lg:text-lg xl:text-xl"
        icon={faSearch}
      />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full outline-none font-semibold font-nunito text-sm md:text-base lg:text-lg
       placeholder:text-grey-400/50 dark:text-grey-50/60 dark:placeholder:text-grey-50/60"
        type="search"
        name="search"
        id="search"
        placeholder="Search for a country..."
      />
    </label>
  );
};

export default Search;
