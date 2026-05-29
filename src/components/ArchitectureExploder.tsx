"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Database, Shield } from "lucide-react";

export function ArchitectureExploder() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Sharp explosion timing
  // 0 - 0.1: Hold
  // 0.1 - 0.3: Explode outward
  // 0.3 - 0.8: Hold exploded state
  // 0.8 - 1.0: Fade out

  // Layer 1: CPU (Center, moves up)
  const layer1Y = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.8, 1], ["0px", "0px", "-180px", "-180px", "-300px"]);
  const layer1Scale = useTransform(scrollYProgress, [0, 0.1, 0.4], [1, 1, 1.2]);
  const layer1Opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  // Layer 2: Vector DB (Explodes left and down)
  const layer2X = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.8, 1], ["0px", "0px", "-320px", "-320px", "-450px"]);
  const layer2Y = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.8, 1], ["0px", "0px", "160px", "160px", "300px"]);
  const layer2Scale = useTransform(scrollYProgress, [0, 0.1, 0.4], [0.8, 0.8, 1.1]);
  const layer2Opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  // Layer 3: Secure Enclave (Explodes right and down)
  const layer3X = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.8, 1], ["0px", "0px", "320px", "320px", "450px"]);
  const layer3Y = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.8, 1], ["0px", "0px", "160px", "160px", "300px"]);
  const layer3Scale = useTransform(scrollYProgress, [0, 0.1, 0.4], [0.8, 0.8, 1.1]);
  const layer3Opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  // Text Animations
  const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.2], [1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.05, 0.2], ["0px", "0px", "-50px"]);

  const detailsOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.8, 0.9], [0, 1, 1, 0]);
  const detailsY = useTransform(scrollYProgress, [0.25, 0.35], ["40px", "0px"]);

  return (
    <div ref={containerRef} style={{ height: "400vh", position: "relative", width: "100%", background: "#000", color: "white" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        
        {/* Intro Title */}
        <motion.div style={{ position: "absolute", top: "25vh", opacity: titleOpacity, y: titleY, textAlign: "center", zIndex: 20 }}>
          <h2 style={{ fontSize: "clamp(3rem, 6vw, 6rem)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "1rem" }}>
            The Architecture.
          </h2>
          <p style={{ fontSize: "1.5rem", color: "#86868b" }}>Anatomy of an impenetrable system.</p>
        </motion.div>

        {/* Detailed Explanations */}
        <motion.div style={{ position: "absolute", bottom: "15vh", opacity: detailsOpacity, y: detailsY, textAlign: "center", maxWidth: "800px", padding: "0 2rem", zIndex: 20 }}>
          <h3 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>Three Pillars of Local AI</h3>
          <p style={{ fontSize: "1.25rem", color: "#86868b", lineHeight: 1.6 }}>
            The Inference Engine processes massive LLMs entirely on your CPU/GPU. 
            The Vector DB indexes your documents for millisecond hybrid retrieval. 
            The Secure Enclave encrypts the entire stack with AES-GCM.
          </p>
        </motion.div>

        {/* Anchor point for explosion (0x0 pixel anchor in dead center) */}
        <div style={{ position: "relative", width: 0, height: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          
          {/* Layer 2: Vector DB */}
          <motion.div style={{ position: "absolute", y: layer2Y, x: layer2X, scale: layer2Scale, opacity: layer2Opacity, willChange: "transform, opacity", display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "-70px", marginTop: "-70px" }}>
            <div style={{ width: "140px", height: "140px", borderRadius: "32px", background: "rgba(0,113,227,0.1)", border: "2px solid rgba(0,113,227,0.5)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 32px rgba(0,113,227,0.2)" }}>
              <Database size={56} color="#0071e3" />
            </div>
            <div style={{ marginTop: "1.5rem", fontSize: "1.25rem", fontWeight: 700 }}>Vector Store</div>
            <div style={{ color: "#0071e3", fontWeight: 600 }}>ChromaDB</div>
          </motion.div>

          {/* Layer 3: Secure Enclave */}
          <motion.div style={{ position: "absolute", y: layer3Y, x: layer3X, scale: layer3Scale, opacity: layer3Opacity, willChange: "transform, opacity", display: "flex", flexDirection: "column", alignItems: "center", marginLeft: "-70px", marginTop: "-70px" }}>
            <div style={{ width: "140px", height: "140px", borderRadius: "32px", background: "rgba(191,72,0,0.1)", border: "2px solid rgba(191,72,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 32px rgba(191,72,0,0.2)" }}>
              <Shield size={56} color="#bf4800" />
            </div>
            <div style={{ marginTop: "1.5rem", fontSize: "1.25rem", fontWeight: 700 }}>Secure Enclave</div>
            <div style={{ color: "#bf4800", fontWeight: 600 }}>AES-GCM</div>
          </motion.div>

          {/* Layer 1: CPU (On top) */}
          <motion.div style={{ position: "absolute", y: layer1Y, scale: layer1Scale, opacity: layer1Opacity, willChange: "transform, opacity", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10, marginLeft: "-90px", marginTop: "-90px" }}>
            <div style={{ width: "180px", height: "180px", borderRadius: "40px", background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(12px)", boxShadow: "0 16px 32px rgba(0,0,0,0.4)" }}>
              <Cpu size={72} color="white" />
            </div>
            <div style={{ marginTop: "1.5rem", fontSize: "1.5rem", fontWeight: 800 }}>Inference Engine</div>
            <div style={{ color: "#86868b", fontWeight: 600, fontSize: "1.1rem" }}>llama-cpp-python</div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
