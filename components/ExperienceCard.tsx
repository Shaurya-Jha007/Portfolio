import lifehetuImg from "@/public/lifehetu.png";
import Image from "next/image";
export default function ExperienceCard() {
  return (
    <article>
      <Image src={lifehetuImg} alt="Lifehetu company's logo" />
    </article>
  );
}
