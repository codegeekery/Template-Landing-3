
import Hero from "@/utils/Hero";
import Features from "@/utils/Features";
import MidFeature from "@/utils/MidFeature";
import Testimonials from "@/utils/Testimonials";
import Pricing from "@/utils/Pricing";
import Footer from "@/utils/footer";

export default function Home() {
  return (
    <>
      
      {/* Hero Sectiom */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Close Feature */}
      <MidFeature />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />

      {/* Footer */}
      <Footer />

    </>
  );
}
