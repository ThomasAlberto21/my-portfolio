import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="bg-black border-gray-200">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl italic font-bold text-white whitespace-nowrap">
            Thomas Alberto
          </span>
        </Link>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          data-collapse-toggle="navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <NavLinks navbarOpen={navbarOpen} toggleNavbar={toggleNavbar} />
      </div>
    </nav>
  );
}
