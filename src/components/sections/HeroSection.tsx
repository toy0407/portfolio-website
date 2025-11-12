"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-between max-w-[1368px] mx-auto px-8 overflow-visible"
    >
      {/* Text content */}
      <div className="flex-1 z-10">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4">Explore my work and journey in tech.</p>
      </div>

      {/* Picture */}
      <motion.div
        className="flex-1 flex justify-center items-center relative z-20"
        style={{
          y: pictureY,
          scale: pictureScale,
        }}
      >
        <Image
          src="/assets/profile.jpg"
          alt="My Photo"
          width={800}
          height={800}
          className="w-[800px] h-auto rounded-lg object-cover"
        />
      </motion.div>
    </section>
  );
}
