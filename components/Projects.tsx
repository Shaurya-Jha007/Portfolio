import { MotionImage, MotionDiv } from "@/util/MotionImage";
import { projects } from "@/util/projects";

export default function Projects() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects.map((project) => {
          return (
            <div
              className="w-screen shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
              key={project.id}
            >
              <a href={project.link} target="_blank">
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
              </a>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#f7ab0a]/50">
                    Project {project.id} of {projects.length}:
                  </span>{" "}
                  <a href={project.link} target="_blank">
                    {project.title}
                  </a>
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
    </MotionDiv>
  );
}
