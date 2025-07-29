export const getCountries = async () => {
  const res = await fetch("/data.json");
  return res.json();
};


