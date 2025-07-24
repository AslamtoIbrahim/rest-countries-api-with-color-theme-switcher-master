import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BackButton = () => {
  return (
    <button className="cursor-pointer mx-4 my-8 px-6 py-2 rounded-md  outline-none flex items-center gap-4 shadow-lg  shadow-blue-950/20 inset-shadow-sm
   bg-white dark:bg-blue-900 text-blue-950 dark:text-grey-50/85 hover:bg-grey-400/2 dark:hover:bg-grey-50/10 font-nunito ">
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Back</p>
    </button>
  )
}

export default BackButton
