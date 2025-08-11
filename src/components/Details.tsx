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
        <section className="mx-4 my-8 md:mx-8 lg:mx-0 lg:mt-16 xl:grid xl:grid-cols-2 xl:items-start xl:gap-12 2xl:gap-30">
          <div className="h-50 shadow-xl md:h-66 md:max-w-lg lg:h-76">
            <img
              className="h-full md:object-cover"
              src={country.flags.svg}
              alt={country.flags.alt}
            />
          </div>
          <div className="font-nunito space-y-4 px-4 py-6 lg:py-0 md:px-0 lg:space-y-4 lg:my-auto">
            <p className="text-xm font-bold capitalize md:text-base lg:text-xl dark:text-white/90">
              {country.name.common}
            </p>
            <section className="size space-y-6 md:grid md:grid-cols-2 xl:gap-6 2xl:gap-8">
              <div className="space  text-blue-950/85 capitalize dark:text-white/80">
                <p className="">
                  Native Name:{" "}
                  <span className="dark:text-white/60">
                    {natives[natives.length - 1].common}
                  </span>
                </p>
                <p className="">
                  Population:{" "}
                  <span className="dark:text-white/60">
                    {country.population.toLocaleString()}
                  </span>
                </p>
                <p className="">
                  Region:{" "}
                  <span className="dark:text-white/60">
                    {country.region}
                  </span>
                </p>
                <p className="">
                  Sub Region:{" "}
                  <span className="dark:text-white/60">
                    {country.subregion}
                  </span>
                </p>
                <p className="">
                  Capital:{" "}
                  <span className="dark:text-white/60">
                    {country.capital}
                  </span>
                </p>
              </div>
              <div className="size space text-blue-950/85 capitalize dark:text-white/80">
                <p className="">
                  top level domain:{" "}
                  <span className="dark:text-white/60">
                    {country.tld}
                  </span>
                </p>
                <p>
                  currencies:{" "}
                  <span className="dark:text-white/60">
                    {Object.values(country.currencies)[0].name}
                  </span>
                </p>
                <p className="">
                  Languages:{" "}
                  <span className="dark:text-white/60">
                    {Object.values(country.languages).reverse().join(", ")}
                  </span>
                </p>
              </div>
            </section>
            <div className="dark:text-white/80 space-y-2 text-sm font-semibold text-blue-950/85 capitalize xl:space-y-0 xl:flex xl:items-center xl:gap-5 ">
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
