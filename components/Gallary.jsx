import React from "react";
import Image from "next/image";

const Gallary = () => {
  return (
    <div>
      <section className="text-gray-600 body-font px-[100px]">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* <div className="flex w-full mb-20 flex-wrap text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Gallery
            </h1>
          </div> */}
          <div className=" flex justify-center items-center">
            <h2 className="text-3xl md:text-6xl font-bold text-black mb-4">
              Gallerys
            </h2>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/500x300.png"
                  width={500}
                  height={300}
                />
                <Image
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="/logomain.png"
                  width={40}
                  height={40}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/500x300.png"
                  width={500}
                  height={300}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                {/* <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/600x360"
                /> */}
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/601x361.png"
                  width={600}
                  height={360}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                {/* <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/601x361"
                /> */}

                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/601x361.png"
                  width={600}
                  height={360}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                {/* <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                /> */}
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/500x300.png"
                  width={500}
                  height={300}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                {/* <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                /> */}
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
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
