import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src="/assets/homeHero.png" alt="Hero Image" className="mb-5" />
        <h1>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivaties, mutual funds.com</p>
        <button
          className="p-3 btn btn-primary fs-5 mb-5"
          style={{ width: "25%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
