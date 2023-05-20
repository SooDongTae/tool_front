import { useEffect, useRef } from "react";

export const Observer = ({ handleIntersection }: any) => {
  const target = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          handleIntersection();
        }
      },
      { threshold: 1 }
    );

    if (target.current) {
      observer.observe(target.current);
    }

    return () => observer.disconnect();
  }, []);

  return <div ref={target}>이게 보이면? 다음 데이터를!</div>;
};
