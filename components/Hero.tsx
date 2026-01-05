import { Cursor } from "react-simple-typewriter";
import Typewriter from "./Typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import profile from "@/public/hero.png";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={profile}
        alt="Shaurya's profile picture"
        height={100}
        width={100}
        className="relative rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl xl:text-4xl font-semibold px-10">
          <Typewriter />
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
