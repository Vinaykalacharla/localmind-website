"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { useRef, useState } from "react";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

export function MagneticButton({ children, className, style, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Multiply by a smaller fraction to make the pull more subtle
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={{
        ...style,
        position: "relative",
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
