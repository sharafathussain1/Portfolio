"use client";

import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

export default function SideAnimation() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 2000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <ul style={container}>
      {order.map((backgroundColor, index) => (
        <motion.li
          key={backgroundColor}
          layout
          transition={spring}
          style={{
            ...item,
            backgroundColor,
            backgroundImage: `url(${images[index]})`, // Set background image
            backgroundSize: "cover", // Cover the entire area
            backgroundPosition: "center", // Center the image
          }}
        />
      ))}
    </ul>
  );
}

const initialOrder = [
  "#a2c1f2",
  "#c0db95",
  "#aaada5",
  "#dcf5f1"
  // "#ff0088",
  // "#dd00ee",
  // "#9911ff",
  // "#0d63f8",
];

/**
 * ==============   Utils   ================
 */
function shuffle([...array]) {
  return array.sort(() => Math.random() - 0.5);
}

/**
 * ==============   Styles   ================
 */
const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const container = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  width: 300,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const item = {
  width: 100,
  height: 100,
  borderRadius: "10px",
};

// Define your images here
const images = [
  "/nextjs.png", // Replace with your image path
  "/nodejs.png",
  "/react.png",
  "/tailwaind.png"
];
