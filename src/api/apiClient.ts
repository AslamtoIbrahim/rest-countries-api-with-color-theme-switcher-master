import type {
  BorderNames,
  Country,
  CountryDetail,
  Paginate,
} from "../utils/types";

// export const getCountries = async (): Promise<Country[]> => {
//   return fetch(
//     "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
//   )
//     .then((res) => res.json())
//     .catch((err) => err);
// };

type Query = {
  queryKey: [string, { name: string; region: string }];
};

export const getCountries = async ({ queryKey }: Query): Promise<Country[]> => {
  const [, { name, region }] = queryKey;

  if (name && region) {
    return fetchCountriesByRegionAndName(region, name);
  }

  if (name) {
    return fetchCountriesByName(name);
  }

  if (region) {
    return fetchCountriesByRegion(region);
  }

  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
  );
  if (!response.ok) {
    throw new Error(`Country ${name} not found`);
  }

  return response.json();
};

const fetchCountriesByName = async (name: string): Promise<Country[]> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,population,region,capital,flags`
  );
  if (!response.ok) {
    throw new Error(`Country ${name} not found`);
  }

  return response.json();
};

const fetchCountriesByRegion = async (region: string): Promise<Country[]> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/region/${region}?fields=name,population,region,capital,flags`
  );
  if (!response.ok) {
    throw new Error(`Region ${region} not found`);
  }

  return response.json();
};

const fetchCountriesByRegionAndName = async (
  region: string,
  name: string
): Promise<Country[]> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/region/${region}?fields=name,population,region,capital,flags`
  );

  if (!response.ok) {
    throw new Error(`Region ${region} not found`);
  }

  const data: Country[] = await response.json();

  const dataFiltered = data.filter((c) =>
    c.name.common.toLocaleLowerCase().includes(name)
  );
  if (dataFiltered.length === 0) {
    throw new Error(`Country ${name} not found in ${region} reging`);
  }
  return dataFiltered;
};

export const paginateCountries = ({ data, pageParam = 1 }: Paginate) => {
  const pageSize = 9;
  const start = 0;
  const end = pageParam * pageSize;

  return data.slice(start, end);
};

export const getCountryDetails = async ({
  queryKey,
}: {
  queryKey: [string, { name?: string }];
}): Promise<CountryDetail> => {
  const [, { name }] = queryKey;

  if (!name) {
    throw new Error(`This ${name} is not provided`);
  }
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,population,region,capital,flags,borders,subregion,tld,currencies,languages`
  );

  if (!res.ok) {
    throw new Error(`Country ${name} Not found`);
  }

  const data = await res.json();
  return data[0];
};

export const getAllCountryNames = async (): Promise<BorderNames[]> => {
  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,cca3`
  );
  if (!res.ok) {
    throw new Error(`Somthin went wrong 🧧`);
  }

  return await res.json();
};

export const translateBorderCodesToNames = (
  borders: string[],
  borderCodeNames: BorderNames[]
) => {
  const apiResponseMap = new Map<string, string>();
 
  borderCodeNames.forEach((c: BorderNames) => {
    apiResponseMap.set(c.cca3, c.name.common);
  });

  console.log('🍯 border: ', borders);
  

  return borders.map((code) => apiResponseMap.get(code.toUpperCase())).filter(f => f !== undefined);
};
