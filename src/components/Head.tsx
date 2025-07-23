import ThemeToggle from "./ThemeToggle"

const Head = () => {
  return (
    <div className="bg-white dark:bg-blue-900 dark:text-white px-4 py-8 shadow-md font-nunito flex items-center justify-between">
      <h1 className="font-semibold text-sm">Where in the world?</h1>
      <ThemeToggle />
    </div>
  )
}

export default Head
