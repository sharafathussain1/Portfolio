"use client";

import { frame, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return <motion.div ref={ref} style={{ ...ball, x, y }} />;
}

// const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };
const spring = { damping: 15, stiffness: 35, restDelta: 0.001 };

export function useFollowPointer(ref) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () =>
      window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}

/**
 * ==============   Styles   ================
 */

const ball = {
  // position:"absolute",
  width: 100,
  height: 100,
  backgroundColor: "#f0f2f5",
  borderRadius: "50%",
  position: "absolute", // Ensure the ball is positioned correctly
  pointerEvents: "none", // So it won't interfere with other interactions
  transformOrigin: "center", // Proper positioning of the cursor
  backgroundImage: 'url("/sh.png")', // Path to your image
  backgroundSize: "50%", // Adjust the size of the image inside the ball
  backgroundPosition: "center", // Center the image inside the ball
  backgroundRepeat: "no-repeat", // Prevent repeating the image
  opacity: 0.5, // Make the cursor ball transparent
  // filter: "blur(5px)",

};
