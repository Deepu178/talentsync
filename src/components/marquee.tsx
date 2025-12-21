"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Marquee: React.FC = () => {
  const [textWidth, setTextWidth] = useState<number>(0);
  const text = `✦ Design-first SaaS ✦ Streamline Creative Workflows ✦ Deliver Pixel-Perfect Results `;
  const repeatTimes = 50;
  const repeatedText = Array(repeatTimes).fill(text).join(" ");

  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [textRef]);

  const tickerVariants = {
    animate: {
      x: [0, -textWidth],
      transition: {
        x: {
          duration: 1000,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap">
      <motion.div
        className="h2 inline-block font-secondary font-light"
        variants={tickerVariants}
        initial="animate"
        animate="animate"
        ref={textRef}
      >
        {repeatedText}
      </motion.div>
      <motion.div
        className="h2 inline-block font-secondary font-light"
        variants={tickerVariants}
        initial="animate"
        animate="animate"
      >
        {repeatedText}
      </motion.div>
    </div>
  );
};

export default Marquee;
