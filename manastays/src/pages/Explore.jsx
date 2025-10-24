import React from "react";
import Header from "../components/layout/Header.jsx";
import SearchBar from "../components/explore/SearchBar.jsx";
import FiltersSidebar from "../components/explore/FiltersSidebar.jsx";
import ExploreGrid from "../components/explore/ExploreGrid.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function Explore() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-12">
        <div className="container px-4">
          <SearchBar />
          <div className="flex flex-col md:flex-row gap-8">
            <FiltersSidebar />
            <ExploreGrid />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
