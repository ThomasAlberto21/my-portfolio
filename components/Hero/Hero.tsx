import React from "react";
import HeroImg from "../../public/assets/hero-img.jpg";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="bg-white mt-20">
      {/* Mobile & Tablet */}
      <div className="flex lg:flex-row flex-col items-center justify-center max-w-screen-xl p-4 mx-auto lg:hidden ">
        <div className="right mb-6">
          <Image
            src={HeroImg}
            alt="hero-img"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="left font-bold text-gray-800 lg:text-start text-center mb-10">
          <h1 className="text-3xl text-red-600">Hello</h1>
          <h1 className="text-4xl my-2">
            I&#39;m <span className="text-red-600 italic">Thomas Alberto</span>
          </h1>
          <h1 className="text-4xl">Frontend Web Developer</h1>
          <p className="font-medium opacity-70 mt-3 mb-7 lg:px-0 px-0 md:px-28">
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
      </div>

      {/* Desktop */}
      <div className="lg:flex lg:flex-row flex-col items-center justify-between max-w-screen-xl p-4 mx-auto hidden">
        <div className="left font-bold text-gray-800 lg:text-start text-center mb-10">
          <h1 className="text-3xl text-red-600">Hello</h1>
          <h1 className="text-4xl my-2">
            I&#39;m <span className="text-red-600 italic">Thomas Alberto</span>
          </h1>
          <h1 className="text-4xl">Frontend Web Developer</h1>
          <p className="font-medium opacity-70 mt-3 mb-7 lg:px-0 px-0 md:px-28">
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
        <div className="right ">
          <Image
            src={HeroImg}
            alt="hero-img"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
      </div>
    </main>
  );
}
