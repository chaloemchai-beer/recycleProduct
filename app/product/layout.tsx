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
        <main className="pr-4 md:pr-20 pl-4 md:pl-20 pt-10 lg:grid-cols-3 gap-6 md:gap-10">
          {/* Main content area, spans 2 columns on larger screens */}
          <div className="md:col-span-2 lg:col-span-2">{children}</div>
        </main>
        <div className="px-4 md:px-20 pb-10 md:pb-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
