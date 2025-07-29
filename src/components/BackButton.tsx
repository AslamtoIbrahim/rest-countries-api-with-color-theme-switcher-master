import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const BackButton = () => {
  return (
    <Link className="block" to="/" >
      <button className="cursor-pointer mx-4 md:mx-8 lg:mx-12 xl:mx-14 2xl:mx-30 my-8 px-6 lg:px-8 xl:px-10 py-2 md:py-3 xl:py-4 rounded-md  outline-none flex items-center gap-4 shadow-lg  shadow-blue-950/20 inset-shadow-sm
         bg-white dark:bg-blue-900 text-blue-950 dark:text-grey-50/85 hover:bg-grey-400/2 dark:hover:bg-grey-50/10 font-nunito ">
          <FontAwesomeIcon className="lg:text-lg xl:text-xl 2xl:text-2xl" icon={faArrowLeft} />
          <p className="md:text-base lg:text-lg">Back</p>
      </button>
    </Link>
  )
}

export default BackButton
