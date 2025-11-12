"use client";

import { portfolioData } from "@/data/portfolio.data";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "../ui/button";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 px-4 bg-card/30 scroll-snap-section"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-16 text-center border border-primary/30 shadow-purple-glow"
        >
          {/* Animated background */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
          />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              {portfolioData.cta.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto"
            >
              {portfolioData.cta.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold-glow hover:shadow-xl transition-all text-lg px-8 group"
              >
                <a href={portfolioData.cta.buttonLink}>
                  {portfolioData.cta.buttonText}
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
