import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, dely = 500): T {
  const [debounce, setDebounce] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebounce(value);
    }, dely);

    return () => clearTimeout(id);
  }, [value, dely]);

  return debounce;
}
