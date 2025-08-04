import ThemeToggle from "./ThemeToggle";

const Head = () => {
  return (
    <div className="font-nunito bg-white shadow-md dark:bg-blue-900 dark:text-white relative z-10">
      <section className="lg:max-w-4xl lg:mx-auto xl:max-w-7xl 2xl:max-w-[100rem] mx-4 flex items-center justify-between py-8 md:mx-8 lg:py-10 xl:py-12 2xl:py-14">
        <h1 className="text-sm font-semibold md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Where in the world?
        </h1>
        <ThemeToggle />
      </section>
    </div>
  );
};

export default Head;
