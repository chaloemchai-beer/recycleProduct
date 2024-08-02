import About from "@/components/About";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Stack from "@/components/Stack";

const links = [
  {
    id: 1,
    link: "#home",
    name: "home",
  },
  {
    id: 2,
    link: "#about",
    name: "about",
  },
  {
    id: 3,
    link: "#product",
    name: "product",
  },
  {
    id: 4,
    link: "#blog",
    name: "blog",
  },
  {
    id: 5,
    link: "#contact",
    name: "contact",
  },
];

export default function Home() {
  return (
   <>
   <Navbar links={links} enableScroll={true} />
   <Hero />
   <About />
   <Product />
   <Card />
   <Stack />
   <Contact />
   </>
  );
}
