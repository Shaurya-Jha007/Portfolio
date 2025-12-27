"use client";
import { motion } from "motion/react";
import ExperienceCard from "./ExperienceCard";

export default function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex min-h-screen flex-col items-center justify-center md:flex-row max-w-7xl mx-auto"
    >
      {/* Section Title */}
      <h3 className="absolute top-12 uppercase tracking-[12px] text-gray-500 text-2xl">
        Experience
      </h3>

      {/* Card Container */}
      <div className="mt-28 flex items-center justify-center w-full">
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
