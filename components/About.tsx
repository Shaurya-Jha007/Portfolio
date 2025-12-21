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
      <MotionImage
        src={profile}
        height={224}
        width={224}
        loading="lazy"
        alt="Shaurya's profile picture."
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className="mb-20 sm:mt-20 md:mb-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-80"
      />
      <div className="space-y-10 px-0 md:p-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugit
          voluptatibus at cumque porro omnis quas, quia, eius, quis et cum
          itaque voluptates laudantium quibusdam maiores magni tempore nihil
          numquam reiciendis. Qui nostrum, voluptate ipsum voluptates vitae
          culpa possimus, eos repellendus impedit perferendis esse molestiae ex
          earum ipsa ea labore minus delectus cumque quia doloremque eveniet!
          Voluptatum, reiciendis aspernatur. Inventore tempora a exercitationem,
          quisquam ut consectetur dolore labore modi vero, iusto eum voluptatem
          doloremque harum. Saepe eligendi neque quam optio eveniet esse aliquid
          libero eius in sed animi sunt autem amet distinctio, rem delectus
          ipsa? Corrupti quas ipsum tempore maxime.
        </p>
      </div>
    </motion.div>
  );
}
