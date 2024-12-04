"use client";

import { motion } from "framer-motion";

export function AnimatedLogo() {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
      className="text-primary"
    >
      <motion.path
        d="M20 20 H80 M50 20 V80"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        variants={pathVariants}
      />
    </motion.svg>
  );
}

