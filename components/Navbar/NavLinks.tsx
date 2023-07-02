import Link from "next/link";

export default function NavLinks() {
  return (
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
        <li>
          <Link
            href="/"
            className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0  md:hover:text-blue-500"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block py-2 pl-3 pr-4 text-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-white"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className="block py-2 pl-3 pr-4 text-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-white"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="/project"
            className="block py-2 pl-3 pr-4 text-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-white"
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block py-2 pl-3 pr-4 text-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-white"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
