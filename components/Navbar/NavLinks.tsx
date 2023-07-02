import Link from "next/link";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

interface NavLinksProps {
  navbarOpen: boolean;
  toggleNavbar: () => void;
}

export default function NavLinks({ navbarOpen, toggleNavbar }: NavLinksProps) {
  const navLinks = [
    {
      name: "Home",
      link: "/",
      icons: <FaHome />,
    },
    {
      name: "About",
      link: "/about",
      icons: <FaUser />,
    },
    {
      name: "Skills",
      link: "/skills",
      icons: <GiSkills />,
    },
    {
      name: "Project",
      link: "/project",
      icons: <GoProjectSymlink />,
    },
    {
      name: "Contact",
      link: "/contact",
      icons: <FaEnvelope />,
    },
  ];

  return (
    <div className="w-full md:block md:w-auto">
      <ul
        className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg lg:flex-row md:space-x-8 md:mt-0 md:border-0 ${
          navbarOpen ? "" : "lg:flex hidden"
        }`}
      >
        {navLinks.map((navLink) => (
          <li key={navLink.name}>
            <Link
              href={navLink.link}
              className="py-2 pl-3 pr-4 text-gray rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-white flex lg:justify-center items-center"
            >
              <div className="me-2">{navLink.icons}</div> {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
