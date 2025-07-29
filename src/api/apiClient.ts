export const getCountries = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
};


