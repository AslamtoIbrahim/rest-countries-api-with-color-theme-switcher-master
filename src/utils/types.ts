export type Flags = {
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
