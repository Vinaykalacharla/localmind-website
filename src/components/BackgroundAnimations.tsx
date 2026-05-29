"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Brain, Cpu, Database, Network } from "lucide-react";

const ICONS = [Brain, Cpu, Database, Network];

export function BackgroundAnimations() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate random floating particles (Nodes and Vectors)
  const [particles] = useState(() => Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    type: Math.random() > 0.5 ? 'icon' : 'vector',
    iconIndex: Math.floor(Math.random() * ICONS.length),
    vectorText: `[${(Math.random()).toFixed(2)}, ${(Math.random() * -1).toFixed(2)}]`,
    size: Math.random() * 16 + 12, // 12px to 28px
    x: Math.random() * 100, // percentage
    y: Math.random() * 100, // percentage
    duration: Math.random() * 25 + 15, // 15s to 40s
    delay: Math.random() * 10,
  })));

  if (!mounted) return null;

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
      
      {/* 1. Shifting Aurora Gradient Mesh */}
      <motion.div 
        animate={{ 
          background: [
            "radial-gradient(circle at 0% 0%, rgba(0, 113, 227, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(39, 201, 63, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(191, 72, 0, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(0, 113, 227, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(0, 113, 227, 0.05) 0%, transparent 50%)"
          ] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />

      {/* 2. Interactive Mouse Glow Tracker */}
      <motion.div 
        animate={{ 
          x: mousePosition.x - 400, // Offset by half the width
          y: mousePosition.y - 400, // Offset by half the height
        }}
        transition={{ type: "tween", ease: "backOut", duration: 1 }} // Smooth trailing effect
        style={{ 
          position: "absolute", 
          width: "800px", 
          height: "800px", 
          borderRadius: "50%", 
          background: "radial-gradient(circle, rgba(0, 113, 227, 0.03) 0%, transparent 70%)",
          filter: "blur(40px)"
        }}
      />

      {/* 3. Infinite Floating LocalMind Particles */}
      {particles.map((p) => {
        const Icon = ICONS[p.iconIndex];
        return (
          <motion.div
            key={p.id}
            initial={{ y: `${p.y + 10}vh`, x: `${p.x}vw`, opacity: 0, rotate: 0 }}
            animate={{ 
              y: [`${p.y + 10}vh`, `${p.y - 100}vh`], // Float upwards massively
              x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`], // Slight horizontal drift
              opacity: [0, 0.3, 0], // Fade in and out
              rotate: p.type === 'icon' ? [0, 180, 360] : 0
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay,
              ease: "linear"
            }}
            style={{
              position: "absolute",
              color: "rgba(134, 134, 139, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
              fontFamily: "monospace",
              fontWeight: 600,
            }}
          >
            {p.type === 'icon' ? (
              <Icon size={p.size} />
            ) : (
              <span style={{ 
                background: "rgba(134, 134, 139, 0.05)", 
                padding: "4px 8px", 
                borderRadius: "6px",
                border: "1px solid rgba(134, 134, 139, 0.15)",
                backdropFilter: "blur(4px)"
              }}>
                {p.vectorText}
              </span>
            )}
          </motion.div>
        );
      })}

    </div>
  );
}
