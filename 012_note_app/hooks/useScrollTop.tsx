import { useState, useEffect } from "react";

const useScrollTop = (threshold: number = 10) => {
  const [scrolled, setScrolled] = useState<Boolean>(false);

  useEffect(() => {
    const handleSetScrolled = () => {
      if (window.scrollY > threshold) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleSetScrolled);
    return () => window.removeEventListener("scroll", handleSetScrolled);
  }, [threshold]);

  return scrolled;
};

export default useScrollTop;
