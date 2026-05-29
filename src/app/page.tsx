"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, CloudOff, ShieldCheck } from "lucide-react";
import styles from "./page.module.css";
import { OfflineWorkflowAnimation } from "../components/OfflineWorkflowAnimation";
import { AnimatedChat, AnimatedIngestion, AnimatedPrivacy, AnimatedModels, AnimatedVectorization, AnimatedVault } from "../components/AnimatedFeatures";
import dynamic from "next/dynamic";
import { MagneticButton } from "../components/MagneticButton";
import { ContactSection } from "../components/ContactSection";

const ArchitectureExploder = dynamic(() => import("../components/ArchitectureExploder").then(m => m.ArchitectureExploder), { ssr: false });
const TerminalDemonstration = dynamic(() => import("../components/TerminalDemonstration").then(m => m.TerminalDemonstration), { ssr: false });
const ModelCarousel = dynamic(() => import("../components/ModelCarousel").then(m => m.ModelCarousel), { ssr: false });
const RagPipelineVisualizer = dynamic(() => import("../components/RagPipelineVisualizer").then(m => m.RagPipelineVisualizer), { ssr: false });
const LatencySpeedometer = dynamic(() => import("../components/LatencySpeedometer").then(m => m.LatencySpeedometer), { ssr: false });
const OfflineToggleInteractive = dynamic(() => import("../components/OfflineToggleInteractive").then(m => m.OfflineToggleInteractive), { ssr: false });

