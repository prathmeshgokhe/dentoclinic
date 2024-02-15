import React from "react";
import Image from "next/image";
import styles from "@/styles/hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.main}>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900 ">
              Take best quality treatment for Your Teeths
            </h1>
            <p className="mb-8 leading-relaxed">
              The art of medicine consists in amusing the patient while nature
              cures the disease. Treatment without prevention is simply
              unsustainable.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#0CB8B6] border-0 py-2 px-6 focus:outline-none hover:bg-blue-[#000] rounded text-lg">
                Book an Appoinment
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <Image
              className="object-cover object-center rounded"
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
