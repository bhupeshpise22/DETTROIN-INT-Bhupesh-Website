import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import WhyChooseUs from "./components/WhyChooseUs";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Admissions from "./components/Admissions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academics />
        <WhyChooseUs />
        <Facilities />
        <Gallery />
        <Testimonials />
        <Admissions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
