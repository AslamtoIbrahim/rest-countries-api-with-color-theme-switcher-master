import ThemeToggle from "./ThemeToggle";

const Head = () => {
  return (
    <div className="font-nunito bg-white shadow-md dark:bg-blue-900 dark:text-white relative z-10 ">
      <section className="mgx px-4 md:px-8 lg:px-0 flex items-center justify-between py-8 lg:py-10 xl:py-12 2xl:py-14">
        <h1 className="head-size font-semibold ">
          Where in the world?
        </h1>
        <ThemeToggle />
      </section>
    </div>
  );
};

export default Head;
