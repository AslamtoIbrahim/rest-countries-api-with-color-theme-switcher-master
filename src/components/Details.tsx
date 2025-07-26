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
      <section className="mx-4 my-14">
        <div className="h-50 ">
          <img
            className="h-full object-cover"
            src={country.flags.png}
            alt="flag country"
          />
        </div>
        <div className="px-4 py-6 font-nunito space-y-6  ">
          <p className="capitalize font-bold text-[1.2rem] dark:text-white/90">
            {country.name}
          </p>
          <div className="space-y-2 font-semibold capitalize text-sm text-blue-950/85 dark:text-white/80">
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
          <div className="space-y-2 font-semibold capitalize text-sm text-blue-950/85 dark:text-white/80">
            <p className="">
              top level domain:{" "}
              <span className="font-normal">{country.topLevelDomain}</span>
            </p>
            <p className="">
              currencies:
              {country.currencies.map((cur) => (
                <span className="font-normal"> {cur.code}</span>
              ))}
            </p>
            <p className="">
              Languages:{" "}
              <span className="font-normal">
                {country.languages.map((lg) => lg.name).join(", ")}
              </span>
            </p>
          </div>
          <div className="space-y-2 font-semibold capitalize  text-blue-950/85 dark:text-white/80">
            <p className="">border countries:</p>
            <div className="flex flex-wrap gap-2">
              {/* <BorderCountryButton text="French" /> */}
              {country.borders.map((b) => {
                const border = search(data, b);
                if (!border) return;
                return <BorderCountryButton data={data} country={border} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
