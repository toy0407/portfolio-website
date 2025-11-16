"use client";

import { portfolioData } from "@/data/portfolio.data";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/utils/tailwind.utils";

export default function AboutSection() {
  const about = portfolioData.about;

  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Parallax for image (only on large screens where image is beside text)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const pictureY = useTransform(scrollYProgress, [0, 0.75], ["-10vh", "30vh"]);
  const pictureScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const facts = Object.entries(about.quickFacts || {});

  // Material color palette for cards (subtle, coherent with theme)
  const cardColors = [
    {
      bg: "bg-gradient-to-br from-blue-500/15 to-blue-600/10",
      border: "border-blue-500/30",
      text: "text-blue-700 dark:text-blue-300",
      valueText: "font-mono text-blue-900 dark:text-blue-100",
    },
    {
      bg: "bg-gradient-to-br from-purple-500/15 to-purple-600/10",
      border: "border-purple-500/30",
      text: "text-purple-700 dark:text-purple-300",
      valueText: "font-mono text-purple-900 dark:text-purple-100",
    },
    {
      bg: "bg-gradient-to-br from-emerald-500/15 to-emerald-600/10",
      border: "border-emerald-500/30",
      text: "text-emerald-700 dark:text-emerald-300",
      valueText: "font-mono text-emerald-900 dark:text-emerald-100",
    },
    {
      bg: "bg-gradient-to-br from-amber-500/15 to-amber-600/10",
      border: "border-amber-500/30",
      text: "text-amber-700 dark:text-amber-300",
      valueText: "font-mono text-amber-900 dark:text-amber-100",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="min-h-screen relative flex items-center justify-center py-24 px-8 bg-gradient-to-br from-accent/[0.03] via-background to-background"
    >
      <div className="max-w-[1368px] mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Text Column */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-6">
            <motion.h2
              id="about-heading"
              className="text-4xl md:text-6xl font-semibold pb-2"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--accent)) 50%, hsl(var(--foreground)) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              {about.title.split("").map((char: string, index: number) => (
                <motion.span
                  key={`about-char-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    delay: index * 0.04,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>
          </div>
          {/* Bio paragraphs */}
          <div className="space-y-5">
            {about.bio.map((para: string, i: number) => (
              <motion.p
                key={`bio-${i}`}
                className="text-sm md:text-base text-muted-foreground/90 leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                }
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                {para}
              </motion.p>
            ))}
          </div>
          {/* Quick facts */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 max-w-3xl gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {facts.map(([key, value], i) => {
              const colors = cardColors[i % cardColors.length];
              return (
                <motion.div
                  key={`fact-${key}`}
                  className={cn(
                    "relative p-6 rounded-2xl border backdrop-blur-sm shadow-subtle hover:shadow-elevated transition-all duration-300",
                    "flex flex-col items-center justify-center gap-2 text-center min-h-[120px]",
                    colors.bg,
                    colors.border
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 1.15 + i * 0.08, duration: 0.4 }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                >
                  {/* Key (small, top) */}
                  <span
                    className={cn(
                      "text-[10px] md:text-xs uppercase tracking-wider font-semibold relative z-10",
                      colors.text
                    )}
                  >
                    {key}
                  </span>
                  {/* Value (large, center) */}
                  <span
                    className={cn(
                      "text-xl md:text-2xl font-bold leading-tight relative z-10",
                      colors.valueText
                    )}
                  >
                    {value as string}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Image Column with conditional parallax */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.9, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[420px] md:max-w-[480px]"
          >
            {/* Apply parallax style only on lg+ screens */}
            <motion.div
              style={{
                y: pictureY,
                scale: pictureScale,
              }}
              className="hidden lg:block"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/30 to-primary/30 blur-2xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-subtle hover:shadow-elevated transition">
                <Image
                  src="/assets/profile.png"
                  alt={about.title}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover select-none pointer-events-none"
                  priority
                />
              </div>
            </motion.div>
            {/* Static image on mobile/tablet (no parallax) */}
            <div className="block lg:hidden">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/30 to-primary/30 blur-2xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-subtle hover:shadow-elevated transition">
                <Image
                  src="/assets/profile.png"
                  alt={about.title}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover select-none pointer-events-none"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
