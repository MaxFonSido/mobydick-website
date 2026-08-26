import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Story } from "@/components/Story";
import { Values } from "@/components/Values";
import { CateringApp } from "@/components/CateringApp";
import { Locations } from "@/components/Locations";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Story />
        <Values />
        <CateringApp />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
