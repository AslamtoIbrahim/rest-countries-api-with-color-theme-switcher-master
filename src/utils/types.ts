type Flags = {
  svg: string;
  png: string;
};

export type Country = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: Flags;
};

type Currency = {
  code: string;
};

type Language = {
  name: string;
};

export type CountryDetail = {
  flags: Flags;
  name: string;
  alpha3Code: string;
  borders: string[];
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
};
