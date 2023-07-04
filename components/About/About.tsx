import React from "react";
import Left from "./Left";
import Right from "./Right";

export default function About() {
  return (
    <main className="bg-red-600 ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="white"
          fillOpacity="1"
          d="M0,128L60,117.3C120,107,240,85,360,85.3C480,85,600,107,720,144C840,181,960,235,1080,245.3C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div className="text-center">
        <h1 className="text-white text-3xl font-bold">My About</h1>
      </div>

      <div className="flex lg:flex-row flex-col items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Left />
        <Right />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="white"
          fillOpacity="1"
          d="M0,128L60,117.3C120,107,240,85,360,85.3C480,85,600,107,720,144C840,181,960,235,1080,245.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </main>
  );
}
