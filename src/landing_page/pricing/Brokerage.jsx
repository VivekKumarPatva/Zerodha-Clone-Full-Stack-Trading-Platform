import React from "react";
import "./Brokerage.css";

function Brokerage() {
  return (
    <div className="container pb-5">
      <div className="row text-center pt-5 mt-5">
        <h1>Charges</h1>
        <p>List of all charges and taxes</p>
      </div>
      <div className="row">
        <div className="brok-contain">
          <div className="brok-items">
            <img
              src="assets/pricing0.svg"
              alt="pricing0"
              className="brok-logo"
            />
            <h2>Free equity delivery</h2>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order
              on intraday trades across <br /> equity, currency, and commodity
              trades. Flat <br /> ₹20 on all option trades
            </p>
          </div>
          <div className="brok-items">
            <img
              src="assets/intradayTrades.svg"
              alt="intradayTrades"
              className="brok-logo"
            />
            <h2>Intraday and F&O trades</h2>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order
              on intraday trades across <br /> equity, currency, and commodity
              trades. Flat <br /> ₹20 on all option trades
            </p>
          </div>
          <div className="brok-items">
            <img
              src="assets/pricing0.svg"
              alt="pricing0"
              className="brok-logo"
            />
            <h2>Free direct MF</h2>
            <p>
              All direct mutual fund investments are <br /> absolutely free — ₹
              0 commissions & <br />
              DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
