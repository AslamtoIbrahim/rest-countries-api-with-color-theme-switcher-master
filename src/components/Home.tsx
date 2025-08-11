import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { getCountries, paginateCountries } from "../api/apiClient";
import type { Country } from "../utils/types";
import CountryCard from "./CountryCard";
import DropList from "./DropList";
import Head from "./Head";
import Search from "./Search";

const Home = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const { isPending, error, data } = useQuery({
    queryKey: ["countries", { name: search, region: region }],
    queryFn: getCountries,
  });

  console.log('🏀 outer width: ',window.outerWidth);
  console.log('🏀 inner width: ',window.innerWidth);
  console.log('🏀 client width : ',document.documentElement.clientWidth);

  let countries: Country[] = [];

  if (data) countries = paginateCountries({ data: data, pageParam: page });

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView, countries.length, data?.length]);

  const onChnageSearch = (search: string) => {
    setSearch(search);
  };

  const onSelectRegion = (region: string) => {
    console.log("region 🐜", region);
    setRegion(region);
  };

  return (
    <div>
      <Head />
      <section className="mgx sticky my-6 top-0 space-y-4 md:space-y-6  lg:space-y-0 bg-gray-50 pt-1 pb-1 lg:flex lg:items-center lg:justify-between dark:bg-blue-950">
        <Search onChange={onChnageSearch} />
        <DropList onSelect={onSelectRegion} />
      </section>
       <section>
         {error && (
          <div className="wait">
            <p className="wait-design">
              {error.message}
            </p>
          </div>
        )}

        {isPending && (
          <div className="wait">
            <p className="wait-design">
              Loading...
            </p>
          </div>
        )}
       </section>
      <section className="mgx space-y-10 overflow-y-auto  md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-0 lg:gap-6 lg:space-y-0 lg:py-5 xl:grid-cols-4 xl:gap-8 2xl:gap-12">

        {countries &&
          countries.map((country) => (
            <Link
              key={country.name.common}
              className="block"
              to={`/countries/${country.name.common.toLowerCase()}`}
            >
              <CountryCard country={country} />
            </Link>
          ))}
      </section>
      {countries && data && countries.length < data?.length && (
        <div
          ref={ref}
          className="mx-auto text-center size font-bold text-blue-950 capitalize  dark:text-white/90"
        >
          Loading...
        </div>
      )}
    </div>
  );
};

export default Home;
