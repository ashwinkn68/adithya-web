import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Production from "@/components/production";
import Clients from "@/components/clients";
import Fabrics from "@/components/fabrics";
import WhyChooseUs from "@/components/why-choose-us";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WaveDivider from "@/components/wave-divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WaveDivider bgColor="#131520" fill="#FBF8F2" />
        <About />
        <WaveDivider bgColor="#FBF8F2" fill="#131520" />
        <Products />
        <WaveDivider bgColor="#131520" fill="#FBF8F2" />
        <Production />
        <WaveDivider bgColor="#FBF8F2" fill="#131520" />
        <Clients />
        <WaveDivider bgColor="#131520" fill="#FBF8F2" />
        <Fabrics />
        <WaveDivider bgColor="#FBF8F2" fill="#131520" />
        <WhyChooseUs />
        <WaveDivider bgColor="#131520" fill="#FBF8F2" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
