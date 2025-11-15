"use client";

import { portfolioData } from "@/data/portfolio.data";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import { WavyBackground } from "../ui/wavy-background";

export default function Hero() {
  const heroRef = useRef(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden">
      <WavyBackground
        className="absolute inset-0"
        containerClassName="absolute inset-0"
        waveOpacity={0.3}
        blur={12}
        speed="slow"
      />

      {/* Content wrapper */}
      <div className="relative z-10 min-h-screen flex items-center justify-center max-w-[1368px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center space-y-8"
        >
          {/* Main heading with enhanced visual hierarchy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="relative inline-block"
          >
            {/* Glow effect behind text */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-full" />

            <motion.h1
              className="relative text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {portfolioData.personal.name.split("").map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    delay: 0.3 + index * 0.04,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Subtitle in glassmorphic pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-card/40 backdrop-blur-apple shadow-subtle">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-base md:text-lg text-foreground font-medium">
                {portfolioData.personal.title}
              </span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Crafting resilient systems and delightful experiences through clean
            architecture and thoughtful design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent/80 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 font-semibold text-base px-8"
              >
                Get in Touch
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="border-2 border-white/20 bg-card/60 backdrop-blur-apple text-foreground hover:bg-card/80 hover:border-white/30 transition-all duration-300 font-semibold text-base px-8 shadow-subtle hover:shadow-elevated"
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
