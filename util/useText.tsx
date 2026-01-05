"use client";
import { useTypewriter } from "react-simple-typewriter";

export function useText() {
  const [text, count] = useTypewriter({
    words: [
      "Here's my portfolio!",
      "Guy-who-loves-anime.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return { text };
}
