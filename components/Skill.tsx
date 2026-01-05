import { MotionImage } from "@/util/MotionImage";
import { skillsLink } from "@/util/skillsLink";
import { tech } from "@/util/skillsLink";

interface SkillProp {
  directionLeft?: boolean;
  skill: tech;
  proficiency: number;
}

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
