import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export type MotionDirection = "up" | "left" | "right";

export default function MotionWrapper({
  children,
  delay = 0.2,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: MotionDirection;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -100px 0px",
  });

  const initialVariants = {
    up: { opacity: 0, y: 40 },
    left: { opacity: 0, x: -100 },
    right: { opacity: 0, x: 100 },
  };

  const animateVariants = {
    up: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initialVariants[direction]}
      animate={isInView ? animateVariants[direction] : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
