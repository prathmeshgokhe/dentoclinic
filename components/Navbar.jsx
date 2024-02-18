import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <header class="text-gray-600 body-font ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-xl">Jain Dentoclinic</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center"></nav>
          <button className="inline-flex text-white bg-[#0CB8B6] border-0 py-2 px-6 focus:outline-none hover:bg-blue-[#000] rounded text-lg">
            Book an Appoinment
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
