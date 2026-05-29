"use client";

import { motion } from "framer-motion";
import { Mail, Send, Sparkles } from "lucide-react";
import { useState } from "react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.5-3.8 5.2 5.2 0 0 0 .1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.2 5.2 0 0 0 .1 3.8A5.2 5.2 0 0 0 3 9.6c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const getInputStyle = (id: string) => ({
    background: "transparent",
    border: "none",
    borderBottom: focusedInput === id ? "3px solid #0071e3" : "3px dashed rgba(255,255,255,0.2)",
    color: "white",
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: 700,
    outline: "none",
    padding: "0.25rem 1rem",
    margin: "0 0.5rem",
    width: id === "message" ? "100%" : "280px",
    maxWidth: id === "message" ? "800px" : "none",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    boxShadow: focusedInput === id ? "0 20px 40px -10px rgba(0,113,227,0.3)" : "none"
  });

  return (
    <section style={{ 
      position: "relative", 
      background: "#050505", 
      overflow: "hidden", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      padding: "8rem 2rem", 
      borderRadius: "48px 48px 0 0", 
      marginTop: "4rem",
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }}>
      
      {/* Intense Background Glow */}
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(0,113,227,0.15) 0%, rgba(0,0,0,0) 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1400px", display: "flex", flexDirection: "column", gap: "6rem" }}>
        
        {/* Floating Action Pills */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
          {[
            { name: "localmindos@gmail.com", icon: <Mail size={22} />, href: "mailto:localmindos@gmail.com", color: "#ff4b4b" },
            { name: "github.com/Vinaykalacharla", icon: <GithubIcon size={22} />, href: "https://github.com/Vinaykalacharla", color: "#ffffff" },
            { name: "linkedin.com/in/vinay-kalacharla", icon: <LinkedinIcon size={22} />, href: "https://www.linkedin.com/in/vinay-kalacharla-2243252b9/", color: "#00a0dc" }
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 120, damping: 14 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: link.color, 
                color: "#050505", 
                borderColor: link.color,
                boxShadow: `0 0 40px ${link.color}60`
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.25rem 2.5rem",
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.02)",
                color: "white",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.125rem",
                backdropFilter: "blur(20px)",
                transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease"
              }}
            >
              {link.icon}
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Massive Conversational Form */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          style={{
            background: "linear-gradient(180deg, rgba(20, 20, 22, 0.8) 0%, rgba(10, 10, 12, 0.9) 100%)",
            backdropFilter: "blur(60px)",
            borderRadius: "40px",
            padding: "clamp(3rem, 8vw, 6rem)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.15)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Decorative Corner Element */}
          <div style={{ position: "absolute", top: 0, right: 0, width: "200px", height: "200px", background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)" }} />

          <div style={{ 
            fontSize: "clamp(2rem, 5vw, 4rem)", 
            fontWeight: 600, 
            color: "#a1a1aa", 
            lineHeight: 1.8, 
            textAlign: "left",
            letterSpacing: "-0.02em"
          }}>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>Hey Vinay,</motion.span> <br/>
            
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>I'm</motion.span> 
            <input 
              type="text" 
              placeholder="Your Name" 
              style={getInputStyle("name")} 
              value={formData.name} 
              onFocus={() => setFocusedInput("name")}
              onBlur={() => setFocusedInput(null)}
              onChange={e => setFormData({...formData, name: e.target.value})} 
            />. <br/>
            
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>You can reach me at</motion.span> 
            <input 
              type="email" 
              placeholder="name@company.com" 
              style={getInputStyle("email")} 
              value={formData.email} 
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
              onChange={e => setFormData({...formData, email: e.target.value})} 
            />. <br/>
            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ marginTop: "2rem" }}>
              I'd love to chat about <br/>
              <input 
                type="text" 
                placeholder="AIML + Full Stack expertise..." 
                style={getInputStyle("message")} 
                value={formData.message} 
                onFocus={() => setFocusedInput("message")}
                onBlur={() => setFocusedInput(null)}
                onChange={e => setFormData({...formData, message: e.target.value})} 
              />.
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            style={{ marginTop: "5rem", display: "flex", justifyContent: "flex-end" }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "1.5rem 4rem",
                borderRadius: "100px",
                background: "white",
                color: "#050505",
                border: "none",
                fontWeight: 900,
                fontSize: "1.5rem",
                letterSpacing: "-0.02em",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "1rem"
              }}
            >
              <Sparkles size={28} />
              Send It
              <Send size={24} style={{ marginLeft: "0.5rem" }} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
