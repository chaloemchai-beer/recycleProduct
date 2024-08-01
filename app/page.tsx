import About from "@/components/About";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Stack from "@/components/Stack";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero />
   <About />
   <Product />
   <Card />
   <Stack />
   <Contact />
   </>
  );
}
