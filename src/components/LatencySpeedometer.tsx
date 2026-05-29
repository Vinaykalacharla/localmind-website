"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Gauge, Cloud, Zap } from "lucide-react";

export function LatencySpeedometer() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Cloud needle struggles, Local needle pegs the limit
  const cloudRotation = useTransform(scrollYProgress, [0, 1], [-90, -45]);
  const localRotation = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const localGlow = useTransform(scrollYProgress, [0, 1], ["0px", "32px"]);

  return (
    <div ref={containerRef} style={{ padding: "8rem 2rem", background: "#1d1d1f", color: "white", display: "flex", flexDirection: "column", alignItems: "center", overflow: "hidden" }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "6rem", maxWidth: "800px" }}
      >
        <h2 style={{ fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>
          Zero Network Overhead.
        </h2>
        <p style={{ fontSize: "1.5rem", color: "#86868b" }}>
          Stop waiting on rate limits and crowded cloud endpoints. Experience true millisecond latency when the AI lives inside your SSD.
        </p>
      </motion.div>

      <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap", justifyContent: "center" }}>
        
        {/* Cloud Speedometer */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ position: "relative", width: "240px", height: "120px", overflow: "hidden", marginBottom: "2rem" }}>
            {/* Dial Arch */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "240px", height: "240px", borderRadius: "50%", border: "4px solid rgba(255,255,255,0.1)", borderBottom: "none" }} />
            {/* Needle Pivot */}
            <div style={{ position: "absolute", bottom: "-10px", left: "110px", width: "20px", height: "20px", borderRadius: "50%", background: "#6e6e73", zIndex: 10 }} />
            {/* Needle */}
            <motion.div 
              style={{ position: "absolute", bottom: 0, left: "118px", width: "4px", height: "100px", background: "#ff3b30", transformOrigin: "bottom center", rotate: cloudRotation }} 
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.5rem", fontWeight: 700, color: "#6e6e73" }}>
            <Cloud size={24} /> Cloud API
          </div>
          <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#ff3b30", marginTop: "0.5rem" }}>
            ~1200ms
          </div>
        </div>

        {/* LocalMind Speedometer */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ position: "relative", width: "300px", height: "150px", overflow: "hidden", marginBottom: "2rem" }}>
            {/* Dial Arch */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "300px", height: "300px", borderRadius: "50%", border: "8px solid rgba(0,113,227,0.3)", borderBottom: "none" }} />
            {/* Redline Tick */}
            <div style={{ position: "absolute", top: "10px", right: "20px", width: "8px", height: "30px", background: "#0071e3", transform: "rotate(45deg)" }} />
            {/* Needle Pivot */}
            <div style={{ position: "absolute", bottom: "-12px", left: "138px", width: "24px", height: "24px", borderRadius: "50%", background: "#0071e3", zIndex: 10, boxShadow: "0 0 16px rgba(0,113,227,0.8)" }} />
            {/* Needle */}
            <motion.div 
              style={{ position: "absolute", bottom: 0, left: "147px", width: "6px", height: "130px", background: "#0071e3", transformOrigin: "bottom center", rotate: localRotation, boxShadow: useTransform(localGlow, v => `0 0 ${v} rgba(0,113,227,0.8)`) }} 
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "2rem", fontWeight: 800, color: "white" }}>
            <Zap size={32} color="#0071e3" /> LocalMind OS
          </div>
          <motion.div 
            style={{ fontSize: "3.5rem", fontWeight: 800, color: "#0071e3", marginTop: "0.5rem", textShadow: useTransform(localGlow, v => `0 0 ${v} rgba(0,113,227,0.8)`) }}
          >
            ~5ms
          </motion.div>
        </div>

      </div>
    </div>
  );
}
