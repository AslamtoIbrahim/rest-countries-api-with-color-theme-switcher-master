import ThemeToggle from "./ThemeToggle";

const Head = () => {
  return (
    <div className="font-nunito bg-white shadow-md dark:bg-blue-900 dark:text-white relative z-10 ">
      <section className="mgx px-5 md:px-8 lg:px-0 flex items-center justify-between py-6">
        <h1 className="text-sm md:text-lg font-semibold  ">
          Where in the world?
        </h1>
        <ThemeToggle />
      </section>
    </div>
  );
};

export default Head;
