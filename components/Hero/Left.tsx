import React from "react";
import Link from "next/link";

export default function Left() {
  return (
    <div className="left font-bold text-gray-800 lg:text-start text-center mb-10">
      <h1 className="text-3xl text-red-600">Hello</h1>
      <h1 className="text-4xl my-2">
        I&#39;m <span className="text-red-600 italic">Thomas Alberto</span>
      </h1>
      <h1 className="text-4xl">Frontend Web Developer</h1>
      <p className="font-medium opacity-70 mt-3 mb-10 lg:px-0 px-0 md:px-28">
        Sebagai seorang Front-End Web Developer, saya menggabungkan
        <br className="lg:block hidden" />
        kreativitas dan keahlian teknis untuk menciptakan tampilan web yang
        <br className="lg:block hidden" />
        memukau dan interaktif.
      </p>

      <Link
        href="https://www.cakeresume.com/pdf/s--7-H9rZcgxnaXb1qRKxPRNA--/bjwWv.pdf"
        className="py-4 px-6 bg-red-600 text-white  rounded-md hover:bg-red-800"
      >
        Download CV
      </Link>
    </div>
  );
}
