import Header from "@/components/Header";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="h-screen">
      <Header />
      <section id="hero">
        <Hero />
      </section>
    </main>
  );
}
