import { useQuery } from "@tanstack/react-query";
import DropList from "./DropList";
import Head from "./Head";
import Search from "./Search";
import { getCountries } from "../api/apiClient";
import type { Country } from "../utils/types";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

const Home = () => {
  const { isPending, error, data } = useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  if (isPending) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="capitalize font-bold text-blue-950 dark:text-white/90">
          Loading...
        </p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="capitalize font-bold text-red-400 dark:text-red-600">
          {error.message}
        </p>
      </div>
    );
  }
  return (
    <div>
      <Head />
      <section className="sticky top-0 dark:bg-blue-950 bg-grey-50 pt-1 pb-1">
        <Search />
        <DropList />
      </section>
      {/* list of countries goes down here */}
      <section className="space-y-10 overflow-y-auto">
        {data.map((country) => (
          <Link className="block" to="/details" state={{data, country}}>
            <CountryCard country={country} key={country.name} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
