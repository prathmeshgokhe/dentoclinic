import React from "react";
import Image from "next/image";
import styles from "@/styles/feature.module.scss";

const Feature = () => {
  return (
    <div className={styles.main}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 gap-10 justify-center">
            <div className="p-4 md:w-[30%] sm:mb-0 mb-6 shadow-sm rounded-lg border">
              <div className="rounded-lg overflow-hidden h-28 flex justify-center items-center">
                <Image
                  src="/docs.svg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">
                Qualified Doctor
              </h2>
              <p className="text-base leading-relaxed mt-2 text-center">
                Lorem ipsum dolor sit amet consectet adipis sed do eiusmod
                tempor inc ididunt utid labore.
              </p>
            </div>
            <div className="p-4 md:w-[30%] shadow-sm rounded-lg border sm:mb-0 mb-6">
              <div className="rounded-lg  overflow-hidden h-28 flex justify-center items-center">
                <Image
                  src="/service.svg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center ">
                24 Hours Service
              </h2>
              <p className="text-base leading-relaxed mt-2 text-center">
                Lorem ipsum dolor sit amet consectet adipis sed do eiusmod
                tempor inc ididunt utid labore.
              </p>
            </div>
            <div className="p-4 md:w-[30%] shadow-sm rounded-lg border sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden h-28 flex justify-center items-center">
                <Image
                  src="/emergency.svg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">
                Need Emergency
              </h2>
              <p className="text-base leading-relaxed mt-2 text-center">
                Lorem ipsum dolor sit amet consectet adipis sed do eiusmod
                tempor inc ididunt utid labore.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
