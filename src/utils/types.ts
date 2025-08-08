type Name = {
  common: string;
  nativeName: NativeName;
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
  [key: string]: {
    name: string;
  };
};

type Language = {
  [key: string]: string;
};

type NativeName = {
  [key: string]: {
    common: string;
  };
};

export type CountryDetail = {
  flags: Flags;
  name: Name;
  cioc: string;
  borders: string[];
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: Currency;
  languages: Language;
};


export type BorderNames = {
  name: Name;
  cca3: string;
}