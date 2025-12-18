"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import profile from "@/public/profile.jpg";
export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hya! This is my portfolio",
      "Guy-who-loves-anime.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={profile}
        alt="Shaurya's profile picture"
        height={128}
        width={128}
        className="rounded-lg"
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#f7ab0a" />
      </h1>
    </section>
  );
}
