import { useEffect, useState } from "react";

export default function useResizer(value) {
  const [size, setSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= value) {
        setSize(true);
      } else {
        setSize(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { size };
}
