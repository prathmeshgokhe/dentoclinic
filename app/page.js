import Aboutus from "@/components/Aboutus";
import Contact from "@/components/Contact";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Gallary from "@/components/Gallary";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import styles from "@/styles/style.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/logomain.png"
            width={40}
            height={40}
          />
          <span className={styles.name}>Dentoclinic</span>
        </div>
        <div className={styles.button}>
          <button>Book an Appoinment</button>
        </div>
      </div>
      <div className={styles.container}>
        <Hero />
        <Feature />
        <Aboutus />
        <Services />
        <Testimonial />
        {/* <Gallary /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
