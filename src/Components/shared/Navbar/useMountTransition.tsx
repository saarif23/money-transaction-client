import { useEffect, useState } from "react";

const useMountTransition = (isMounted: boolean, unmountDelay: number) => {
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => setIsTransitioning(false), unmountDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMounted, isTransitioning, unmountDelay]);

  return isTransitioning;
};

export default useMountTransition;
