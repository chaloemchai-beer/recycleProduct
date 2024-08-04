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
    <div className="flex flex-col min-h-screen">
      {/* Navbar component with responsive design */}
      <Navbar links={links} enableScroll={false} />

      {/* Main content area */}
      <div className="container mx-auto px-4 flex-grow">
        <main className="pr-4 md:pr-20 pl-4 md:pl-20 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {/* Main content area, spans 2 columns on larger screens */}
          <div className="md:col-span-2 lg:col-span-2">{children}</div>

          {/* Side articles, takes full width on mobile, 1 column on larger screens */}
          <div className="col-span-1">
            <SlideArticles articles={sideArticles} />
          </div>
        </main>

        {/* Additional content and footer */}
        <div className="px-4 md:px-20 pb-10 md:pb-20">
          <ContentLists contentlists={articles} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
