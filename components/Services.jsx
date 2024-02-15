import React from "react";
import styles from "@/styles/services.module.scss";
import Image from "next/image";

const Services = () => {
  return (
    <div className={styles.main}>
      <section className="text-gray-600 body-font">
        <div className=" flex justify-center items-center">
          <h2 className="text-3xl md:text-6xl font-bold text-black">
            Our Services
          </h2>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center items-center">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-[#0CB8B6]">
                <div className="w-full h-10 flex items-center justify-center   mb-4">
                  <Image
                    src="/whiteeth.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                  />
                </div>
                <h2 className="text-xl text-center text-white font-medium title-font mb-2">
                  Teeth Whitning
                </h2>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" border border-gray-200 p-6 rounded-lg bg-[#E8F0FB]">
                <div className="w-full h-10 flex items-center justify-center   mb-4">
                  <Image
                    src="/checkup.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                  />
                </div>
                <h2 className="text-xl text-center text-gray-900 font-medium title-font mx-7 mb-2">
                  Checkups
                </h2>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-[#FEF7EA]">
                <div className="w-full h-10 flex items-center justify-center   mb-4">
                  <Image
                    src="/extract.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                  />
                </div>
                <h2 className="text-xl text-center text-gray-900 font-medium title-font mx-7">
                  Extraction
                </h2>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-[#EBF7ED]">
                <div className="w-full h-10 flex items-center justify-center   mb-4">
                  <Image
                    src="/surgery.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                  />
                </div>
                <h2 className="text-xl text-center text-gray-900 font-medium title-font mx-7">
                  Oral Surgery
                </h2>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-[#F5F5F6]">
                <div className="w-full h-10 flex items-center justify-center   mb-4">
                  <Image
                    src="/care.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                  />
                </div>
                <h2 className="text-xl text-center text-gray-900 font-medium title-font mb-2">
                  Emergency Care
                </h2>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-[#FCEDEA]">
                <div className="w-full h-10 flex items-center justify-center   mb-4">
                  <Image
                    src="/xray.svg"
                    alt="Picture of the author"
                    width={60}
                    height={60}
                  />
                </div>
                <h2 className="text-xl text-center text-gray-900 font-medium title-font mx-14">
                  X-rays
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
