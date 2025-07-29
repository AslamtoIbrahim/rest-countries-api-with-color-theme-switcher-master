import { Link } from "react-router-dom";
import type { CountryDetail } from "../utils/types";

type ButtonProps = {
  data: CountryDetail[];
  country: CountryDetail;
};
const BorderCountryButton = ({ data, country }: ButtonProps) => {
  return (
    <Link
      to="/details"
      state={{ data, country }}
      className="cursor-pointer px-6 py-2 rounded-md text-[0.7rem] outline-none shadow-lg inset-shadow-sm
       bg-white dark:bg-blue-900 text-blue-950/70 dark:text-grey-50/85 hover:bg-grey-400/2 dark:hover:bg-grey-50/10 font-nunito 
        xl:text-base 2xl:text-lg"
    >
      {country.name}
    </Link>
  );
};

export default BorderCountryButton;
