"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Lock, BrainCircuit } from "lucide-react";
import { useState } from "react";

const models = [
  {
    name: "Llama 3 (8B)",
    description: "The golden standard for local inference. Extremely smart, highly quantized.",
    ram: "Requires 8GB RAM",
    color: "#0071e3",
    icon: <BrainCircuit size={48} color="#0071e3" />
  },
  {
    name: "Mistral v0.3",
    description: "Uncensored, raw, and incredibly fast. Perfect for creative local tasks.",
    ram: "Requires 8GB RAM",
    color: "#bf4800",
    icon: <Zap size={48} color="#bf4800" />
  },
  {
    name: "Phi-3 Mini",
    description: "Microsoft's tiny powerhouse. Runs flawlessly on older laptops.",
    ram: "Requires 4GB RAM",
    color: "#27c93f",
    icon: <Cpu size={48} color="#27c93f" />
  }
];

export function ModelCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={{ padding: "8rem 2rem", background: "#fbfbfd", display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px" }}
      >
        <h2 style={{ fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>
          Hot-Swap Models.
        </h2>
        <p style={{ fontSize: "1.5rem", color: "#86868b" }}>
          LocalMind OS is engine-agnostic. Drag and drop any GGUF file to instantly change your AI's brain.
        </p>
      </motion.div>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", maxWidth: "1200px" }}>
        {models.map((model, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.15, type: "spring" }}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            style={{ 
              width: "340px", 
              background: hoveredIndex === i ? model.color : "white",
              color: hoveredIndex === i ? "white" : "inherit",
              borderRadius: "32px", 
              padding: "3rem 2rem", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: hoveredIndex === i ? `0 32px 64px ${model.color}40` : "0 16px 32px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.05)",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            animate={hoveredIndex === i ? { y: -20, scale: 1.05 } : { y: 0, scale: 1 }}
          >
            <div style={{ 
              width: "100px", height: "100px", borderRadius: "24px", 
              background: hoveredIndex === i ? "rgba(255,255,255,0.2)" : `${model.color}15`, 
              display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem",
              transition: "all 0.4s ease"
            }}>
              {/* Clone element to change color on hover without React complaining */}
              <div style={{ filter: hoveredIndex === i ? "brightness(0) invert(1)" : "none", transition: "all 0.4s ease" }}>
                {model.icon}
              </div>
            </div>
            
            <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>{model.name}</h3>
            <p style={{ fontSize: "1.1rem", marginBottom: "2rem", opacity: 0.8 }}>{model.description}</p>
            
            <div style={{ 
              marginTop: "auto", 
              padding: "0.75rem 1.5rem", 
              background: hoveredIndex === i ? "rgba(255,255,255,0.2)" : "#f5f5f7", 
              borderRadius: "100px", 
              fontSize: "0.875rem", 
              fontWeight: 600 
            }}>
              {model.ram}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
