"use client";

import { portfolioData } from "@/data/portfolio.data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "../ui/button";

export default function Hero() {
  const heroRef = useRef(null);

  // track scroll only within hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Move image one viewport height down as you scroll through hero
  const pictureY = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);
  const pictureScale = useTransform(scrollYProgress, [0, 1], [1, 0.65]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-between max-w-[1368px] mx-auto px-8 overflow-visible"
    >
      {/* Text content */}
      {/* <div className="flex-1 z-10">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4">Explore my work and journey in tech.</p>
      </div> */}

      <div className="flex-1 mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.8 },
              },
            }}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-sans font-semibold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient"
          >
            {portfolioData.personal.name.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      damping: 12,
                      stiffness: 100,
                      delay: 0.2 + index * 0.05,
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.8 },
              },
            }}
            initial="hidden"
            animate="visible"
            className="text-2xl md:text-4xl text-foreground mb-4"
          >
            {portfolioData.personal.title.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      damping: 12,
                      stiffness: 100,
                      delay: 0.4 + index * 0.03,
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            {/* {portfolioData.personal.tagline} */}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4 justify-start flex-wrap"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent/80 shadow-gold-glow hover:shadow-elevated transition-all duration-300 font-medium"
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
                className="border-2 border-primary/30 bg-card/80 backdrop-blur-apple text-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-foreground transition-all duration-300 font-medium shadow-subtle hover:shadow-elevated"
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Picture */}
      <motion.div
        className="flex-1 flex justify-center items-center relative z-20"
        style={{
          y: pictureY,
          scale: pictureScale,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
          className="relative w-full max-w-[400px] md:max-w-[500px] group"
          style={{ perspective: "1000px" }}
        >
          <div
            className="relative w-full h-full transition-transform duration-500 rounded-lg"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
            <div className="relative w-full h-full bg-background rounded-full overflow-hidden">
              <Image
                src="/assets/profile.png"
                alt="My Photo"
                width={800}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
