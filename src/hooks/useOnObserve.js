import { useEffect, useRef, useState } from "react";

export default function useOnObserve() {
  const observeRef = useRef(null);
  const [observe, setObserve] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setObserve(true);
          if (observeRef.current && observeRef.current.readyState === 4) {
            observeRef.current.play();
          } else {
            observeRef.current.oncanplay = () => observeRef.current.play();
          }
        } else {
          setObserve(false);
          if (observeRef.current) {
            observeRef.current.pause();
          }
        }
      });
    }, options);

    if (observeRef.current) {
      observer.observe(observeRef.current);
    }

    return () => {
      if (observeRef.current) {
        observer.unobserve(observeRef.current);
      }
    };
  }, []);

  return { observeRef, observe };
}
