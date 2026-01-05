"use client";
import { useText } from "@/util/useText";

export default function Typewriter() {
  const { text } = useText();
  return <span className="mr-3">{text}</span>;
}
