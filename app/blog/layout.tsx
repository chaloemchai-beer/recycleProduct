import ContentLists from "@/components/ContentLists";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SlideArticles from "@/components/SlideArticles";

const links = [
  {
    id: 1,
    link: "Search",
    name: "Search",
  },
  {
    id: 2,
    link: "TechCrunch",
    name: "TechCrunch",
  },
  {
    id: 3,
    link: "Startups",
    name: "Startups",
  },
  {
    id: 4,
    link: "More",
    name: "More",
  },
  {
    id: 5,
    link: "Login",
    name: "Login",
  },
];

const sideArticles = [
  {
    category: "Apps",
    title:
      "Apple Vision Pro to launch with over 600 apps and games optimized for the new headset",
    author: "Sarah Perez",
  },
  {
    category: "Venture",
    title:
      "Three San Francisco supervisors receive threats following YC President Garry Tan's tweet",
    author: "Christine Hall",
  },
  {
    category: "Hardware",
    title: "Apple Vision Pro: Day One",
    author: "Brian Heater",
  },
  {
    category: "TC+ Work",
    title: "5 ways construction tech founders can win in 2024",
    author: "Michelle Moon",
  },
];

const articles = [
  {
    category: "Tech",
    title: "Latest in Tech",
    author: "John Doe",
    date: "July 19, 2024",
    excerpt: "This is a brief summary of the latest in tech...",
    image: "https://via.placeholder.com/150",
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar links={links} enableScroll={false} />
      <div className="container mx-auto px-4">
        <main className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">{children}</div>
          <SlideArticles articles={sideArticles} />
        </main>
        <ContentLists contentlists={articles} />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
