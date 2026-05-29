"use client";

import { motion } from "framer-motion";
import { MessageSquare, Binary, Database, Cpu, ArrowRight } from "lucide-react";
import { useState } from "react";

export function RagPipelineVisualizer() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div style={{ padding: "8rem 2rem", background: "linear-gradient(180deg, #fbfbfd 0%, #ffffff 100%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        onViewportEnter={() => setHasStarted(true)}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "6rem", maxWidth: "800px" }}
      >
        <h2 style={{ fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>
          How it thinks.
        </h2>
        <p style={{ fontSize: "1.5rem", color: "#86868b" }}>
          Watch exactly how LocalMind OS uses Retrieval-Augmented Generation (RAG) to instantly answer questions using your private documents.
        </p>
      </motion.div>

      <div style={{ position: "relative", width: "100%", maxWidth: "1000px", height: "400px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Node 1: Prompt */}
        <motion.div 
          style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hasStarted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "rgba(0,113,227,0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #0071e3", boxShadow: "0 0 32px rgba(0,113,227,0.2)" }}>
            <MessageSquare size={48} color="#0071e3" />
          </div>
          <div style={{ marginTop: "1rem", fontWeight: 700, fontSize: "1.1rem" }}>User Prompt</div>
        </motion.div>

        {/* Node 2: Embeddings */}
        <motion.div 
          style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hasStarted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div style={{ width: "100px", height: "100px", borderRadius: "24px", background: "rgba(191,72,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #bf4800", boxShadow: "0 0 32px rgba(191,72,0,0.2)" }}>
            <Binary size={48} color="#bf4800" />
          </div>
          <div style={{ marginTop: "1rem", fontWeight: 700, fontSize: "1.1rem" }}>Embedding Model</div>
        </motion.div>

        {/* Node 3: Vector Store */}
        <motion.div 
          style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hasStarted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 3.5 }}
        >
          <div style={{ width: "120px", height: "120px", borderRadius: "32px", background: "rgba(0,113,227,0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #0071e3", boxShadow: "0 0 32px rgba(0,113,227,0.2)" }}>
            <Database size={56} color="#0071e3" />
          </div>
          <div style={{ marginTop: "1rem", fontWeight: 700, fontSize: "1.1rem" }}>Local Vault</div>
        </motion.div>

        {/* Node 4: LLM */}
        <motion.div 
          style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hasStarted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 5.5 }}
        >
          <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "#1d1d1f", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #1d1d1f", boxShadow: "0 0 48px rgba(0,0,0,0.3)" }}>
            <Cpu size={48} color="white" />
          </div>
          <div style={{ marginTop: "1rem", fontWeight: 700, fontSize: "1.1rem" }}>Inference Engine</div>
        </motion.div>

        {/* Flow Lines */}
        {hasStarted && (
          <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
            {/* 1 to 2 */}
            <motion.path 
              d="M 100 200 L 250 200" 
              stroke="#0071e3" strokeWidth="4" strokeDasharray="8 8" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
            {/* 2 to 3 */}
            <motion.path 
              d="M 350 200 L 500 200" 
              stroke="#bf4800" strokeWidth="4" strokeDasharray="8 8" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            />
            {/* 3 to 4 */}
            <motion.path 
              d="M 620 200 L 800 200" 
              stroke="#0071e3" strokeWidth="4" strokeDasharray="8 8" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.5, delay: 4.5 }}
            />
          </svg>
        )}

        {/* Data Packets */}
        {hasStarted && (
          <>
            <motion.div 
              style={{ position: "absolute", left: "100px", top: "185px", background: "#0071e3", color: "white", padding: "4px 12px", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 600, zIndex: 20 }}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: [0, 1, 1, 0], x: [0, 150] }}
              transition={{ duration: 1, delay: 1 }}
            >
              "Summarize PDF"
            </motion.div>

            <motion.div 
              style={{ position: "absolute", left: "350px", top: "185px", background: "#bf4800", color: "white", padding: "4px 12px", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 600, zIndex: 20 }}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: [0, 1, 1, 0], x: [0, 150] }}
              transition={{ duration: 1.5, delay: 2.5 }}
            >
              [0.14, -0.92, 0.44...]
            </motion.div>

            <motion.div 
              style={{ position: "absolute", left: "620px", top: "185px", background: "#0071e3", color: "white", padding: "4px 12px", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 600, zIndex: 20 }}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: [0, 1, 1, 0], x: [0, 180] }}
              transition={{ duration: 1.5, delay: 4.5 }}
            >
              Prompt + Retrieved Docs
            </motion.div>

            <motion.div 
              style={{ position: "absolute", right: "-120px", top: "185px", background: "#1d1d1f", color: "white", padding: "8px 16px", borderRadius: "16px", fontSize: "0.9rem", fontWeight: 600, zIndex: 20, boxShadow: "0 16px 32px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 6.5 }}
            >
              "The Q3 earnings..."
            </motion.div>
          </>
        )}
      </div>

    </div>
  );
}
