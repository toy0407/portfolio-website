"use client";

import { portfolioData } from "@/data/portfolio.data";
import { motion, useInView } from "framer-motion";
import { LuMail, LuPhone, LuArrowRight } from "react-icons/lu";
import { useRef } from "react";
import { Button } from "../ui/button";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24 px-8 bg-gradient-to-br from-muted/40 via-muted/20 to-background"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative overflow-hidden rounded-3xl bg-card/80 backdrop-blur-apple p-12 md:p-16 border border-primary/20 shadow-elevated"
        >
          {/* Subtle animated background */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.15, 0.1, 0.15],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7.5,
            }}
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"
          />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="text-4xl md:text-6xl font-semibold mb-4 pb-2 text-center"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--accent)) 50%, hsl(var(--foreground)) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {portfolioData.cta.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-center font-normal leading-relaxed"
            >
              {portfolioData.cta.description}
            </motion.p>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12"
            >
              <div className="flex items-center gap-3 text-foreground/80">
                <LuMail className="text-accent" size={20} />
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="font-medium hover:text-accent transition-colors duration-300"
                >
                  {portfolioData.personal.email}
                </a>
              </div>

              {portfolioData.personal.phone && (
                <div className="flex items-center gap-3 text-foreground/80">
                  <LuPhone className="text-accent" size={20} />
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="font-medium hover:text-accent transition-colors duration-300"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent/80 shadow-gold-glow hover:shadow-elevated transition-all duration-300 font-medium text-base px-8 group"
                >
                  <a href={portfolioData.cta.buttonLink}>
                    {portfolioData.cta.buttonText}
                    <LuArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      size={20}
                    />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
