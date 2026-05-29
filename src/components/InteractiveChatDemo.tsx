"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, FileText, Bot, User, Database } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export function InteractiveChatDemo({ onUserMessage }: { onUserMessage: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "assistant", content: "LocalMind OS is ready. I have loaded your local vault. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { id: Date.now().toString(), role: "user", content: userMsg }]);
    onUserMessage();

    setIsTyping(true);
    
    // Simulate RAG pipeline delay
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: "assistant", content: "Based on local document `Q3_Financials.pdf` and `Architecture.md`, I've found the relevant vectors. Processing locally...", isStreaming: true }]);
      
      // Simulate streaming
      setTimeout(() => {
        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1].isStreaming = false;
          newMsgs[newMsgs.length - 1].content = "Based on local document `Q3_Financials.pdf`, the revenue increased by 24% year-over-year. As detailed in `Architecture.md`, this data never left your machine during this query.";
          return newMsgs;
        });
      }, 1500);

    }, 2000);
  };

  return (
    <div style={{ display: "flex", width: "100%", maxWidth: "900px", height: "600px", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(40px)", borderRadius: "24px", border: "1px solid rgba(0,0,0,0.08)", overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.05)" }}>
      {/* Sidebar Vault */}
      <div style={{ width: "250px", background: "rgba(0,0,0,0.02)", borderRight: "1px solid rgba(0,0,0,0.05)", padding: "1.5rem", display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Database size={16} /> Local Vault
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", background: "rgba(255,255,255,0.8)", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)", fontSize: "0.875rem", fontWeight: 500, color: "#1d1d1f", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
            <FileText size={18} color="#0071e3" /> Q3_Financials.pdf
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", background: "rgba(255,255,255,0.8)", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)", fontSize: "0.875rem", fontWeight: 500, color: "#1d1d1f", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
            <FileText size={18} color="#0071e3" /> Architecture.md
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", background: "transparent", border: "1px dashed rgba(0,0,0,0.2)", borderRadius: "12px", fontSize: "0.875rem", fontWeight: 500, color: "#86868b", justifyContent: "center", cursor: "pointer" }}>
            + Drop Files
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
        <div style={{ flex: 1, overflowY: "auto", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <AnimatePresence>
            {messages.map(msg => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: "flex", gap: "1rem", alignItems: "flex-start", flexDirection: msg.role === "user" ? "row-reverse" : "row" }}
              >
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: msg.role === "user" ? "#1d1d1f" : "#0071e3", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}>
                  {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div style={{ padding: "1rem", background: msg.role === "user" ? "rgba(0,0,0,0.03)" : "rgba(0,113,227,0.05)", borderRadius: "16px", border: msg.role === "user" ? "none" : "1px solid rgba(0,113,227,0.1)", color: "#1d1d1f", maxWidth: "80%", lineHeight: 1.5 }}>
                  {msg.content}
                  {msg.isStreaming && (
                    <motion.span animate={{ opacity: [0,1,0] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ display: "inline-block", width: "8px", height: "14px", background: "#0071e3", marginLeft: "4px", verticalAlign: "middle" }} />
                  )}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} style={{ display: "flex", gap: "1rem", alignItems: "center", color: "#86868b" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#0071e3", display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}>
                  <Bot size={16} />
                </div>
                <div style={{ display: "flex", gap: "4px", padding: "1rem" }}>
                  <motion.div animate={{ y: [0,-5,0] }} transition={{ repeat: Infinity, delay: 0 }} style={{ width: "6px", height: "6px", background: "#0071e3", borderRadius: "50%" }} />
                  <motion.div animate={{ y: [0,-5,0] }} transition={{ repeat: Infinity, delay: 0.2 }} style={{ width: "6px", height: "6px", background: "#0071e3", borderRadius: "50%" }} />
                  <motion.div animate={{ y: [0,-5,0] }} transition={{ repeat: Infinity, delay: 0.4 }} style={{ width: "6px", height: "6px", background: "#0071e3", borderRadius: "50%" }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={endRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: "1.5rem", borderTop: "1px solid rgba(0,0,0,0.05)", background: "rgba(255,255,255,0.5)" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "1rem" }}>
            <input 
              type="text" 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              placeholder="Ask anything about your local documents..."
              style={{ flex: 1, padding: "1rem 1.5rem", borderRadius: "100px", border: "1px solid rgba(0,0,0,0.1)", background: "#fff", fontSize: "1rem", outline: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}
            />
            <button type="submit" disabled={!input.trim() || isTyping} style={{ width: "52px", height: "52px", borderRadius: "50%", background: input.trim() && !isTyping ? "#1d1d1f" : "#e5e5ea", color: "white", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: input.trim() && !isTyping ? "pointer" : "not-allowed", transition: "all 0.2s" }}>
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
