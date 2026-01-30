import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="assets/kite.png"
        porductName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL={"assets/console.png"}
        productTitle={"Console"}
        productDescription={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        linkName={"Learn more"}
      />

      <LeftSection
        imageURL="assets/coin.png"
        porductName="Coin"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL={"assets/kiteconnect.png"}
        productTitle={"Kite Connect API"}
        productDescription={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        linkName={"Kite Connect"}
      />

      <LeftSection
        imageURL="assets/varsity.png"
        porductName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <div className="text-center fs-3 p-5 m-2">
        <p>
          Want to know more about our technology stack? Check out the<a href="" style={{textDecoration:"none"}}> Zerodha.tech</a> blog.
        </p>
      </div>

      <Universe />
    </>
  );
}

export default ProductPage;
