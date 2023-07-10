import React from "react";

export default function FormContact() {
  return (
    <form>
      <div className="my-6">
        <label
          htmlFor="nama"
          className="block mb-2 text-sm font-medium text-red-600"
        >
          Your Name
        </label>
        <input
          type="text"
          className="bg-white border border-red-600 text-gray-900 block w-full p-2.5 rounded-md  focus:ring-blue-500 "
          placeholder="Enter Your Name"
        />

        <label
          htmlFor="email"
          className="block mb-2 mt-5 text-sm font-medium text-red-600"
        >
          Your Email
        </label>
        <input
          type="email"
          className="bg-white border border-red-600 text-gray-900 block w-full p-2.5 rounded-md  focus:ring-blue-500 "
          placeholder="@gmail.com"
        />

        <label
          htmlFor="message"
          className="block mb-2 mt-5 text-sm font-medium text-red-600"
        >
          Your Message
        </label>
        <textarea
          rows={10}
          cols={3}
          className="bg-white border border-red-600 text-gray-900 block w-full p-2.5 rounded-md  focus:ring-blue-500 "
          placeholder="Enter Your Message"
        />
      </div>
    </form>
  );
}
