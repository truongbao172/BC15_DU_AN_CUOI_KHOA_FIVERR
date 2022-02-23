import React from "react";
import Awhole from "../components/Awhole/Awhole";
import Business from "../components/Business/Business";
import Explore from "../components/Explore/Explore";
import FiverrCarousel from "../components/FiverrCarousel/FiverrCarousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProService from "../components/ProService/ProService";
import Testimo from "../components/Testimonials/Testimo";
import ViewMore from "../components/ViewMore/ViewMore";

export default function HomePage() {
  return (
    <div>
      <Header />
      <FiverrCarousel />
      <ViewMore />
      <ProService />
      <Awhole />
      <Explore />
      <Business />
      <Testimo />
      <Footer />
    </div>
  );
}
