type Name = {
  common: string;
};

type Flags = {
  png: string;
  svg: string;
  alt: string;
};

export type Country = {
  name: Name;
  population: number;
  region: string;
  capital: string[];
  flags: Flags;
};


export type Paginate = {
  data: Country[];
  pageParam?: number;
};

type Currency = {
  EUR: {
    name: string;
  };
};

type Language = {
  [key: string]: string;
};

type NativeName = {
  nld: {
    common: string;
  };
};

export type CountryDetail = {
  flags: Flags;
  name: Name;
  cioc: string;
  borders: string[];
  nativeName: NativeName;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: Currency;
  languages: Language;
};
