"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import styles from "./Navbar.module.css";
import { MagneticButton } from "./MagneticButton";

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo}>
          <motion.div 
            style={{ display: "contents" }}
            animate={{ textShadow: ["0px 0px 0px rgba(0,113,227,0)", "0px 0px 20px rgba(0,113,227,0.5)", "0px 0px 0px rgba(0,113,227,0)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <Brain className="w-6 h-6" style={{ color: "var(--accent-blue)" }} />
            </motion.div>
            LocalMind OS
          </motion.div>
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/features" className={styles.navLink}>Features</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/demo" className={styles.navLink}>Demo</Link>
        </div>

        <a href="https://github.com/Vinaykalacharla/LOCALMIND_OS_RELEASE/releases/download/v1.0.0/LocalMind.OS_1.1.14_x64-setup.exe" style={{ textDecoration: 'none' }}>
          <MagneticButton className={styles.btnPrimary} style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}>
            Get for Windows
          </MagneticButton>
        </a>
      </div>
    </nav>
  );
}
