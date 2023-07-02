import React from "react";
import Left from "./Left";
import Right from "./Right";

export default function Hero() {
  return (
    <main className="bg-white lg:my-36 mt-10">
      {/* Mobile & Tablet */}
      <div className="flex lg:flex-row flex-col items-center justify-center max-w-screen-xl p-4 mx-auto lg:hidden ">
        <Right />
        <Left />
      </div>

      {/* Desktop */}
      <div className="lg:flex lg:flex-row flex-col items-center justify-between max-w-screen-xl p-4 mx-auto hidden">
        <Left />
        <Right />
      </div>
    </main>
  );
}
