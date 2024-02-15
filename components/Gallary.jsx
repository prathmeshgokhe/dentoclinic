import React from "react";
import Image from "next/image";

const Gallary = () => {
  return (
    <div>
      <section class="text-gray-600 body-font px-[100px]">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Master Cleanse Reliac Heirloom
            </h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="/500x300.png"
                  width={500}
                  height={300}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="/500x300.png"
                  width={500}
                  height={300}
                />
              </div>
              <div class="md:p-2 p-1 w-full">
                {/* <Image
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/600x360"
                /> */}
                <Image
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="/601x361.png"
                  width={600}
                  height={360}
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                {/* <Image
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/601x361"
                /> */}

                <Image
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="/601x361.png"
                  width={600}
                  height={360}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                {/* <Image
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                /> */}
                <Image
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="/500x300.png"
                  width={500}
                  height={300}
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                {/* <Image
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                /> */}
                <Image
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="/500x300.png"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallary;
