import React from "react";
import "./Universe.css";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center pt-5 mt-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        <div className="uni-contain">
          <div className="uni-items">
            <a href="">
              <img
                src="assets/zerodhaFundhouse.png"
                alt=""
                className="uni-logo "
              />
              <p>
                Our asset management venture
                <br />
                that is creating simple and transparent index <br />
                funds to help you save for your goals.
              </p>
            </a>
            <a href="">
              <img src="assets/streakLogo.png" alt="" className="uni-logo" />
              <p>
                Systematic trading platform <br /> that allows you to create and
                backtest <br /> strategies without coding.
              </p>
            </a>
          </div>
          <div className="uni-items">
            <a href="">
              <img src="assets/sensibullLogo.svg" alt="" className="uni-logo" />
              <p>
                Options trading platform that lets you <br /> create strategies,
                analyze positions, and examine <br /> data points like open
                interest, FII/DII, and more.
              </p>
            </a>
            <a href="">
              <img src="assets/smallcaseLogo.png" alt="" className="uni-logo" />
              <p>
                Thematic investing platform <br />
                that helps you invest in diversified <br />
                baskets of stocks on ETFs.
              </p>
            </a>
          </div>
          <div className="uni-items">
            <a href="">
              <img src="assets/tijori.svg" alt="" className="uni-logo" />
              <p>
                Investment research platform <br />
                that offers detailed insights on stocks,
                <br /> sectors, supply chains, and more.
              </p>
            </a>
            <a href="">
              <img src="assets/dittoLogo.png" alt="" className="uni-logo" />
              <p>
                Personalized advice on life <br /> and health insurance. No spam
                <br />
                and no mis-selling. Sign up for free
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <button
          className="p-2 btn btn-primary fs-5 mt-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
