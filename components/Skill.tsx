import { motion } from "motion/react";
import Image from "next/image";

const MotionImage = motion.create(Image);

type tech =
  | "HTML"
  | "CSS"
  | "JS"
  | "TS"
  | "React"
  | "Next"
  | "Node"
  | "Express"
  | "Redux"
  | "TCSS"
  | "MUI"
  | "Postgres";

interface SkillProp {
  directionLeft?: boolean;
  skill: tech;
  proficiency: number;
}

const skillsLink = {
  HTML: "https://cdn.sanity.io/images/nqidomjp/production/9da8090fbd9865c895a2c864731626b031c90f64-1800x1000.webp",
  CSS: "https://cdn.sanity.io/images/nqidomjp/production/9aa17166f0ad5434436dc9f6d23c7941157021be-960x550.jpg",
  JS: "https://cdn.sanity.io/images/nqidomjp/production/cf93cae8ecf1ef7cbe3cf24b0973c66a73fb8aeb-587x330.png",
  TS: "https://cdn.sanity.io/images/nqidomjp/production/38a20aaf5c656374ed156f2e2558ce9795467f9e-2500x2500.svg",
  React:
    "https://cdn.sanity.io/images/nqidomjp/production/9b4888ff4e2e183bd016e4ca7f60637c557ab131-301x167.png",
  Next: "https://cdn.sanity.io/images/nqidomjp/production/2d6776cd8ccaa53c6e548e03117671e1de4aa510-629x629.png",
  Node: "https://cdn.sanity.io/images/nqidomjp/production/84f4c1a9c107798158dde3d4246668371a6c1064-512x512.png",
  Express:
    "https://cdn.sanity.io/images/nqidomjp/production/b524e02aea6e32b20371e1e2db13100974d4c2c6-920x920.png",
  Redux:
    "https://cdn.sanity.io/images/nqidomjp/production/2bb780d2e8cb927ea10345181de06ab528a3523a-225x225.png",
  TCSS: "https://cdn.sanity.io/images/nqidomjp/production/58f072b718b2c43df0b8330a1c28658bba06ddb2-2048x2048.png",
  MUI: "https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png",
  Postgres:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
};

export default function Skill({
  directionLeft,
  skill,
  proficiency,
}: SkillProp) {
  return (
    <div className="group relative flex cursor-pointer">
      <MotionImage
        height={96}
        width={96}
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 1 }}
        src={skillsLink[skill]}
        alt="HTML logo"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
}
