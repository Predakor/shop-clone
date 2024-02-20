import { RefObject, useEffect, useState } from "react";

type Props = {
  target: RefObject<HTMLElement | null>;
  onIntersect?: (entry: IntersectionObserverEntry) => void;
};

function useIsIntersecting({ target, onIntersect }: Props) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = target.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isSticky = entry.intersectionRatio < 1;
        setIsIntersecting(() => isSticky);
      },
      { threshold: [1] },
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [target]);

  return isIntersecting;
}

export default useIsIntersecting;
