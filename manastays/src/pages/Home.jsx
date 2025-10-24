import React from "react";
import Header from "../components/layout/Header.jsx";
import Hero from "../components/home/Hero.jsx";
import Trending from "../components/home/Trending.jsx";
import WhyChoose from "../components/home/WhyChoose.jsx";
import ContactSection from "../components/home/ContactSection.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trending />
        <WhyChoose />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
