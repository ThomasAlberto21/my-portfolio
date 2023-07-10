import React from "react";
import CardProject from "./CardProject";

export default function Project() {
  return (
    <main className="bg-red-600 mb-10 " id="project">
      <div className="max-w-screen-xl px-4 py-10  mx-auto">
        <h1 className="text-3xl text-white font-bold">Project</h1>

        <CardProject />
      </div>
    </main>
  );
}
