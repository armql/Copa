import { useEffect, useState } from "react";

export default function useOnLoad(value) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, [value]);

    return () => clearTimeout(timer);
  }, []);

  return { loading };
}
