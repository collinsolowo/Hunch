import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MultiStepForm from "../../components/reuseables/MultiStepForm";
import ReviewsSection from "../../components/reuseables/ReviewSection";
import OrderComponent from "../../components/reuseables/OrderComponent";

function HunchOrderPage() {
  return (
    <>
      <Navbar />
      <OrderComponent/>
      <ReviewsSection/>
      <MultiStepForm/>
      <Footer />
    </>
  );
}

export default HunchOrderPage;
