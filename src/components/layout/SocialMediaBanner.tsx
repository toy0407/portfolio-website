"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code2,
  Instagram,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio.data";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  leetcode: Code2,
  instagram: Instagram,
};

export const SocialMediaBanner = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4"
    >
      {portfolioData.socials.map((social, index) => {
        const Icon = iconMap[social.icon as keyof typeof iconMap];
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-card/60 backdrop-blur-glass border border-primary/20 flex items-center justify-center text-foreground hover:text-accent hover:border-accent transition-colors hover:shadow-gold-glow"
            style={{ transitionDuration: "0.3s" }}
          >
            <Icon size={20} />
          </motion.a>
        );
      })}
      <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent mx-auto mt-4" />
    </motion.div>
  );
};
