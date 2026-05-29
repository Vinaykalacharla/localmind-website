"use client";

import { motion } from "framer-motion";
import { FileText, Search, User, Bot, Shield, ChevronRight } from "lucide-react";

export function AnimatedHeroApp() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } }
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
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Sidebar */}
      <div style={{
        width: "240px",
        borderRight: "1px solid rgba(0,0,0,0.05)",
        background: "rgba(250, 250, 252, 0.6)",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
          Local Vault
        </div>
        {[
          { name: "architecture.pdf", active: false },
          { name: "security_spec.md", active: true },
          { name: "api_routes.ts", active: false }
        ].map((file, i) => (
          <div key={i} style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem",
            borderRadius: "6px",
            background: file.active ? "rgba(0, 113, 227, 0.1)" : "transparent",
            color: file.active ? "#0071e3" : "#1d1d1f",
            fontSize: "0.875rem",
            fontWeight: 500
          }}>
            <FileText size={16} />
            {file.name}
          </div>
        ))}
      </div>

      {/* Main Chat Area */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)",
        padding: "2rem"
      }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          {/* User Message */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
          >
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#f5f5f7", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <User size={16} color="#1d1d1f" />
            </div>
            <div style={{ flex: 1, background: "#f5f5f7", padding: "1rem", borderRadius: "12px", borderTopLeftRadius: "2px", color: "#1d1d1f", fontSize: "0.95rem" }}>
              How does the application encrypt my local data?
            </div>
          </motion.div>

          {/* AI Response */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
          >
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #0071e3, #29c1d1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Bot size={16} color="white" />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "0.25rem", background: "rgba(191,72,0,0.1)", color: "#bf4800", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 600 }}
              >
                <Search size={12} />
                <span>Searched security_spec.md</span>
              </motion.div>

              <div style={{ color: "#1d1d1f", fontSize: "0.95rem", lineHeight: 1.6 }}>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>LocalMind OS uses </motion.span>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }} style={{ background: "rgba(0,113,227,0.1)", padding: "0 4px", borderRadius: "4px" }}>AES-GCM</motion.span>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}> to encrypt all persisted runtime artifacts. The encryption key is derived from your passphrase using the </motion.span>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }} style={{ background: "rgba(0,113,227,0.1)", padding: "0 4px", borderRadius: "4px" }}>Scrypt</motion.span>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }}> algorithm.</motion.span>
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
          <span style={{ color: "#d2d2d7", fontSize: "0.9rem" }}>Ask anything about your documents...</span>
          <div style={{ marginLeft: "auto", background: "var(--text-primary)", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ChevronRight size={14} color="white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
