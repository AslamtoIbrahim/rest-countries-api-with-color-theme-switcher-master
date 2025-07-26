import type { Country } from "../utils/types";

type CountryCardProps = {
  country: Country;
};
const CountryCard = ({ country }: CountryCardProps) => {
  return (
    
      <div className="mx-8 overflow-auto rounded-lg bg-white dark:bg-blue-900  shadow-xl/70 shadow-blue-950/10">
        <section className="h-40">
          <img className="object-fill w-full h-full" src={country.flags.png} alt="flag country" />
        </section>
        <section className="px-4 py-8 font-nunito space-y-4  ">
          <p className="capitalize font-bold text-blue-950 dark:text-white/90">
            {country.name}
          </p>
          <div className="space-y-1 font-semibold text-sm text-blue-950/85 dark:text-white/80">
            <p className="">
              Population: <span className="font-normal">{country.population.toLocaleString()}</span>
            </p>
            <p className="">
              Region: <span className="font-normal">{country.region}</span>
            </p>
            <p className="">
              Capital: <span className="font-normal">{country.capital}</span>
            </p>
          </div>
        </section>
      </div>
  );
};

export default CountryCard;
