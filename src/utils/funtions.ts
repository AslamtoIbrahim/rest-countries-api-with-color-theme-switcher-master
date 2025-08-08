import type { CountryDetail } from "./types";

export const search = (
  countries: CountryDetail[],
  border: string
): CountryDetail | undefined => countries.find((c) => c.cioc === border);

 
