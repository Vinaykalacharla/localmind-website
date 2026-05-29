"use client";

import { motion } from "framer-motion";
import { Database, FileText, Cpu, Network, Shield, Lock, Key, Server, CloudOff, FolderLock } from "lucide-react";

export function AnimatedIngestion() {
  return (
    <div style={{ height: "300px", width: "100%", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(180deg, transparent, rgba(0,113,227,0.03))", borderRadius: "24px", border: "1px solid var(--border-light)" }}>
      <motion.div initial={{ x: -120, opacity: 0 }} animate={{ x: 0, opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", zIndex: 2 }}>
        <div style={{ background: "#fff", padding: "0.75rem", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: "0.5rem", color: "#1d1d1f" }}>
          <FileText size={24} color="#0071e3" />
          <span style={{ fontSize: "1rem", fontWeight: 600 }}>data.pdf</span>
        </div>
      </motion.div>
      <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1.05 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} style={{ width: "80px", height: "80px", borderRadius: "24px", background: "linear-gradient(135deg, #0071e3, #29c1d1)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 32px rgba(0,113,227,0.4)", zIndex: 1, marginLeft: "150px" }}>
        <Database size={32} color="#fff" />
      </motion.div>
      <div style={{ position: "absolute", width: "100%", height: "2px", background: "rgba(0,113,227,0.1)", zIndex: 0 }} />
      <motion.div initial={{ width: "0%", left: "20%" }} animate={{ width: "30%", left: "70%", opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "circOut" }} style={{ position: "absolute", height: "2px", background: "linear-gradient(90deg, transparent, #0071e3)", top: "50%" }} />
    </div>
  );
}

export function AnimatedChat() {
  return (
    <div style={{ height: "300px", width: "100%", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(180deg, transparent, rgba(191,72,0,0.03))", borderRadius: "24px", border: "1px solid var(--border-light)" }}>
      <motion.div initial={{ scale: 0.9, opacity: 0.5, y: -10 }} animate={{ scale: 1, opacity: 1, y: 10 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(191,72,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#bf4800", position: "absolute", left: "25%" }}>
        <Network size={32} />
      </motion.div>
      <motion.div initial={{ scale: 0.9, opacity: 0.5, y: 10 }} animate={{ scale: 1, opacity: 1, y: -10 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }} style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(41,193,209,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#29c1d1", position: "absolute", right: "25%" }}>
        <Cpu size={32} />
      </motion.div>
      <div style={{ position: "absolute", width: "50%", height: "2px", background: "rgba(191,72,0,0.1)", zIndex: 0 }} />
      <motion.div initial={{ width: "0%", left: "25%" }} animate={{ width: "40%", left: "55%", opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "circOut" }} style={{ position: "absolute", height: "2px", background: "linear-gradient(90deg, transparent, #bf4800)", top: "50%" }} />
    </div>
  );
}

export function AnimatedPrivacy() {
  return (
    <div style={{ height: "300px", width: "100%", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(180deg, transparent, rgba(41,193,209,0.03))", borderRadius: "24px", border: "1px solid var(--border-light)" }}>
      <motion.div initial={{ scale: 0.95, boxShadow: "0 0 0px rgba(41,193,209,0)" }} animate={{ scale: 1.05, boxShadow: "0 0 48px rgba(41,193,209,0.3)" }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} style={{ width: "80px", height: "80px", borderRadius: "24px", background: "#29c1d1", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
        <Shield size={32} color="#fff" />
      </motion.div>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", width: "180px", height: "180px", border: "1px dashed rgba(41,193,209,0.3)", borderRadius: "50%", display: "flex", justifyContent: "center", zIndex: 1 }}>
        <div style={{ background: "#fff", padding: "0.5rem", borderRadius: "50%", marginTop: "-16px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", color: "#1d1d1f" }}>
          <Key size={16} />
        </div>
      </motion.div>
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} style={{ position: "absolute", width: "260px", height: "260px", border: "1px dashed rgba(41,193,209,0.2)", borderRadius: "50%", display: "flex", justifyContent: "flex-end", alignItems: "center", zIndex: 1 }}>
        <div style={{ background: "#fff", padding: "0.5rem", borderRadius: "50%", marginRight: "-16px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", color: "#1d1d1f" }}>
          <Lock size={16} />
        </div>
      </motion.div>
    </div>
  );
}

export function AnimatedModels() {
  const models = ["Llama 3 (8B)", "Mistral-Instruct", "Phi-3 Mini", "Gemma 2B"];
  return (
    <div style={{ height: "300px", width: "100%", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(180deg, transparent, rgba(142,45,226,0.03))", borderRadius: "24px", border: "1px solid var(--border-light)" }}>
      <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>
        Active Model
      </div>
      <div style={{ position: "relative", height: "60px", width: "250px", overflow: "hidden" }}>
        {models.map((model, i) => (
          <motion.div
            key={model}
            animate={{ y: [60, 0, 0, -60] }}
            transition={{ duration: 8, repeat: Infinity, times: [0, 0.1, 0.9, 1], delay: i * 2 }}
            style={{ position: "absolute", width: "100%", height: "100%", background: "#fff", borderRadius: "16px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", fontWeight: 700, color: "#8e2de2", border: "2px solid rgba(142,45,226,0.2)" }}
          >
            {model}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function AnimatedVectorization() {
  const particles = [
    { x: -80, y: -60, delay: 0.1 },
    { x: 50, y: -90, delay: 0.5 },
    { x: 90, y: 40, delay: 0.2 },
    { x: -40, y: 80, delay: 0.8 },
    { x: -100, y: 10, delay: 0.4 },
    { x: 20, y: -40, delay: 0.9 },
    { x: 60, y: 90, delay: 0.3 },
    { x: -70, y: -20, delay: 0.7 },
    { x: 80, y: -20, delay: 0.6 },
    { x: -30, y: -80, delay: 1.1 },
    { x: 10, y: 70, delay: 1.0 },
    { x: -90, y: 60, delay: 0.5 }
  ];

  return (
    <div style={{ height: "300px", width: "100%", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(180deg, transparent, rgba(255,189,46,0.03))", borderRadius: "24px", border: "1px solid var(--border-light)" }}>
      <motion.div animate={{ scale: [1, 1.1, 1], opacity: [1, 0, 1] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: "absolute", zIndex: 2 }}>
        <FileText size={64} color="#ffbd2e" />
      </motion.div>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: p.x, y: p.y }}
          transition={{ duration: 1.5, repeat: Infinity, delay: p.delay }}
          style={{ position: "absolute", width: "12px", height: "12px", background: "#ffbd2e", borderRadius: "2px", zIndex: 1 }}
        />
      ))}
    </div>
  );
}

export function AnimatedVault() {
  return (
    <div style={{ height: "300px", width: "100%", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(180deg, transparent, rgba(39,201,63,0.03))", borderRadius: "24px", border: "1px solid var(--border-light)" }}>
      <motion.div 
        animate={{ rotateY: [0, 180, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: "120px", height: "160px", background: "linear-gradient(135deg, #27c93f, #148f27)", borderRadius: "16px", boxShadow: "0 16px 32px rgba(39,201,63,0.3)", display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "1rem", transformStyle: "preserve-3d" }}
      >
        <FolderLock size={32} color="white" />
      </motion.div>
    </div>
  );
}
