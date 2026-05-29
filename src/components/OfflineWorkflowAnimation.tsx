"use client";

import { motion } from "framer-motion";
import { FileText, Wifi, WifiOff, User, Bot, Shield, ChevronRight, HardDrive } from "lucide-react";

export function OfflineWorkflowAnimation() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      className="hero-app-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        width: "100%",
        maxWidth: "900px",
        height: "500px",
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(20px)",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        boxShadow: "0 24px 48px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.8)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* App Header */}
      <div style={{ height: "48px", borderBottom: "1px solid rgba(0,0,0,0.05)", background: "rgba(250, 250, 252, 0.8)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "space-between", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
        </div>
        
        {/* Wifi Status Animation */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <motion.div 
            animate={{ opacity: [0, 0, 1, 1, 0], y: [10, 10, 0, 0, -10] }}
            transition={{ duration: 12, repeat: Infinity, times: [0, 0.25, 0.3, 0.9, 1] }}
            style={{ fontSize: "0.75rem", fontWeight: 600, color: "#bf4800", background: "rgba(191,72,0,0.1)", padding: "4px 8px", borderRadius: "4px" }}
          >
            Offline Mode Active
          </motion.div>
          <motion.div style={{ display: "flex", alignItems: "center", position: "relative", width: "18px", height: "18px" }}>
            <motion.div animate={{ opacity: [1, 1, 0, 0, 1] }} transition={{ duration: 12, repeat: Infinity, times: [0, 0.23, 0.25, 0.9, 1] }} style={{ position: "absolute" }}>
              <Wifi size={18} color="#0071e3" />
            </motion.div>
            <motion.div 
              animate={{ opacity: [0, 0, 1, 1, 0] }} 
              transition={{ duration: 12, repeat: Infinity, times: [0, 0.23, 0.25, 0.9, 1] }}
              style={{ position: "absolute" }}
            >
              <WifiOff size={18} color="#86868b" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div style={{ width: "240px", borderRight: "1px solid rgba(0,0,0,0.05)", background: "rgba(250, 250, 252, 0.6)", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
            Local Vault
          </div>
          {/* Animated File appearing in sidebar */}
          <motion.div 
            animate={{ opacity: [0, 0, 1, 1, 0], x: [-20, -20, 0, 0, -20] }}
            transition={{ duration: 12, repeat: Infinity, times: [0, 0.15, 0.2, 0.9, 1] }}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem", borderRadius: "6px", background: "rgba(0, 113, 227, 0.1)", color: "#0071e3", fontSize: "0.875rem", fontWeight: 500 }}
          >
            <FileText size={16} />
            report.pdf
          </motion.div>
        </div>

        {/* Main Chat Area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)", padding: "2rem", position: "relative" }}>
          
          {/* Drag & Drop Overlay Animation */}
          <motion.div 
            animate={{ opacity: [0, 1, 0, 0, 0], scale: [0.95, 1, 1.05, 1.05, 1] }}
            transition={{ duration: 12, repeat: Infinity, times: [0, 0.05, 0.15, 0.9, 1] }}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,113,227,0.02)", border: "2px dashed rgba(0,113,227,0.3)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10, pointerEvents: "none" }}
          >
            <div style={{ background: "white", padding: "1rem 2rem", borderRadius: "100px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: "0.5rem", color: "#0071e3", fontWeight: 600 }}>
              <FileText size={20} />
              Drop report.pdf to ingest locally
            </div>
          </motion.div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            
            {/* User Message */}
            <motion.div 
              animate={{ opacity: [0, 0, 1, 1, 0], y: [10, 10, 0, 0, 10] }}
              transition={{ duration: 12, repeat: Infinity, times: [0, 0.35, 0.4, 0.9, 1] }}
              style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
            >
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#f5f5f7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <User size={16} color="#1d1d1f" />
              </div>
              <div style={{ flex: 1, background: "#f5f5f7", padding: "1rem", borderRadius: "12px", borderTopLeftRadius: "2px", color: "#1d1d1f", fontSize: "0.95rem" }}>
                Summarize the key findings in report.pdf.
              </div>
            </motion.div>

            {/* AI Response */}
            <motion.div 
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{ duration: 12, repeat: Infinity, times: [0, 0.5, 0.55, 0.9, 1] }}
              style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
            >
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #0071e3, #29c1d1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Bot size={16} color="white" />
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                
                <motion.div 
                  animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.9, 0.9, 1, 1, 0.9] }}
                  transition={{ duration: 12, repeat: Infinity, times: [0, 0.55, 0.6, 0.9, 1] }}
                  style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "0.25rem", background: "rgba(191,72,0,0.1)", color: "#bf4800", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 600 }}
                >
                  <HardDrive size={12} />
                  <span>Local Search: report.pdf</span>
                </motion.div>

                <div style={{ color: "#1d1d1f", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  <motion.span animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: 12, repeat: Infinity, times: [0, 0.65, 0.7, 0.9, 1] }}>Based on the local document, the application ensures </motion.span>
                  <motion.span animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: 12, repeat: Infinity, times: [0, 0.7, 0.75, 0.9, 1], background: "rgba(0,113,227,0.1)", padding: "0 4px", borderRadius: "4px" }}>Absolute Privacy</motion.span>
                  <motion.span animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: 12, repeat: Infinity, times: [0, 0.75, 0.8, 0.9, 1] }}> by running inference purely on-device without any internet connection.</motion.span>
                </div>
              </div>
            </motion.div>

          </div>
          
          {/* Input Box */}
          <div style={{
            marginTop: "auto",
            width: "100%",
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "100px",
            padding: "0.75rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
          }}>
            <Shield size={16} color="#86868b" />
            <motion.span 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ duration: 1, repeat: Infinity }}
              style={{ color: "#d2d2d7", fontSize: "0.9rem" }}
            >
              |
            </motion.span>
            <div style={{ marginLeft: "auto", background: "var(--text-primary)", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ChevronRight size={14} color="white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
