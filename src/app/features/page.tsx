"use client";

import { motion } from "framer-motion";
import styles from "../page.module.css";

export default function FeaturesPage() {
  return (
    <main className={styles.container} style={{ paddingTop: "120px" }}>
      <section className={styles.hero} style={{ minHeight: "60vh", padding: "4rem 2rem" }}>
        <motion.h1 
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Features
        </motion.h1>
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Deep dive into the core capabilities of LocalMind OS.
        </motion.p>
      </section>
      
      {/* Content stub */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>100% Offline RAG</h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: 1.6 }}>
          By embedding documents locally and using quantized models, everything stays on your machine.
        </p>

        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Hybrid Retrieval</h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: 1.6 }}>
          Combining BM25 lexical search with dense vector embeddings for maximum recall.
        </p>
      </section>
    </main>
  );
}
