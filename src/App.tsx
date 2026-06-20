import * as React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import GoogleReviews from "./components/GoogleReviews";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-brand-gold selection:text-black">
      {/* 1. Header (Sticky navigation, plantão status and micro banner) */}
      <Header />

      <main>
        {/* 2. Hero Section (Headline, main arguments, synchronized 15-minute millisecond count-down timer) */}
        <Hero />

        {/* 3. Benefits Section (AIDA-driven points: real transformation, speed, cost/refund conditions, concierge) */}
        <Benefits />

        {/* 4. About Section (Overview of Saraiva Advocacia in Salvador) */}
        <About />

        {/* 5. Services Section (Specialized medical denials list, high speed liminares & drug delivery) */}
        <Services />

        {/* 6. Products Section (Pre-analysis, legal actions and refund packages in accordance with OAB) */}
        <Products />

        {/* 7. Portfolio Section (Successful medical law cases and dynamic lightbox modals) */}
        <Portfolio />

        {/* 8. Testimonials Section (Detailed story quotes from citizens protected) */}
        <Testimonials />

        {/* 9. Google Reviews Section (High-contrast stars widget and verified reviews badge) */}
        <GoogleReviews />

        {/* 10. FAQ Section (Fluid accordion panels with arrow rotations) */}
        <FAQ />

        {/* 11. CTA Section (Strong conversion push, emergency flag alert warnings) */}
        <CTA />

        {/* 12. Contact Section (Direct communications, street routes, reactive triaging contact form) */}
        <Contact />
      </main>

      {/* 13. Footer Section (CNPJ state records, disclaimer, scroll top anchors) */}
      <Footer />

      {/* 14. Floating vibrating WhatsApp bubble CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
