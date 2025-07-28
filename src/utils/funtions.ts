import type { Country, CountryDetail } from "./types";

export const search = (
  countries: CountryDetail[],
  border: string
): CountryDetail | undefined => countries.find((c) => c.alpha3Code === border);

export const filters = (list: Country[], search: string, region: string) => {
  let filteredList = list;

  if (search) {
    filteredList = filteredList.filter((counter) =>
      counter.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (region) {
    filteredList = filteredList.filter((counter) =>
      counter.region.toLowerCase().includes(region.toLowerCase())
    );
  }

  return filteredList;
};
