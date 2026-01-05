import Skill from "./Skill";
import { MotionDiv } from "@/util/MotionImage";
export default function Skills() {
  return (
    <MotionDiv
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
        <Skill proficiency={92} skill="HTML" directionLeft={true} />
        <Skill proficiency={85} skill="CSS" directionLeft={true} />
        <Skill proficiency={90} skill="JS" directionLeft={true} />
        <Skill proficiency={96} skill="React" directionLeft={true} />
        <Skill proficiency={88} skill="Redux" directionLeft={true} />
        <Skill proficiency={93} skill="Next" directionLeft={true} />
        <Skill proficiency={77} skill="Node" directionLeft={false} />
        <Skill proficiency={68} skill="Express" directionLeft={false} />
        <Skill proficiency={75} skill="TCSS" directionLeft={false} />
        <Skill proficiency={80} skill="TS" directionLeft={false} />
        <Skill proficiency={83} skill="Postgres" directionLeft={false} />
        <Skill proficiency={81} skill="MUI" directionLeft={false} />
      </div>
    </MotionDiv>
  );
}
