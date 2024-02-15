import React from "react";
import Image from "next/image";

const Feature = () => {
  return (
    <div>
      <section class="text-gray-600 body-font px-[100px]">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div class="p-4">
                  <div className=" flex justify-center py-4">
                    <Image
                      src="/docs.svg"
                      alt="Picture of the author"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h1 class="title-font text-xl text-gray-900 mb-3 flex justify-center font-bold">
                    Qualified Doctors
                  </h1>
                  <p class="leading-relaxed mb-3 text-center">
                    Lorem ipsum dolor sit amet consectet adipis sed do eiusmod
                    tempor inc ididunt utid labore.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div class="p-6">
                  <div className="flex justify-center py-4">
                    <Image
                      src="/service.svg"
                      alt="Picture of the author"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h1 class="title-font text-xl text-gray-900 mb-3 flex justify-center font-bold">
                    24 Hours Service
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectet adipis sed do eiusmod
                    tempor inc ididunt utid labore.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div class="p-6">
                  <div className=" flex justify-center py-4">
                    <Image
                      src="/emergency.svg"
                      alt="Picture of the author"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h1 class="title-font text-xl text-gray-900 mb-3 flex justify-center font-bold">
                    Need Emergency
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectet adipis sed do eiusmod
                    tempor inc ididunt utid labore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
