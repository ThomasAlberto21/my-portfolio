import Link from "next/link";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

interface NavLinksProps {
  navbarOpen: boolean;
}

export default function NavLinks({ navbarOpen }: NavLinksProps) {
  const navLinks = [
    {
      name: "Home",
      link: "/",
      icons: <FaHome />,
    },
    {
      name: "About",
      link: "/",
      icons: <FaUser />,
    },
    {
      name: "Skills",
      link: "/",
      icons: <GiSkills />,
    },
    {
      name: "Project",
      link: "/",
      icons: <GoProjectSymlink />,
    },
    {
      name: "Contact",
      link: "/",
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
              className="flex items-center py-2 pl-3 pr-4 text-white rounded text-gray lg:hover:bg-transparent  hover:bg-white lg:p-0  lg:justify-center relative group hover:text-gray-700 lg:hover:text-white "
            >
              <div className="me-2">{navLink.icons}</div> {navLink.name}
              <span className="lg:absolute lg:-bottom-1 lg:left-0 lg:w-0 lg:h-1 bg-white transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
