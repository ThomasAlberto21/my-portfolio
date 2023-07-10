import React from "react";
import CardProject from "./CardProject";

export default function Project() {
  return (
    <main className="bg-red-600 mb-10 py-10" id="project">
      <div className="max-w-screen-xl px-4 py-10  mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-white font-bold">Project</h1>
          <button className="bg-white p-2.5 rounded-md text-red-600 font-bold text-center hover:bg-gray-200">
            See All Project
          </button>
        </div>

        <CardProject />
      </div>
    </main>
  );
}
