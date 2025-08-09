import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getAllCountryNames,
  getCountryDetails,
  translateBorderCodesToNames,
} from "../api/apiClient";
import type { BorderNames } from "../utils/types";
import BackButton from "./BackButton";
import BorderCountryButton from "./BorderCountryButton";
import Head from "./Head";

const Details = () => {
  const { name } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["countryDetails", { name: name }],
    queryFn: getCountryDetails,
  });
  const [countryBorders, setCountryBorders] = useState<BorderNames[]>([]);

  useEffect(() => {
    const loading = async () => {
      const countryNames = await getAllCountryNames();
      console.log("🌍 borders: ", countryNames);
      setCountryBorders(countryNames);
    };
    loading();
  }, []);

  if (isPending) {
    return (
      <div className="col-span-3 flex h-screen items-center justify-center">
        <p className="size mx-auto text-center font-bold text-blue-950 capitalize dark:text-white/90">
          Loading...
        </p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="col-span-3 flex h-screen items-center">
        <p className="size mx-auto text-center font-bold text-blue-950 capitalize dark:text-white/90">
          {error.message}
        </p>
      </div>
    );
  }
  const country = data;

  // get the last common native name
  const natives = Object.values(country.name.nativeName);

  return (
    <div>
      <Head />
      <div className="mgx">
        <BackButton />
        <section className="mx-4 my-8 md:mx-8 lg:mx-0 lg:mt-20 xl:mt-40 xl:grid xl:grid-cols-2 xl:items-center xl:gap-12 2xl:mt-30 2xl:gap-26">
          <div className="h-50 shadow-xl md:h-66 md:max-w-lg lg:h-74 xl:h-full xl:max-w-full">
            <img
              className="md:object-full h-full object-cover md:w-full"
              src={country.flags.svg}
              alt={country.flags.alt}
            />
          </div>
          <div className="font-nunito space-y-6 px-4 py-6 md:px-0 lg:space-y-10 xl:space-y-12 2xl:space-y-14">
            <p className="text-xm font-bold capitalize md:text-base lg:text-2xl dark:text-white/90">
              {country.name.common}
            </p>
            <section className="size space-y-6 md:grid md:grid-cols-2 xl:gap-6 2xl:gap-8">
              <div className="space font-semibold text-blue-950/85 capitalize dark:text-white/80">
                <p className="">
                  Native Name:{" "}
                  <span className="font-normal">
                    {natives[natives.length - 1].common}
                  </span>
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
              <div className="size space font-semibold text-blue-950/85 capitalize dark:text-white/80">
                <p className="">
                  top level domain:{" "}
                  <span className="font-normal">{country.tld}</span>
                </p>
                <p>
                  currencies:{" "}
                  <span className="font-normal">
                    {Object.values(country.currencies)[0].name}
                  </span>
                </p>
                <p className="">
                  Languages:{" "}
                  <span className="font-normal">
                    {Object.values(country.languages).reverse().join(", ")}
                  </span>
                </p>
              </div>
            </section>
            <div className="space-y-4 text-sm font-semibold text-blue-950/85 capitalize lg:space-y-4 lg:text-base xl:space-y-8 xl:text-lg 2xl:text-xl dark:text-white/80">
              <p>border countries:</p>
              <div className="flex flex-wrap gap-2">
                {translateBorderCodesToNames(
                  country.borders,
                  countryBorders,
                ).map((b) => {
                  return <BorderCountryButton key={b} name={b} />;
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
