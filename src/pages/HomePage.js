import React from "react";
import FiverrCarousel from "../components/FiverrCarousel/FiverrCarousel";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <FiverrCarousel />
      <Footer />
    </div>
  );
}
