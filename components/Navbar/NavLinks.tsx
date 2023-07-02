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
    <div className="w-full lg:w-auto md:block">
      <ul
        className={`font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:flex-row  lg:space-x-8 lg:mt-0 lg:border-0 ${
          navbarOpen ? "" : "lg:flex hidden"
        }`}
      >
        {navLinks.map((navLink) => (
          <li key={navLink.name}>
            <Link
              href={navLink.link}
              className="flex items-center py-2 pl-3 pr-4 text-white rounded text-gray lg:hover:bg-transparent lg:hover:text-blue-600 hover:bg-blue-600 lg:p-0 lg:justify-center"
            >
              <div className="me-2">{navLink.icons}</div> {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
