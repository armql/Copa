import { useEffect, useState } from "react";

export default function useScrollEffect(value) {
  const [scrollEffect, setScrollerEffect] = useState(false);

  useEffect(() => {
    let scrollTimer;
    const handleScroll = () => {
      if (window.scrollY > value) {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          setScrollerEffect(true);
        }, 10);
      } else {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          setScrollerEffect(false);
        }, 10);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [value]);

  return { scrollEffect };
}
