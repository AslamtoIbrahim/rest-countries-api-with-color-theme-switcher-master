import { Link } from "react-router-dom";

type ButtonProps = {
  name: string;
};
const BorderCountryButton = ({ name }: ButtonProps) => {
  return (
    <Link
      to={`/countries/${name.toLocaleLowerCase()}`}
      className="dark:text-grey-50/85 hover:bg-grey-400/2 dark:hover:bg-grey-50/10 cursor-pointer rounded-xs bg-white px-6 py-1.5 text-xs font-normal text-blue-950/70 shadow-md outline-none dark:bg-blue-900"
    >
      {name}
    </Link>
  );
};

export default BorderCountryButton;
