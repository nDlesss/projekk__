import AboutSection from "./sections/about";
import CommitmentSection from "./sections/commitment";
import ContactSection from "./sections/contact";
import Footer from "./sections/footer";
import HeroSection from "./sections/hero";
import Navbar from "./sections/navbar";
import ProductsSection from "./sections/products";
import TestimonialSection from "./sections/testimoni";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="bg-amber-100 ">
        <AboutSection />
      </div>
      <CommitmentSection />
      <div className="bg-amber-100">
        <ProductsSection />
      </div>

      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
