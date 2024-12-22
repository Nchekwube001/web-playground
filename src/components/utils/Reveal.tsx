import { log } from "console";
import { motion, useInView, useAnimation } from "motion/react";
import React, { FC, ReactElement, useEffect, useRef } from "react";

interface Props {
  children: ReactElement;
  width?: "fit-content" | "100%";
}
const Reveal: FC<Props> = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("shown");
      slideControls.start("shown");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          shown: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          shown: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          backgroundColor: "var(--brand)",
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default Reveal;
