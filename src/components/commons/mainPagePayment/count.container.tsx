import { useEffect, useState } from "react";

export default function useCountUp(end: number, start = 0, duration = 2000) {
  const [count, setCount] = useState(start);
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  useEffect(() => {
    let currentNumber = start;
    const counter = setInterval(() => {
      currentNumber += 1;
      setCount(currentNumber);

      if (currentNumber === end) {
        clearInterval(counter);
      }
    }, stepTime);
  }, [end, start, stepTime]);

  return count;
}
