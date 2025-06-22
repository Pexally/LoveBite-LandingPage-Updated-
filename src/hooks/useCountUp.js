import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const useCountUp = (end, duration = 2, start = 0) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        const currentCount = start + (end - start) * percentage;
        
        if (Number.isInteger(end)) {
          setCount(Math.floor(currentCount));
        } else {
          setCount(parseFloat(currentCount.toFixed(1)));
        }

        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end); // Ensure it ends exactly on the target
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, start, duration]);

  return { count, ref };
};

export default useCountUp;