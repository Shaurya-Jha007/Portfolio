import lifehetuImg from "@/public/lifehetu.png";
import Image from "next/image";
import { motion } from "motion/react";

const MotionImage = motion.create(Image);

export default function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-xl items-center space-y-6 bg-[#292929] p-8 md:p-10 w-[90%] md:max-w-xl xl:max-w-3xl">
      <div className="relative w-32 h-32 xl:w-40 xl:h-40">
        <MotionImage
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          fill
          className="rounded-full object-cover"
          src={lifehetuImg}
          alt="Lifehetu company's logo"
        />
      </div>

      <div className="flex flex-col justify-center items-center text-center md:text-left px-0 md:px-6">
        <div>
          <h4 className="text-3xl font-light">Next.js Developer Intern</h4>

          <p className="font-bold text-xl mt-1">
            LifeHetu Technologies Pvt. Ltd.
          </p>

          <div className="flex justify-center md:justify-start space-x-3 my-3">
            <Image
              height={40}
              width={40}
              className="rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/960px-Typescript_logo_2020.svg.png"
              alt="TypeScript"
            />
            <Image
              height={40}
              width={40}
              className="rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s"
              alt="Next.js"
            />
            <Image
              height={40}
              width={40}
              className="rounded-full"
              src="https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png"
              alt="Material UI"
            />
            <Image
              height={40}
              width={40}
              className="rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZsmpHvJVwm9bEAj-SfiRHFcgXRnFyzwpwQ&s"
              alt="React.js"
            />
            <Image
              height={40}
              width={40}
              className="rounded-full"
              src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
              alt="Redux"
            />
            <Image
              height={40}
              width={40}
              className="rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
              alt="Postgresql"
            />
          </div>
        </div>
        <div>
          <p className="uppercase py-4 text-gray-300 text-sm">
            18 Aug, 2025 - 18 Dec, 2025
          </p>

          <ul className="list-disc space-y-3 ml-5 text-base text-left">
            <li>
              Migrated a production-scale project from Next.js 13 to Next.js 15.
            </li>
            <li>
              Built and enhanced responsive web pages, incorporating modern
              UI/UX practices.
            </li>
            <li>
              Implemented animations and interactive features to improve user
              engagement and overall site experience.
            </li>
            <li>
              Learnt and applied Material UI (MUI) component library for
              scalable, consistent, and accessible design
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
