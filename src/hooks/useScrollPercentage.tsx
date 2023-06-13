import { useEffect, useState, useCallback } from "react";

export default function useScrollPercentage(): number {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  function getScrollPercent(): number {
    const h = document.documentElement;
    const b = document.body;
    const st = "scrollTop";
    const sh = "scrollHeight";
    return parseInt(
      (((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100).toString()
    );
  }

  const scrollEvent = useCallback(() => {
    setScrollPercentage(getScrollPercent());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [scrollEvent]);

  return scrollPercentage;
}
