import ThemeToggle from "./ThemeToggle"

const Head = () => {
  return (
    <div className="bg-white dark:bg-blue-900 dark:text-white px-4  py-8 shadow-md font-nunito flex items-center justify-between
    md:px-8 lg:px-12 lg:py-10 xl:px-14 xl:py-12 2xl:px-30 2xl:py-14">
      <h1 className="font-semibold text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Where in the world?</h1>
      <ThemeToggle />
    </div>
  )
}

export default Head
