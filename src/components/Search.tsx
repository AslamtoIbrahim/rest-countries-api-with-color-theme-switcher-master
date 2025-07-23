import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Search = () => {
  return (
    <label htmlFor="search" className="mx-4 my-8 px-6 py-3 bg-white dark:bg-blue-900 shadow-lg/8 shadow-blue-900 rounded-md 
    flex items-center gap-5">
      <FontAwesomeIcon className="text-grey-400/50 dark:text-green-50/70" icon={faSearch} />
      <input className="w-full outline-none font-semibold font-nunito text-sm
       placeholder:text-grey-400/50 dark:text-grey-50/60 dark:placeholder:text-grey-50/60" type="search" name="" id="search" placeholder="Search for a country..."/>
    </label>
  )
}

export default Search
