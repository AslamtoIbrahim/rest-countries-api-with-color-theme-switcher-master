import { Link } from "react-router-dom";

type ButtonProps = {
  name: string;
};
const BorderCountryButton = ({ name }: ButtonProps) => {
  return (
    <Link
      to={`/countries/${name.toLocaleLowerCase()}`}
      className="dark:text-grey-50/85 hover:bg-grey-400/2 dark:hover:bg-grey-50/10 font-normal cursor-pointer rounded-md bg-white px-6 py-2 text-xs text-blue-950/70 shadow-lg inset-shadow-sm outline-none md:text-sm 2xl:text-base dark:bg-blue-900"
    >
      {name}
    </Link>
  );
};

export default BorderCountryButton;
