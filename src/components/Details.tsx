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
      <div className="mgx">
        <BackButton />
        <section className="mx-4 my-14 md:mx-8 lg:mx-0 lg:mt-20 xl:mt-24 xl:grid xl:grid-cols-2 xl:items-center xl:gap-10 2xl:mt-30 2xl:gap-26">
          <div className="h-50 shadow-xl md:h-96 md:max-w-lg xl:h-full xl:max-w-full">
            <img
              className="md:object-full h-full object-cover md:w-full"
              src={country.flags.svg}
              alt="flag country"
            />
          </div>
          <div className="font-nunito space-y-6 px-4 py-6 md:px-0 lg:space-y-10 xl:space-y-12 2xl:space-y-14">
            <p className="text-xm font-bold capitalize md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl dark:text-white/90">
              {country.name}
            </p>
            <section className="space-y-6 lg:space-y-0 xl:grid xl:grid-cols-2 xl:gap-4 2xl:gap-8">
              <div className="space-y-2 size font-semibold text-blue-950/85 capitalize md:space-y-4  dark:text-white/80">
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
                  Capital:{" "}
                  <span className="font-normal">{country.capital}</span>
                </p>
              </div>
              <div className="space-y-2 size font-semibold text-blue-950/85 capitalize lg:space-y-4   xl:space-y-8  dark:text-white/80">
                <p className="">
                  top level domain:{" "}
                  <span className="font-normal">{country.topLevelDomain}</span>
                </p>
                <p className="">
                  currencies:
                  {country.currencies.map((cur) => (
                    <span key={cur.code} className="font-normal">
                      {" "}
                      {cur.code}
                    </span>
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
            <div className="space-y-2 font-semibold text-blue-950/85 capitalize lg:space-y-4 text-sm lg:text-base xl:space-y-8 xl:text-lg 2xl:text-xl dark:text-white/80">
              <p>border countries:</p>
              <div className="flex flex-wrap gap-2">
                {/* <BorderCountryButton text="French" /> */}
                {country.borders?.map((b) => {
                  const border = search(data, b);
                  if (!border) return;
                  return (
                    <BorderCountryButton key={b} data={data} country={border} />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Details;
