"use client";
import Skill from "./Skill";
import { motion } from "motion/react";
export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-500 xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency.
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill skill="HTML" />
        <Skill skill="CSS" />
        <Skill skill="JS" />
        <Skill skill="React" />
        <Skill skill="Redux" />
        <Skill skill="Next" />
        <Skill skill="Node" />
        <Skill skill="Express" />
        <Skill skill="TCSS" />
        <Skill skill="TS" />
        <Skill skill="Postgres" />
        <Skill skill="MUI" />
      </div>
    </motion.div>
  );
}
