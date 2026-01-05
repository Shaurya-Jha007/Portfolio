import { SocialIcon } from "react-social-icons";
export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div className="flex flex-row items-center">
        <SocialIcon
          target="_blank"
          url="https://x.com/Shauryajha1"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Shaurya-Jha007"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target="_blank"
          url="https://www.linkedin.com/in/shaurya-jha-52b276347"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </div>
    </header>
  );
}
