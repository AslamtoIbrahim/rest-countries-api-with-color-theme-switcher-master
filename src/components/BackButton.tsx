import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link className="block" to="/">
      <button className="dark:text-grey-50/85 hover:bg-grey-400/2 dark:hover:bg-grey-50/10 font-nunito mx-4 mt-8 flex cursor-pointer items-center gap-4 rounded-md bg-white px-6 py-2 text-blue-950 shadow-lg inset-shadow-sm shadow-blue-950/20 outline-none md:mx-8 md:my-10 lg:mx-0 lg:px-8 dark:bg-blue-900">
        <FontAwesomeIcon
          className="icon-size"
          icon={faArrowLeft}
        />
        <p className="text-xs md:text-sm">Back</p>
      </button>
    </Link>
  );
};

export default BackButton;
