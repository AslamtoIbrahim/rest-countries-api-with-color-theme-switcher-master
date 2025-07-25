export const getCountries = async () => {
  const res = await fetch("../../public/sources/data.json");
  return res.json();
};


