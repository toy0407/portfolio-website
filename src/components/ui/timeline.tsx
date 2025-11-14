"use client";
import { useScroll, useTransform, motion, useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  logo?: React.ReactNode;
}

export const Timeline = ({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle: string;
  data: TimelineEntry[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <div className="w-full bg-background font-sans md:px-10" ref={containerRef}>
      <div
        ref={headerRef}
        className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10"
      >
        <motion.h2
          className="text-4xl md:text-6xl font-semibold mb-4 text-foreground max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={`${title}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
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
          className="text-muted-foreground text-base md:text-lg max-w-2xl font-normal leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          return <TimelineItem key={index} item={item} index={index} />;
        })}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-border to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-primary via-accent to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineEntry;
  index: number;
}) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: index * 0.15,
      }}
      className="flex justify-start pt-10 md:pt-40 md:gap-10"
    >
      <div className="sticky flex flex-col md:flex-row items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <motion.div
          className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-card/80 backdrop-blur-apple border border-primary/20 flex items-center justify-center shadow-subtle"
          initial={{ scale: 0, rotate: -180 }}
          animate={
            isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
          }
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: index * 0.15 + 0.2,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { type: "spring", stiffness: 400, damping: 17 },
          }}
        >
          {item.logo ? (
            <div className="h-8 w-8 rounded-full overflow-hidden flex items-center justify-center">
              {item.logo}
            </div>
          ) : (
            <div className="h-4 w-4 rounded-full bg-muted border border-primary/30 p-2" />
          )}
        </motion.div>
        <motion.h3
          className="hidden md:block text-xl md:pl-20 md:text-5xl font-semibold text-muted-foreground"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: index * 0.15 + 0.3,
          }}
        >
          {item.title}
        </motion.h3>
      </div>

      <motion.div
        className="relative pl-20 pr-4 md:pl-4 w-full"
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: index * 0.15 + 0.4,
        }}
        whileHover={{
          x: 4,
          transition: { type: "spring", stiffness: 300, damping: 25 },
        }}
      >
        <motion.h3
          className="md:hidden block text-4xl mb-4 text-left font-semibold text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: index * 0.15 + 0.2,
            duration: 0.6,
          }}
        >
          {item.title}
        </motion.h3>
        {item.content}
      </motion.div>
    </motion.div>
  );
};
