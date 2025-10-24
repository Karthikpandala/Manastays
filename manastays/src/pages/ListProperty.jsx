import React from "react";
import Header from "../components/layout/Header.jsx";
import ListHero from "../components/list/ListHero.jsx";
import ListForm from "../components/list/ListForm.jsx";
import WhyChooseUsGrid from "../components/list/WhyChooseUsGrid.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function ListProperty() {
  return (
    <>
      <Header />
      <main>
        <ListHero />
        <ListForm />
        <WhyChooseUsGrid />
      </main>
      <Footer dark />
    </>
  );
}
