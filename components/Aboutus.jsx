import React from "react";
import styles from "@/styles/aboutus.module.scss";
import Image from "next/image";
const Aboutus = () => {
  return (
    <div className={styles.main}>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-2 py-24 mx-auto">
          <div className="lg:w-[100%] mx-auto flex flex-wrap lg:justify-center lg:items-center">
            <Image
              src="/illustrationdoc.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col gap-6 lg:justify-left md:items-start justify-center items-center">
              <h1 className="text-center text-gray-900 md:text-6xl title-font font-medium mb-1 text-4xl">
                Welcome to our
                <span className="text-[#0CB8B6] font-semibold">Clinic</span>
              </h1>
              <p className="font-bold flex text-center md:text-left">
                A hospital is a health care institution providing patient
                treatment with specialized medical
              </p>
              <p className="leading-relaxed lg:text-left text-center text-sm">
                Lazer for painless dental treatments lazer for jaw joint and
                other joint problems splint therapy for migraine, headaches,
                back pain, gait issues immediate fixed single and full mouth
                fixed implants zygomatic and pterigoid implants for patients who
                lost jaw bone to cancer Tooth colored ceramic veeners and caps
                Clear aligners and braces for crooked teeth tooth colored
                fillings for broken and decayed teeth Lazer teeth whitening
                lazer Root canal treatment treatment of gums treatment of teeth
                gaps treatment of wisdom teeth Implants Full mouth
                rehabilitation Sports Dentistry Smile designing Orthodontic
                treatment Root Canal treatment Wisdom tooth surgeries Teeth
                whitening
              </p>
              <div classNameName="justify-center items-center flex">
                <button className="flex w-auto text-white bg-[#0CB8B6] hover:bg-[#000] border-0 py-2 px-6 focus:outline-none  rounded">
                  Book an Appoinment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