export default function Home() {
  const splitRef = useRef<HTMLDivElement>(null);
  
  // Track scroll within the 6-item split-screen section
  const { scrollYProgress } = useScroll({
    target: splitRef,
    offset: ["start center", "end center"]
  });

  // 6 visual elements = 6 chunks (approx 16.6% each). Tighten bounds to prevent overlapping crossfades.
  const vis1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const vis2Opacity = useTransform(scrollYProgress, [0.15, 0.18, 0.3, 0.33], [0, 1, 1, 0]);
  const vis3Opacity = useTransform(scrollYProgress, [0.33, 0.36, 0.47, 0.5], [0, 1, 1, 0]);
  const vis4Opacity = useTransform(scrollYProgress, [0.5, 0.53, 0.63, 0.66], [0, 1, 1, 0]);
  const vis5Opacity = useTransform(scrollYProgress, [0.66, 0.69, 0.8, 0.83], [0, 1, 1, 0]);
  const vis6Opacity = useTransform(scrollYProgress, [0.83, 0.86, 1], [0, 1, 1]);

  const vis1Blur = useTransform(scrollYProgress, [0, 0.1, 0.15], ["blur(0px)", "blur(0px)", "blur(10px)"]);
  const vis2Blur = useTransform(scrollYProgress, [0.15, 0.18, 0.3, 0.33], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
  const vis3Blur = useTransform(scrollYProgress, [0.33, 0.36, 0.47, 0.5], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
  const vis4Blur = useTransform(scrollYProgress, [0.5, 0.53, 0.63, 0.66], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
  const vis5Blur = useTransform(scrollYProgress, [0.66, 0.69, 0.8, 0.83], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
  const vis6Blur = useTransform(scrollYProgress, [0.83, 0.86, 1], ["blur(10px)", "blur(0px)", "blur(0px)"]);

  return (
    <main className={styles.container}>
      {/* Standard Hero Section */}
      <section className={styles.hero}>
        <motion.h1 
          className={styles.heroTitle}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
          }}
        >
          {"Your knowledge.".split("").map((char, i) => (
            <motion.span 
              key={"l1-" + i} 
              style={{ display: "inline-block", perspective: "1000px" }}
              variants={{ hidden: { opacity: 0, y: 50, rotateX: -90 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", damping: 12, stiffness: 100 } } }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <br/>
          {"Untethered.".split("").map((char, i) => (
            <motion.span 
              key={"l2-" + i} 
              style={{ display: "inline-block", perspective: "1000px" }}
              variants={{ hidden: { opacity: 0, y: 50, rotateX: -90 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", damping: 12, stiffness: 100 } } }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          A premium local-first workspace for document ingestion, semantic search, and grounded AI chat.
        </motion.p>
        
        <motion.div 
          className={styles.heroMockupWrapper}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <motion.div
            animate={{ y: [-15, 15, -15], rotateZ: [-0.5, 0.5, -0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "100%", height: "100%" }}
          >
            <OfflineWorkflowAnimation />
          </motion.div>
        </motion.div>
      </section>

      {/* Infinite Marquee */}
      <section className={styles.marqueeContainer}>
        <div className={styles.marqueeText}>
          ZERO LATENCY • 100% LOCAL • ABSOLUTE PRIVACY • UNTETHERED • ZERO HALLUCINATIONS •
          ZERO LATENCY • 100% LOCAL • ABSOLUTE PRIVACY • UNTETHERED • ZERO HALLUCINATIONS •
        </div>
      </section>

      {/* Interactive Terminal Demo */}
      <TerminalDemonstration />

      {/* Sticky Split-Screen Section (6 Features) */}
      <section ref={splitRef} className={styles.splitSection}>
        <div className={styles.splitLeft}>
          <motion.div 
            className={styles.textBlock}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Zero<br/>Hallucinations.</h2>
            <p>Engage with your local documents instantly. See exact citations directly within the chat interface.</p>
          </motion.div>
          <motion.div 
            className={styles.textBlock}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Absolute<br/>Privacy.</h2>
            <p>Your local vault is protected by a Scrypt-derived passphrase and AES-GCM encryption.</p>
          </motion.div>
          <motion.div 
            className={styles.textBlock}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Hybrid<br/>Retrieval.</h2>
            <p>Blends dense vector search with lexical scoring and local cross-encoder reranking.</p>
          </motion.div>
          <motion.div 
            className={styles.textBlock}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Model<br/>Agnostic.</h2>
            <p>Switch instantly between Llama 3, Mistral, and Phi-3 depending on your hardware limits.</p>
          </motion.div>
          <motion.div 
            className={styles.textBlock}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Instant<br/>Vectorization.</h2>
            <p>Drop 100-page PDFs into the vault and watch them index locally in seconds, not minutes.</p>
          </motion.div>
          <motion.div 
            className={styles.textBlock}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Persistent<br/>Vaults.</h2>
            <p>Your data is heavily locked down on your SSD. Turn off the app, and nothing leaves.</p>
          </motion.div>
        </div>

        <div className={styles.splitRight}>
          <motion.div className={styles.visualElement} style={{ opacity: vis1Opacity, filter: vis1Blur }}>
            <div style={{ width: "100%", transform: "scale(1.2)", transformOrigin: "center left" }}><AnimatedChat /></div>
          </motion.div>
          <motion.div className={styles.visualElement} style={{ opacity: vis2Opacity, filter: vis2Blur }}>
            <div style={{ width: "100%", transform: "scale(1.2)", transformOrigin: "center left" }}><AnimatedPrivacy /></div>
          </motion.div>
          <motion.div className={styles.visualElement} style={{ opacity: vis3Opacity, filter: vis3Blur }}>
            <div style={{ width: "100%", transform: "scale(1.2)", transformOrigin: "center left" }}><AnimatedIngestion /></div>
          </motion.div>
          <motion.div className={styles.visualElement} style={{ opacity: vis4Opacity, filter: vis4Blur }}>
            <div style={{ width: "100%", transform: "scale(1.2)", transformOrigin: "center left" }}><AnimatedModels /></div>
          </motion.div>
          <motion.div className={styles.visualElement} style={{ opacity: vis5Opacity, filter: vis5Blur }}>
            <div style={{ width: "100%", transform: "scale(1.2)", transformOrigin: "center left" }}><AnimatedVectorization /></div>
          </motion.div>
          <motion.div className={styles.visualElement} style={{ opacity: vis6Opacity, filter: vis6Blur }}>
            <div style={{ width: "100%", transform: "scale(1.2)", transformOrigin: "center left" }}><AnimatedVault /></div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Exploder (300vh Sequence) */}
      <ArchitectureExploder />

      {/* RAG Pipeline Flowchart */}
      <RagPipelineVisualizer />

      {/* Latency Gauge Dashboard */}
      <LatencySpeedometer />

      {/* Model Hot-Swapping Grid */}
      <ModelCarousel />

      {/* Extreme Offline Interactive Toggle */}
      <OfflineToggleInteractive />

      {/* Cloud vs Local Section */}
      <section className={styles.compareSection}>
        <h2 className={styles.heroTitle} style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>The Difference.</h2>
        <div className={styles.compareGrid}>
          
          <motion.div 
            className={styles.compareCard}
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            whileHover={{ scale: 1.05, y: -10, boxShadow: "0 32px 64px rgba(0,0,0,0.1)" }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            style={{ perspective: "1000px" }}
          >
            <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,59,48,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
              <motion.div animate={{ opacity: [1, 0, 1], y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <CloudOff size={64} color="#ff3b30" />
              </motion.div>
            </div>
            <h3>The Cloud</h3>
            <p>Your private documents are uploaded to third-party servers. Data is logged, parsed, and entirely out of your control.</p>
          </motion.div>

          <motion.div 
            className={styles.compareCard}
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            whileHover={{ scale: 1.05, y: -10, boxShadow: "0 32px 64px rgba(0,113,227,0.2)", border: "2px solid #0071e3" }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
            style={{ perspective: "1000px", background: "#1d1d1f", color: "white" }}
          >
            <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "rgba(0,113,227,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
              <motion.div animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0px #0071e3", "0 0 64px #0071e3", "0 0 0px #0071e3"] }} transition={{ duration: 3, repeat: Infinity }}>
                <ShieldCheck size={64} color="#0071e3" />
              </motion.div>
            </div>
            <h3 style={{ color: "white" }}>LocalMind OS</h3>
            <p>Nothing leaves your hardware. Inference, indexing, and embedding all run locally on your CPU or GPU. True ownership.</p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: "8rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 10 }}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "4rem", textAlign: "center", letterSpacing: "-0.03em" }}
        >
          Why Local-First AI is the future.
        </motion.h2>

        <div style={{ maxWidth: "1000px", width: "100%", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(40px)", borderRadius: "24px", border: "1px solid var(--border-light)", boxShadow: "0 24px 48px rgba(0,0,0,0.05)", overflow: "hidden" }}>
          {/* Header Row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: "1px solid var(--border-medium)", background: "rgba(250,250,252,0.9)", padding: "1.5rem", gap: "1rem" }}>
            <div style={{ fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.875rem", display: "flex", alignItems: "center" }}>Feature Set</div>
            <div style={{ fontWeight: 800, color: "var(--accent-blue)", fontSize: "1.125rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><Brain size={20} /> LocalMind OS</div>
            <div style={{ fontWeight: 800, color: "var(--text-secondary)", fontSize: "1.125rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><CloudOff size={20} /> Cloud-Based AI</div>
          </div>
          
          {/* Rows */}
          {[
            { feature: "Privacy & Data Security", local: "100% Secure (Local user-space storage)", cloud: "Exposed (Subject to terms & server leaks)" },
            { feature: "Offline Capabilities", local: "Fully Functional (Air-gapped operation)", cloud: "Disabled (Requires persistent internet)" },
            { feature: "Operational Cost", local: "Zero Cost (Runs on local GPU/CPU)", cloud: "Subscription / Usage API Billings" },
            { feature: "Inference Control", local: "Full Ownership (Custom parameters & weights)", cloud: "Restricted (Model behavior updates arbitrary)" },
            { feature: "Hardware Utilization", local: "Direct (Optimized via Vulkan/Metal runtimes)", cloud: "Indirect (Requires high bandwidth)" },
          ].map((row, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "1.5rem", gap: "1rem", borderBottom: i === 4 ? "none" : "1px solid var(--border-light)", background: i % 2 === 0 ? "transparent" : "rgba(250,250,252,0.4)", transition: "background 0.2s ease" }}
            >
              <div style={{ fontWeight: 700, color: "var(--text-primary)", display: "flex", alignItems: "center", fontSize: "0.95rem" }}>{row.feature}</div>
              <div style={{ fontWeight: 600, color: "var(--accent-blue)", display: "flex", alignItems: "center", fontSize: "0.95rem", paddingRight: "1rem" }}>{row.local}</div>
              <div style={{ fontWeight: 500, color: "var(--text-secondary)", display: "flex", alignItems: "center", fontSize: "0.95rem" }}>{row.cloud}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.finalCta}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, type: "spring" }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <h2>Ready to take control?</h2>
          <a href="https://github.com/Vinaykalacharla/LOCALMIND_OS_RELEASE/releases/download/v1.0.0/LocalMind.OS_1.1.14_x64-setup.exe" style={{ textDecoration: 'none' }}>
            <MagneticButton 
              className={styles.ctaBtnWhite}
              whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Download for Windows
            </MagneticButton>
          </a>
          <p style={{ marginTop: "1rem", color: "rgba(255,255,255,0.5)", fontSize: "0.875rem" }}>
            macOS and Linux versions coming soon.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <ContactSection />

    </main>
  );
}
