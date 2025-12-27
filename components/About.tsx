"use client";
import Image from "next/image";
import { motion } from "motion/react";
import profile from "@/public/profile.jpg";

const MotionImage = motion.create(Image);

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative mb-20 sm:mt-20 md:mb-0 shrink-0
                   w-60 h-60
                   md:w-72 md:h-96
                   xl:w-80 xl:h-100"
      >
        <MotionImage
          src={profile}
          fill
          loading="eager"
          alt="Shaurya's profile picture."
          className="rounded-full object-cover md:rounded-lg"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:p-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hi there I&apos;m Shaurya. I started coding in 11<sup>th</sup>{" "}
          standard and went on to learn languages and frameworks such as{" "}
          <strong>JavaScript, React.js, Next.js</strong>, etc. I finished my
          Master&apos;s in Computer Applications in 2025. I have completed
          multiple certification courses and Internships in the field of web
          development. My craving for challenges and continuous learning and
          improving cycle has brought me where I stand today. There&apos;s still
          plenty of room for improvement and I want you to be my partner in this
          journey of learning and improving. I am currently seeking entry-level
          opportunities to learn, contribute, and grow.
        </p>
      </div>
    </motion.div>
  );
}
