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
    name: "Home",
  },
  {
    id: 2,
    link: "#about",
    name: "About",
  },
  {
    id: 3,
    link: "#product",
    name: "Product",
  },
  {
    id: 4,
    link: "#blog",
    name: "Blog",
  },
  {
    id: 5,
    link: "#contact",
    name: "Contact",
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
