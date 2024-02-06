import { useEffect, useRef, useState } from "react";

export default function useRefObserve() {
  const [observe, setObserve] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !observe) {
        setObserve(true);
        observer.disconnect();
      }
    });

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [observe]);

  return { sectionRef, observe };
}
