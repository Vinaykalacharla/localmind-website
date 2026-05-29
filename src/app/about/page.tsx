"use client";

import { motion } from "framer-motion";
import styles from "../page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container} style={{ paddingTop: "120px" }}>
      <section className={styles.hero} style={{ minHeight: "60vh", padding: "4rem 2rem" }}>
        <motion.h1 
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Vision
        </motion.h1>
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Why we built LocalMind OS.
        </motion.p>
      </section>
      
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Taking Back Control</h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", lineHeight: 1.6 }}>
          In an era where every keystroke is sent to a data center, we believe that your most private documents should never leave your hardware.
        </p>
      </section>
    </main>
  );
}
