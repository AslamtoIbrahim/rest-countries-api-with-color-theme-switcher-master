import type { Country } from "../utils/types";

type CountryCardProps = {
  country: Country;
};
const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div className="mx-8 h-[22rem] overflow-auto rounded-lg bg-white shadow-xl/70 shadow-blue-950/10 lg:mx-0 lg:h-[26rem] xl:h-[30rem] 2xl:h-[34rem] dark:bg-blue-900">
      <section className="h-40 md:h-48 lg:h-52 xl:h-56 2xl:h-72">
        <img
          className="h-full w-full object-cover"
          src={country.flags.svg}
          alt="flag country"
        />
      </section>
      <section className="font-nunito space-y-4 px-4 py-8 md:px-4 md:py-8 lg:px-6 xl:px-8 xl:py-10 2xl:px-10">
        <p className="truncate text-lg font-bold text-blue-950 capitalize lg:text-base xl:text-xl 2xl:text-2xl dark:text-white/90">
          {country.name.common}
        </p>
        <div className="space-y-1 text-sm font-semibold text-blue-950/85 md:space-y-2 lg:space-y-4 lg:text-base xl:text-lg 2xl:text-xl dark:text-white/80">
          <p>
            Population:{" "}
            <span className="font-normal">
              {country.population.toLocaleString()}
            </span>
          </p>
          <p>
            Region: <span className="font-normal">{country.region}</span>
          </p>
          <p className="truncate">
            Capital: <span className="font-normal">{country.capital}</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default CountryCard;
