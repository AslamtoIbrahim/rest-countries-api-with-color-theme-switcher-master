import BackButton from "./BackButton";
import BorderCountryButton from "./BorderCountryButton";
import Head from "./Head";

const Details = () => {
  return (
    <div>
      <Head />
      <BackButton />
      <section className="mx-4 my-14">
        <div className="h-50 bg-lime-300">
          <img
            className="h-full object-cover"
            src="https://flagcdn.com/bm.svg"
            alt="flag country"
          />
        </div>
        <div className="px-4 py-6 font-nunito space-y-6  ">
        <p className="capitalize font-bold text-[1.2rem] dark:text-white/90">brazil</p>
        <div className="space-y-2 font-semibold capitalize text-sm text-blue-950/85 dark:text-white/80">
            <p className="">Native Name: <span className="font-normal">Belgie</span></p>
            <p className="">Population: <span className="font-normal">206.123.542</span></p>
            <p className="">Region: <span className="font-normal">America</span></p>
            <p className="">Sub Region: <span className="font-normal">America</span></p>
            <p className="">Capital: <span className="font-normal">Brazillia</span></p>
        </div>
        <div className="space-y-2 font-semibold capitalize text-sm text-blue-950/85 dark:text-white/80">
            <p className="">top level domain: <span className="font-normal">.be</span></p>
            <p className="">currencies: <span className="font-normal">Euro</span></p>
            <p className="">Languages: <span className="font-normal">french, dutch</span></p>
        </div>
        <div className="space-y-2 font-semibold capitalize  text-blue-950/85 dark:text-white/80">
            <p className="">border countries:</p>
            <div className="grid grid-cols-3 gap-2">
                <BorderCountryButton text="French" />
                <BorderCountryButton text="England"/>
                <BorderCountryButton text="French" />
                <BorderCountryButton text="England"/>
            </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Details;
