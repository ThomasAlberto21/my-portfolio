import React from "react";
import Image from "next/image";
import SkillsData from "./Data.js";

export default function Skills() {
  const styles = {
    width: "100px",
    height: "auto",
    filter: "grayscale(100%)",
    transition: "filter 0.2s ease-in-out",
  };

  const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.filter = "grayscale(0%)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.filter = "grayscale(100%)";
  };

  return (
    <main className="bg-white my-10">
      <div className=" max-w-screen-xl p-4  mx-auto">
        <h1 className="text-3xl text-center text-red-600 font-bold">
          Skills & Tools I Use
        </h1>
        <div className="grid lg:grid-cols-6 grid-cols-2 mt-10 gap-5 items-center text-center">
          {SkillsData.map((skill, index) => {
            return (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  style={styles}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
