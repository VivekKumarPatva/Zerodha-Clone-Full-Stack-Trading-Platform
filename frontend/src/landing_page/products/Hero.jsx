import React from "react";

function Hero() {
  return (
    <div className="container text-center pt-5 mt-5">
      <h1>Zerodha Products</h1>
      <h5 className="mt-3 fs-5">Sleek, modern, and intuitive trading platforms</h5>
      <p className="mt-3">
        Check out our &nbsp;
        <a href="http://" style={{ textDecoration: "none" }}>
          investment offerings
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
