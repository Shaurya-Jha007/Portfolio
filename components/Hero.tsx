"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
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
    <section>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#f7ab0a" />
      </h1>
    </section>
  );
}
