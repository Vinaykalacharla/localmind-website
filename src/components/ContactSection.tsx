"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Terminal, Sparkles } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const contactLinks = [
    {
      title: "Direct Email",
      value: "localmindos@gmail.com",
      icon: <Mail size={24} />,
      href: "mailto:localmindos@gmail.com",
      gradient: "from-[#ff4b4b] to-[#ff9090]"
    },
    {
      title: "GitHub Developer",
      value: "github.com/Vinaykalacharla",
      icon: <Github size={24} />,
      href: "https://github.com/Vinaykalacharla",
      gradient: "from-[#333] to-[#888]"
    },
    {
      title: "LinkedIn Network",
      value: "linkedin.com/in/vinaykalacharla",
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com/in/vinaykalacharla",
      gradient: "from-[#0077b5] to-[#00a0dc]"
    }
  ];

  return (
    <section style={{ padding: "8rem 2rem", position: "relative", zIndex: 10, display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "1200px", width: "100%", display: "flex", flexDirection: "column", gap: "4rem" }}>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{ textAlign: "center" }}
        >
          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
            Let's build <span style={{ background: "linear-gradient(135deg, #0071e3, #29c1d1)", WebkitBackgroundClip: "text", color: "transparent" }}>secure products</span> together.
          </h2>
        </motion.div>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "stretch" }}>
          
          {/* Left: Contact Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10, backgroundColor: "rgba(255,255,255,1)", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  padding: "1.5rem",
                  background: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-primary)" }}>
                  {link.icon}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {link.title}
                  </span>
                  <span style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    {link.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right: Inquiry Console */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            style={{ 
              flex: "1 1 500px", 
              background: "#121214", 
              borderRadius: "24px", 
              padding: "2rem",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 32px 64px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              perspective: "1000px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
              <Terminal size={20} color="#0071e3" />
              <span style={{ fontFamily: "'Fira Code', monospace", fontWeight: 600, letterSpacing: "0.1em", fontSize: "0.9rem", color: "#a1a1aa" }}>INQUIRY_CONSOLE.exe</span>
              <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }}></div>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#eab308" }}></div>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e" }}></div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              
              <div style={{ position: "relative" }}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#a1a1aa", marginBottom: "0.5rem" }}>Your Name</label>
                <motion.input 
                  onFocus={() => setFocusedInput("name")}
                  onBlur={() => setFocusedInput(null)}
                  animate={{ borderColor: focusedInput === "name" ? "#0071e3" : "rgba(255,255,255,0.1)", backgroundColor: focusedInput === "name" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.2)" }}
                  type="text" 
                  placeholder="Enter name" 
                  style={{ width: "100%", padding: "1rem", borderRadius: "12px", outline: "none", color: "white", fontFamily: "inherit", fontSize: "1rem", transition: "all 0.3s ease" }} 
                />
              </div>

              <div style={{ position: "relative" }}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#a1a1aa", marginBottom: "0.5rem" }}>Your Email</label>
                <motion.input 
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  animate={{ borderColor: focusedInput === "email" ? "#0071e3" : "rgba(255,255,255,0.1)", backgroundColor: focusedInput === "email" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.2)" }}
                  type="email" 
                  placeholder="name@company.com" 
                  style={{ width: "100%", padding: "1rem", borderRadius: "12px", outline: "none", color: "white", fontFamily: "inherit", fontSize: "1rem", transition: "all 0.3s ease" }} 
                />
              </div>

              <div style={{ position: "relative" }}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#a1a1aa", marginBottom: "0.5rem" }}>Message</label>
                <motion.textarea 
                  onFocus={() => setFocusedInput("message")}
                  onBlur={() => setFocusedInput(null)}
                  animate={{ borderColor: focusedInput === "message" ? "#0071e3" : "rgba(255,255,255,0.1)", backgroundColor: focusedInput === "message" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.2)" }}
                  placeholder="Hey Vinay, let's discuss your AIML + Full Stack expertise..." 
                  style={{ width: "100%", padding: "1rem", borderRadius: "12px", outline: "none", color: "white", fontFamily: "inherit", fontSize: "1rem", minHeight: "120px", resize: "none", transition: "all 0.3s ease" }} 
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,113,227,0.5)" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  marginTop: "1rem",
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #0071e3, #29c1d1)",
                  color: "white",
                  border: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem"
                }}
              >
                <Sparkles size={18} />
                Dispatch Message
                <Send size={18} style={{ marginLeft: "0.5rem" }} />
              </motion.button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
