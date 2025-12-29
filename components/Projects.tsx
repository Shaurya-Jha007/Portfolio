"use client";
import shopper from "@/public/shopper.png";
import kaido from "@/public/kaido.png";
import netflix from "@/public/netflix.png";
import tomato from "@/public/tomato.png";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import { motion } from "motion/react";

const MotionImage = motion.create(Image);

interface Project {
  id: number;
  title: string;
  about: string;
  imageUrl: StaticImageData;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "ShopSphere",
      about:
        "ShopSphere is a full-fledged e-commerce platform built to deliver a smooth and modern shopping experience. It allows users to browse products, manage carts, and complete secure checkouts seamlessly. The project focuses heavily on performance, clean UI, and scalability, using modern web technologies and a structured backend. It reflects my understanding of real-world e-commerce flows and attention to user experience.",
      imageUrl: shopper,
    },
    {
      id: 2,
      title: "KaidoAnime",
      about:
        "KaidoAnime is an original anime streaming web application designed with a strong focus on responsiveness and smooth navigation. It fetches real-time anime data using the Jikan and Kitsu APIs and presents it through a clean, user-friendly interface. The project highlights my skills in API integration, UI structuring, and handling dynamic content while ensuring a consistent experience across devices.",
      imageUrl: kaido,
    },
    {
      id: 3,
      title: "Tomato",
      about:
        "Tomato is an online food delivery application that simulates a real-world ordering experience. Users can browse menus, add or remove items from the cart, and place orders after authentication. The project emphasizes state management, user flows, and interactive UI elements. It helped me understand how food delivery platforms handle cart logic, personalization, and smooth user interactions.",
      imageUrl: tomato,
    },
    {
      id: 4,
      title: "Netflix Clone",
      about:
        "The Netflix Clone is a responsive web application inspired by Netflix’s core features, built with real-time data fetching from APIs. It replicates key functionalities such as dynamic content loading, category-based browsing, and a familiar UI layout. While staying true to the original design, I added my own touches, making it a great learning project for API handling and UI replication.",
      imageUrl: netflix,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project) => {
          return (
            <div
              className="w-screen shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
              key={project.id}
            >
              <MotionImage
                loading="lazy"
                src={project.imageUrl}
                alt={`${project.title}'s preview`}
                initial={{ opacity: 0, y: -300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="w-108 rounded-md"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#f7ab0a]/50">
                    Project {project.id} of {projects.length}:
                  </span>
                  {project.title}
                </h4>
                <p className="text-lg text-center md:text-left">
                  {project.about}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[20%] bg-[#f7ab0a]/10 left-0 h-125 -skew-y-6" />
    </motion.div>
  );
}
