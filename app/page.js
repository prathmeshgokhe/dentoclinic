import Aboutus from "@/components/Aboutus";
import Contact from "@/components/Contact";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Gallary from "@/components/Gallary";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <Aboutus />
      <Services />
      <Testimonial />
      <Gallary />
      <Contact />
      <Footer />
      {/* <h1>Hello</h1> */}
    </div>
  );
}
