import { motion } from "motion/react";
export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "100%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-50 w-50 mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-75 w-75 mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-125 w-125 mt-52 animate-ping" />
      <div className="border border-[#f7ab0a] rounded-full opacity-20 h-155 w-155 absolute mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-200 w-200 mt-52 animate-ping" />
    </motion.div>
  );
}
