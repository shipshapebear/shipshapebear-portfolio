// Ref: https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom

import { useEffect, useRef, useState } from "react";

export const useWasSeen = () => {
  // to prevent runtime crash in IE, let's mark it true
  // delay for a bit in Gatsby so does not initially render items on index.html
  const [wasSeen, setWasSeen] = useState(false)

  if (typeof IntersectionObserver !== "function") {
    setTimeout(() => {
      setWasSeen(true)
    }, 1)
  }
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && !wasSeen) {
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setWasSeen(true)
      );
      console.log(observer)
      observer.observe(ref.current);
      return () => {
        observer.disconnect()
      }
    }
  }, [wasSeen])
  return [wasSeen, ref] as const;
}