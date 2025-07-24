type ButtonProps = {
  text: string;
};
const BorderCountryButton = ({ text }: ButtonProps) => {
  return (
    <button
      className="cursor-pointer px-6 py-2 rounded-md text-[0.7rem] outline-none shadow-lg inset-shadow-sm
       bg-white dark:bg-blue-900 text-blue-950/70 dark:text-grey-50/85 hover:bg-grey-400/2 dark:hover:bg-grey-50/10 font-nunito "
    >
      {text}
    </button>
  );
};

export default BorderCountryButton;
