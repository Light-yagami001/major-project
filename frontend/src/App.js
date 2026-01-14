import React, { useState } from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PackagesSection from "./components/PackagesSection";
import TestsSection from "./components/TestsSection";
import DentalSection from "./components/DentalSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import FacilitiesSection from "./components/FacilitiesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookClick = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      <Header onBookClick={handleBookClick} />
      <main>
        <HeroSection onBookClick={handleBookClick} />
        <ServicesSection />
        <PackagesSection onBookClick={handleBookClick} />
        <TestsSection onBookClick={handleBookClick} />
        <DentalSection onBookClick={handleBookClick} />
        <WhyChooseUsSection />
        <FacilitiesSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;
