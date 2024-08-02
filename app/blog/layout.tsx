import Navbar from "@/components/Navbar";

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

interface LayoutProps {
    children: React.ReactNode;
  }

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar links={links} enableScroll={false} />
      {children}
    </div>
  );
};

export default Layout;
