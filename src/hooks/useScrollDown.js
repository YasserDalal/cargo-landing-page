import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

/*
  startValue: the scroll value where isScrollDown state will be true when we scroll down,
              otherwise it will be false
*/

export default function useScrollDown(startValue = 0) {
  const { scrollYProgress } = useScroll();
  const [isScrollDown, setIsScrollDown] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    let previous = scrollYProgress.getPrevious();

    // state is false if current scroll value is lower than the previous (scroll up)
    if (current < previous) {
      setIsScrollDown(false);
    }

    // check if we reached the start value
    // make the state true if we passed the start value (scroll down)
    if (current > previous && current >= startValue) {
      setIsScrollDown(true);
    }
  });
  /*
  useEffect(() => {
    let prev = startValue;
    return scrollYProgress.on("change", (current) => {
      current < prev && setIsScrollDown(false);
      current > prev && current >= startValue && setIsScrollDown(true);

      prev = current;
    });
  }, [scrollYProgress]);
  */

  return isScrollDown;
}
