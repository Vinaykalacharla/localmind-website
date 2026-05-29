"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Wifi, WifiOff, Power } from "lucide-react";

export function OfflineToggleInteractive() {
  const containerRef = useRef(null);
  const [isOffline, setIsOffline] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"]
  });

  // Automatically flip the switch as they scroll past 50%
  scrollYProgress.onChange((v) => {
    if (v > 0.8 && !isOffline) setIsOffline(true);
    if (v < 0.2 && isOffline) setIsOffline(false);
  });

  return (
    <motion.div 
      ref={containerRef} 
      animate={{ backgroundColor: isOffline ? "#000000" : "#fbfbfd", color: isOffline ? "#27c93f" : "#1d1d1f" }}
      transition={{ duration: 1 }}
      style={{ padding: "12rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", minHeight: "800px", position: "relative", overflow: "hidden" }}
    >
      
      <motion.div 
        animate={{ opacity: isOffline ? 0.3 : 1, y: isOffline ? -50 : 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px", zIndex: 10 }}
      >
        <h2 style={{ fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>
          Pull the plug.
        </h2>
        <p style={{ fontSize: "1.5rem", color: "#86868b" }}>
          Scroll down to disconnect from the cloud.
        </p>
      </motion.div>

      {/* Massive Physical Switch */}
      <div 
        onClick={() => setIsOffline(!isOffline)}
        style={{ 
          width: "200px", height: "400px", borderRadius: "100px", 
          background: isOffline ? "#1a1a1a" : "#e5e5ea", 
          display: "flex", flexDirection: "column", alignItems: "center", padding: "20px",
          boxShadow: isOffline ? "inset 0 10px 30px rgba(0,0,0,0.8)" : "inset 0 10px 30px rgba(0,0,0,0.1)",
          cursor: "pointer", zIndex: 10, transition: "all 0.5s ease"
        }}
      >
        <motion.div 
          animate={{ y: isOffline ? 160 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ 
            width: "160px", height: "160px", borderRadius: "50%", 
            background: isOffline ? "#27c93f" : "#ffffff", 
            boxShadow: isOffline ? "0 0 64px rgba(39, 201, 63, 0.6), inset 0 -10px 20px rgba(0,0,0,0.2)" : "0 20px 40px rgba(0,0,0,0.2), inset 0 -10px 20px rgba(0,0,0,0.05)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}
        >
          <Power size={64} color={isOffline ? "white" : "#d2d2d7"} />
        </motion.div>
      </div>

      {/* Shattering Wi-Fi Effect */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 0, pointerEvents: "none" }}>
        {!isOffline ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 0.1, scale: 3 }} 
            transition={{ duration: 1 }}
          >
            <Wifi size={400} color="#0071e3" />
          </motion.div>
        ) : (
          <>
            <motion.div initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }} animate={{ opacity: 0, x: -200, y: -200, rotate: -45 }} transition={{ duration: 1, ease: "easeOut" }} style={{ position: "absolute" }}>
              <WifiOff size={400} color="#ff3b30" style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }} />
            </motion.div>
            <motion.div initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }} animate={{ opacity: 0, x: 200, y: 200, rotate: 45 }} transition={{ duration: 1, ease: "easeOut" }} style={{ position: "absolute" }}>
              <WifiOff size={400} color="#ff3b30" style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }} />
            </motion.div>
          </>
        )}
      </div>

      {/* Hacker Mode Text */}
      {isOffline && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ position: "absolute", bottom: "4rem", textAlign: "center", zIndex: 10 }}
        >
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "2rem", fontWeight: 800, letterSpacing: "0.1em", textShadow: "0 0 20px rgba(39,201,63,0.5)" }}>
            SYSTEM FULLY OPERATIONAL.
          </div>
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "1.2rem", marginTop: "1rem", opacity: 0.8 }}>
            NO INTERNET DETECTED.
          </div>
        </motion.div>
      )}

    </motion.div>
  );
}
