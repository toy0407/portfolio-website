"use client";

import { portfolioData } from "@/data/portfolio.data";
import { cn } from "@/utils/tailwind.utils";
import { FaCircle } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconType } from "react-icons/lib";

interface Category {
  key: string;
  label: string;
  description: string;
  items: Array<{ label: string; icon?: IconType }>;
  icon?: IconType;
}

function Pill({
  label,
  icon,
  index,
}: {
  label: string;
  icon?: IconType;
  index: number;
}) {
  const Icon = icon ?? FaCircle;
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.03,
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-2 rounded-full cursor-default",
        "bg-card/70 border border-white/10 backdrop-blur-apple",
        "text-sm text-foreground/90 hover:bg-card/90",
        "shadow-subtle hover:shadow-elevated"
      )}
    >
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Icon className="h-5 w-5 text-black dark:text-white" />
      </motion.div>
      {label}
    </motion.span>
  );
}

function CategoryCard({
  title,
  description,
  items,
  icon,
  cardIndex,
}: {
  title: string;
  description: string;
  items: Array<{ label: string; icon?: IconType }>;
  icon?: IconType;
  cardIndex: number;
}) {
  const Icon = icon ?? FaCircle;
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.95 }
      }
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: cardIndex * 0.1,
      }}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      className={cn(
        "group relative rounded-2xl p-6 md:p-8",
        "bg-card/60 border border-white/10 backdrop-blur-apple",
        "shadow-subtle hover:shadow-elevated transition-shadow duration-300",
        "overflow-hidden"
      )}
    >
      {/* Accent top border glow */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={
          isInView ? { opacity: 0.6, scaleX: 1 } : { opacity: 0, scaleX: 0 }
        }
        transition={{ delay: cardIndex * 0.1 + 0.3, duration: 0.8 }}
        aria-hidden
      />

      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <motion.div
            className="mt-2"
            initial={{ rotate: -180, opacity: 0 }}
            animate={
              isInView
                ? { rotate: 0, opacity: 1 }
                : { rotate: -180, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: cardIndex * 0.1 + 0.2,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }}
          >
            <Icon className="h-5 w-5 text-black dark:text-white" />
          </motion.div>
          <div>
            <motion.h3
              className="text-xl md:text-2xl font-semibold text-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: cardIndex * 0.1 + 0.15, duration: 0.5 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="mt-1 text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: cardIndex * 0.1 + 0.25, duration: 0.5 }}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {items.map((skill, index) => (
          <Pill
            key={`${title}-${skill.label}`}
            label={skill.label}
            icon={skill.icon}
            index={index}
          />
        ))}
      </div>

      {/* Subtle radial highlight on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-16"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        aria-hidden
        style={{
          background:
            "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.06), transparent 40%)",
        }}
      />
    </motion.div>
  );
}

export default function SkillSection() {
  const categories = portfolioData.skills?.categories ?? [];
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-labelledby="skills-heading"
      className="relative min-h-screen w-full"
    >
      <div className="max-w-[1368px] mx-auto px-8 py-24 relative z-10">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <motion.h2
            id="skills-heading"
            className="text-4xl md:text-6xl font-semibold text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            {"Skills".split("").map((char, index) => (
              <motion.span
                key={`skills-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                  delay: index * 0.05,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A curated set of technologies I use across the stack.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat: Category, index: number) => (
            <CategoryCard
              key={cat.key}
              title={cat.label}
              description={cat.description}
              items={cat.items}
              icon={cat.icon}
              cardIndex={index}
            />
          ))}
        </div>
      </div>

      {/* Ambient background accents */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.2, delay: 0.2 }}
        aria-hidden
      >
        <div className="absolute -top-10 left-1/2 h-64 w-[60vw] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl" />
      </motion.div>
    </section>
  );
}
