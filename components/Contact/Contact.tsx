import React from "react";
import FormContact from "./FormContact";

export default function Contact() {
  return (
    <main className="bg-white" id="contact">
      <div className="max-w-screen-xl px-4 py-10  mx-auto">
        <h1 className="text-3xl text-red-600 font-bold">Contact Us</h1>

        <FormContact />

        <button className="p-2.5 bg-red-600 w-full mt-50 text-white rounded-md hover:bg-red-800">
          Submit
        </button>
      </div>
    </main>
  );
}
