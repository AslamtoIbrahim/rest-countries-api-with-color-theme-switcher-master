import type { Country } from "../utils/types";

type CountryCardProps = {
  country: Country;
};
const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div className="mx-8 xs:mx-12 h-[19rem] overflow-auto rounded-lg bg-white shadow-xl/70 shadow-blue-950/10 md:h-[22rem] lg:mx-0 lg:h-[22rem] dark:bg-blue-900">
      <section className="h-38 md:h-42 lg:h-44 xl:h-46">
        <picture>
          <source media="(min-width: 768px)" srcSet={country.flags.png} />
          <source media="(min-width: 425px)" srcSet={country.flags.svg} />
          <img
            className="h-full w-full object-cover"
            src={country.flags.png}
            alt={country.flags.alt}
            height={168}
            width={320}
          />
        </picture>
      </section>
      <section className="font-sans px-4 py-5 md:px-6 xl:py-7">
        <p className="mb-2 xl:mb-3 truncate font-bold text-blue-950 capitalize md:text-base dark:text-white/90">
          {country.name.common}
        </p>
        <div className="text-sm/6 font-medium text-blue-950/85 md:space-y-1 md:text-sm dark:text-white/80">
          <p>
            Population:{" "}
            <span className="spn">
              {country.population.toLocaleString()}
            </span>
          </p>
          <p>
            Region: <span className="spn">{country.region}</span>
          </p>
          <p className="text-pretty">
            Capital:{" "}
            <span className="spn">{country.capital}</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default CountryCard;
