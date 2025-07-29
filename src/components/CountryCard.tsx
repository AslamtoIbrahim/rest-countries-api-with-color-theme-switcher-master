import type { Country } from "../utils/types";

type CountryCardProps = {
  country: Country;
};
const CountryCard = ({ country }: CountryCardProps) => {
  return (
    
      <div className="mx-8 lg:mx-0 overflow-auto rounded-lg bg-white dark:bg-blue-900  shadow-xl/70 shadow-blue-950/10">
        <section className="h-40 md:h-48 lg:h-52 xl:h-56 2xl:h-72">
          <img className="object-cover w-full h-full" src={country.flags.svg} alt="flag country" />
        </section>
        <section className="px-4 py-8 md:px-6 lg:px-8 xl:px-10 2xl:px-12 md:py-10 xl:py-12 font-nunito space-y-4  ">
          <p className="capitalize font-bold text-blue-950 dark:text-white/90 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            {country.name}
          </p>
          <div className="space-y-1 md:space-y-2 lg:space-x-4 font-semibold text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-blue-950/85 dark:text-white/80">
            <p>
              Population: <span className="font-normal">{country.population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span className="font-normal">{country.region}</span>
            </p>
            <p>
              Capital: <span className="font-normal">{country.capital}</span>
            </p>
          </div>
        </section>
      </div>
  );
};

export default CountryCard;
