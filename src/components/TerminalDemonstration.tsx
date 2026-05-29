"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const initialLogs = [
  { text: "$ localmind start --verbose", delay: 0 },
  { text: "[+] Initializing LocalMind OS v1.0.0", delay: 800 },
  { text: "[+] Booting ChromaDB Vector Store on port 8000...", delay: 1200 },
  { text: "[+] Loading Llama 3 (8B) Q4_K_M quantized...", delay: 2000 },
  { text: "[+] Allocating 5.4GB RAM...", delay: 2800 },
  { text: "[+] GPU Offloading: 33/33 layers (Apple Metal)", delay: 3200 },
  { text: "[+] Mounting AES-GCM Encrypted Vault...", delay: 4000 },
  { text: "[+] Enclave locked.", delay: 4500 },
  { text: "[+] Server Ready in 1.42s.", delay: 5000 },
  { text: "Listening on http://localhost:1337", delay: 5200 }
];

export function TerminalDemonstration({ triggerChat = 0 }: { triggerChat?: number }) {
  const [logs, setLogs] = useState(initialLogs);
  const [visibleLogs, setVisibleLogs] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLogs]);

  useEffect(() => {
    if (!hasStarted) return;
    
    // Reset
    setVisibleLogs(0);

    const timeouts = logs.map((log, index) => {
      return setTimeout(() => {
        setVisibleLogs(index + 1);
      }, log.delay);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [hasStarted]);

  useEffect(() => {
    if (triggerChat > 0) {
      const chatSequence = [
        { text: `[+] POST /v1/chat/completions (User Query)`, delay: 100 },
        { text: `[+] Querying local ChromaDB for semantic match...`, delay: 300 },
        { text: `[+] Fetched 3 chunks from 'Q3_Financials.pdf' (14ms)`, delay: 800 },
        { text: `[+] Streaming Llama-3 inference...`, delay: 1200 },
        { text: `[+] Stream complete. 34.2 tokens/sec`, delay: 2800 }
      ];
      setLogs(prev => [...prev, ...chatSequence]);
      
      const currentLen = logs.length;
      chatSequence.forEach((log, index) => {
        setTimeout(() => {
          setVisibleLogs(currentLen + index + 1);
        }, log.delay);
      });
    }
  }, [triggerChat]);

  return (
    <div ref={containerRef} style={{ width: "100%", padding: "8rem 2rem", display: "flex", justifyContent: "center", background: "#fbfbfd" }}>
      <motion.div 
        initial={{ opacity: 0, y: 100, rotateX: 20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        onViewportEnter={() => setHasStarted(true)}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        style={{ width: "100%", maxWidth: "800px", perspective: "1000px" }}
      >
        <div style={{ background: "rgba(0,0,0,0.85)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 32px 64px rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}>
          
          {/* Terminal Header */}
          <div style={{ padding: "1rem", background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
            </div>
            <div style={{ flex: 1, textAlign: "center", color: "#86868b", fontSize: "0.875rem", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
              <Terminal size={14} /> localmind-server — zsh
            </div>
          </div>

          {/* Terminal Body */}
          <div ref={scrollRef} style={{ padding: "2rem", height: "400px", overflowY: "auto", color: "#27c93f", fontFamily: "'Fira Code', 'Courier New', monospace", fontSize: "1rem", lineHeight: 1.6, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {logs.slice(0, visibleLogs).map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                style={{ color: i === 0 || i === initialLogs.length - 1 ? "#fff" : "#27c93f" }}
              >
                {log.text}
              </motion.div>
            ))}
            {hasStarted && (
              <motion.div 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ width: "10px", height: "1.2rem", background: "white", marginTop: "4px" }}
              />
            )}
          </div>

        </div>
      </motion.div>
    </div>
  );
}
