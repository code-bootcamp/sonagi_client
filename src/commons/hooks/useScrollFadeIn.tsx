const { useRef, useCallback, useEffect } = require("react");

const useScrollFadeIn = () => {
  const dom = useRef();

  const handleScroll = useCallback(([entry]: any) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      current.style.transitionProperty = "opacity transform";
      current.style.transitionDuration = "3s";
      current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
      current.style.transitionDelay = "0s";
      current.style.opacity = 1;
      current.style.transform = "translate3d(0, 0, 0)";
    }
  }, []);

  useEffect(() => {
    let observer: any;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer;
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 1,
      transform: "translate3d(0, 50%, 0)",
    },
  };
};

export default useScrollFadeIn;
