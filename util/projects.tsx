import shopper from "@/public/shopper.png";
import kaido from "@/public/kaido.png";
import netflix from "@/public/netflix.png";
import tomato from "@/public/tomato.png";
import type { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  about: string;
  imageUrl: StaticImageData;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ShopSphere",
    about:
      "ShopSphere is a full-fledged e-commerce platform built to deliver a smooth and modern shopping experience. It allows users to browse products, manage carts, and complete secure checkouts seamlessly. The project focuses heavily on performance, clean UI, and scalability, using modern web technologies and a structured backend. It reflects my understanding of real-world e-commerce flows and attention to user experience.",
    imageUrl: shopper,
    link: "https://shop-sphere-9ofevh93v-shaurya-jhas-projects-81728d7b.vercel.app/",
  },
  {
    id: 2,
    title: "KaidoAnime",
    about:
      "KaidoAnime is an original anime streaming web application designed with a strong focus on responsiveness and smooth navigation. It fetches real-time anime data using the Jikan and Kitsu APIs and presents it through a clean, user-friendly interface. The project highlights my skills in API integration, UI structuring, and handling dynamic content while ensuring a consistent experience across devices.",
    imageUrl: kaido,
    link: "https://kaidoanime-e78d1.web.app/",
  },
  {
    id: 3,
    title: "Tomato",
    about:
      "Tomato is an online food delivery application that simulates a real-world ordering experience. Users can browse menus, add or remove items from the cart, and place orders after authentication. The project emphasizes state management, user flows, and interactive UI elements. It helped me understand how food delivery platforms handle cart logic, personalization, and smooth user interactions.",
    imageUrl: tomato,
    link: "https://food-delivery-572c3.web.app/",
  },
  {
    id: 4,
    title: "Netflix Clone",
    about:
      "The Netflix Clone is a responsive web application inspired by Netflix’s core features, built with real-time data fetching from APIs. It replicates key functionalities such as dynamic content loading, category-based browsing, and a familiar UI layout. While staying true to the original design, I added my own touches, making it a great learning project for API handling and UI replication.",
    imageUrl: netflix,
    link: "https://netflix-90498.web.app/",
  },
];
