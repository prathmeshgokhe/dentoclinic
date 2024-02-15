import React from "react";
import Image from "next/image";
import styles from "@/styles/hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.main}>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900 ">
              Take best quality treatment for Your Teeths
            </h1>
            <p class="mb-8 leading-relaxed">
              The art of medicine consists in amusing the patient while nature
              cures the disease. Treatment without prevention is simply
              unsustainable.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-[#0CB8B6] border-0 py-2 px-6 focus:outline-none hover:bg-blue-[#000] rounded text-lg">
                Book an Appoinment
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <Image
              class="object-cover object-center rounded"
              alt="hero"
              src=""
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
