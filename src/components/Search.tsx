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
      className="mx-4 flex items-center gap-5 rounded-md bg-white px-4 py-4 shadow-lg/8 shadow-blue-900 md:mx-8 md:px-7 md:py-4 lg:flex-1/3 lg:mx-0 lg:max-w-96 lg:gap-6 dark:bg-blue-900"
    >
      <FontAwesomeIcon
        className="text-grey-400/50 icon-size dark:text-green-50/90"
        icon={faSearch}
      />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="font-nunito filter-size placeholder:text-grey-400/70 dark:text-green-50 dark:placeholder:text-gray-50/80 w-full outline-none"
        type="search"
        name="search"
        id="search"
        placeholder="Search for a country..."
      />
    </label>
  );
};

export default Search;
