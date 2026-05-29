"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { TerminalDemonstration } from "../../components/TerminalDemonstration";
import { InteractiveChatDemo } from "../../components/InteractiveChatDemo";

export default function DemoPage() {
  const [triggerCount, setTriggerCount] = useState(0);

  return (
    <main className={styles.container} style={{ paddingTop: "120px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <section style={{ textAlign: "center", padding: "2rem" }}>
        <motion.h1 
          className={styles.heroTitle}
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "1rem", color: "#1d1d1f" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Interactive Demo
        </motion.h1>
        <motion.p 
          className={styles.heroSubtitle}
          style={{ margin: "0 auto", marginBottom: "2rem" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Experience the speed of local-first RAG. Try asking a question below.
        </motion.p>
      </section>
      
      <div style={{ flex: 1, display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "2rem", padding: "2rem 4rem", flexWrap: "wrap", maxWidth: "1600px", margin: "0 auto", width: "100%" }}>
        
        {/* Chat UI (Left Side) */}
        <div style={{ flex: "1 1 600px", maxWidth: "800px" }}>
          <InteractiveChatDemo onUserMessage={() => setTriggerCount(c => c + 1)} />
        </div>

        {/* Terminal Logs (Right Side) */}
        <div style={{ flex: "1 1 400px", maxWidth: "600px" }}>
          {/* We adjust TerminalDemonstration internally to fill width, so we wrap it here */}
          <div style={{ transform: "scale(0.95)", transformOrigin: "top left" }}>
            <TerminalDemonstration triggerChat={triggerCount} />
          </div>
        </div>

      </div>
    </main>
  );
}
