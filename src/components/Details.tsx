import { useLocation } from "react-router-dom";
import { search } from "../utils/funtions";
import type { CountryDetail } from "../utils/types";
import BackButton from "./BackButton";
import BorderCountryButton from "./BorderCountryButton";
import Head from "./Head";

type LocationSate = {
  data: CountryDetail[];
  country: CountryDetail;
};
const Details = () => {
  const location = useLocation() as { state: LocationSate };
  const { data, country } = location.state || {};
  return (
    <div>
      <Head />
      <BackButton />
      <section className="lg:mt-24 xl:mt-36 2xl:mt-44 mx-4 my-14 md:mx-8 lg:mx-12 xl:mx-14 2xl:mx-30 xl:grid xl:grid-cols-2 xl:gap-10 2xl:gap-26 xl:items-center ">
        <div className="h-50 md:h-96 xl:h-full">
          <img
            className="h-full object-cover md:object-full md:w-full"
            src={country.flags.svg}
            alt="flag country"
          />
        </div>
        <div className="px-4 py-6 font-nunito space-y-6 lg:space-y-10 xl:space-y-16  2xl:space-y-24">
          <p className="capitalize font-bold text-[1.2rem] dark:text-white/90 
          md:text-xl lg:text-lg xl:text-2xl 2xl:text-4xl ">
            {country.name}
          </p>
          <section className="space-y-6 lg:space-y-0 xl:grid xl:grid-cols-2 xl:gap-4 2xl:gap-8">
            <div className="space-y-2 lg:space-y-4 xl:space-y-8 font-semibold capitalize text-sm lg:text-lg xl:text-xl 2xl:text-3xl text-blue-950/85 dark:text-white/80">
              <p className="">
                Native Name:{" "}
                <span className="font-normal">{country.nativeName}</span>
              </p>
              <p className="">
                Population:{" "}
                <span className="font-normal">
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p className="">
                Region: <span className="font-normal">{country.region}</span>
              </p>
              <p className="">
                Sub Region:{" "}
                <span className="font-normal">{country.subregion}</span>
              </p>
              <p className="">
                Capital: <span className="font-normal">{country.capital}</span>
              </p>
            </div>
            <div className="space-y-2 lg:space-y-4 xl:space-y-8 font-semibold capitalize text-sm lg:text-lg xl:text-xl 2xl:text-3xl text-blue-950/85 dark:text-white/80">
              <p className="">
                top level domain:{" "}
                <span className="font-normal">{country.topLevelDomain}</span>
              </p>
              <p className="">
                currencies:
                {country.currencies.map((cur) => (
                  <span key={cur.code} className="font-normal"> {cur.code}</span>
                ))}
              </p>
              <p className="">
                Languages:{" "}
                <span className="font-normal">
                  {country.languages.map((lg) => lg.name).join(", ")}
                </span>
              </p>
            </div>
          </section>
          <div className="space-y-2 lg:space-y-4 xl:space-y-8 font-semibold capitalize lg:text-lg xl:text-xl 2xl:text-3xl text-blue-950/85 dark:text-white/80">
            <p className="">border countries:</p>
            <div className="flex flex-wrap gap-2">
              {/* <BorderCountryButton text="French" /> */}
              {country.borders.map((b) => {
                const border = search(data, b);
                if (!border) return;
                return <BorderCountryButton key={b} data={data} country={border} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
