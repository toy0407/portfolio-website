"use client";

import { portfolioData } from "@/data/portfolio.data";
import { cn } from "@/utils/tailwind.utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  sourceCode: string;
  liveUrl?: string | null;
  featured: boolean;
}

function TechPill({ tech, index }: { tech: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.05,
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }}
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
        "bg-primary/10 text-foreground border border-primary/20",
        "hover:bg-primary/15 transition-colors cursor-default"
      )}
    >
      {tech}
    </motion.span>
  );
}

function ProjectCard({
  project,
  cardIndex,
  className,
  variant = "default",
}: {
  project: Project;
  cardIndex: number;
  className?: string;
  variant?: "default" | "featured-xl" | "featured-lg" | "featured-md";
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const aspectClass =
    variant === "featured-xl"
      ? "aspect-[21/9]"
      : variant === "featured-md"
      ? "aspect-[4/3]"
      : "aspect-video"; // default and featured-lg

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
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "bg-card/60 border border-white/10 backdrop-blur-apple",
        "shadow-subtle hover:shadow-elevated transition-shadow duration-300",
        className
      )}
    >
      {/* Featured badge */}
      {project.featured && (
        <motion.div
          className="absolute top-4 right-4 z-20"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, rotate: 0 }
              : { opacity: 0, scale: 0, rotate: -180 }
          }
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: cardIndex * 0.1 + 0.3,
          }}
        >
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
            <StarFilledIcon className="h-3 w-3 text-accent" />
            <span className="text-xs font-medium text-accent">Featured</span>
          </div>
        </motion.div>
      )}

      {/* Project image */}
      <motion.div
        className={cn("relative overflow-hidden bg-muted/50", aspectClass)}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }
        }
        transition={{
          duration: 0.8,
          delay: cardIndex * 0.1 + 0.2,
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback to gradient background if image fails to load
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          className="text-xl md:text-2xl font-semibold text-foreground mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: cardIndex * 0.1 + 0.25,
            duration: 0.5,
          }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: cardIndex * 0.1 + 0.35,
            duration: 0.5,
          }}
        >
          {project.description}
        </motion.p>

        {/* Tech stack */}
        <motion.div
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: cardIndex * 0.1 + 0.45,
            duration: 0.5,
          }}
        >
          {project.technologies.map((tech, index) => (
            <TechPill key={tech} tech={tech} index={index} />
          ))}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex gap-3 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: cardIndex * 0.1 + 0.55,
            duration: 0.5,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(project.sourceCode, "_blank")}
              className="border-primary/30 bg-card/80 backdrop-blur-apple text-foreground hover:text-foreground hover:bg-primary/10 hover:border-primary/50"
            >
              <GitHubLogoIcon className="h-4 w-4 mr-2" />
              Source Code
            </Button>
          </motion.div>

          {project.liveUrl && (
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="sm"
                onClick={() => window.open(project.liveUrl!, "_blank")}
                className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent/90 hover:to-accent/80"
              >
                <ExternalLinkIcon className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Subtle hover glow */}
      <motion.div
        className="pointer-events-none absolute -inset-4"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        aria-hidden
        style={{
          background:
            "radial-gradient(800px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.04), transparent 40%)",
        }}
      />
    </motion.div>
  );
}

export default function ProjectSection() {
  const projects = (portfolioData as any).projects as
    | {
        title: string;
        subtitle: string;
        data: Project[];
      }
    | undefined;

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  if (!projects?.data?.length) {
    return null;
  }

  const featuredAll = projects.data.filter((p) => p.featured);
  const featured = featuredAll.slice(0, 3);
  const others = projects.data
    .filter((p) => !p.featured)
    .concat(featuredAll.slice(3)); // any extra featured beyond 3 fall back into normal grid

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="projects-heading"
      className="relative min-h-screen w-full"
    >
      <div className="max-w-[1368px] mx-auto px-8 py-24 relative z-10">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <motion.h2
            id="projects-heading"
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
            {projects.title.split("").map((char, index) => (
              <motion.span
                key={`projects-${index}`}
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
            {projects.subtitle}
          </motion.p>
        </div>

        {/* Featured row (adaptive) */}
        {featured.length > 0 && (
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featured.length === 1 && (
              <ProjectCard
                project={featured[0]}
                cardIndex={0}
                className="md:col-span-2 lg:col-span-3"
                variant="featured-xl"
              />
            )}
            {featured.length === 2 && (
              <>
                <ProjectCard
                  project={featured[0]}
                  cardIndex={0}
                  className="md:col-span-2 lg:col-span-2"
                  variant="featured-lg"
                />
                <ProjectCard
                  project={featured[1]}
                  cardIndex={1}
                  className="md:col-span-1 lg:col-span-1"
                  variant="featured-md"
                />
              </>
            )}
            {featured.length === 3 && (
              <>
                {featured.map((p, i) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    cardIndex={i}
                    className="md:col-span-1 lg:col-span-1"
                    variant="featured-md"
                  />
                ))}
              </>
            )}
          </div>
        )}

        {/* Remaining projects */}
        {others.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {others.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                cardIndex={index}
                variant="default"
              />
            ))}
          </div>
        )}
      </div>

      {/* Ambient background */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.2, delay: 0.2 }}
        aria-hidden
      >
        <div className="absolute top-1/2 left-1/2 h-96 w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-3xl" />
      </motion.div>
    </section>
  );
}
