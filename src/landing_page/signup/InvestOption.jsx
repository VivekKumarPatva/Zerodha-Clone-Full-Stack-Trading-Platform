import "./InvestOption.css";

function InvestOption() {
  return (
    <div className="container">
      <h2 className="text-center mb-5 py-5">
        Investment options with Zerodha demat account
      </h2>
      <div className="invest-contain">
        <div className="invest-items">
          <div>
            <img src="assets/stocks.svg" alt="stocks.svg" />
          </div>
          <div>
            <h3>Stocks</h3>
            <p className="fs-5 text-muted">
              Invest in all exchange-listed <br />
              securities
            </p>
          </div>
        </div>
        <div className="invest-items">
          <div>
            <img src="assets/mutulfund.svg" alt="mutulfund.svg" />
          </div>
          <div>
            <h3>Mutual funds</h3>
            <p className="fs-5 text-muted">
              Invest in commission-free direct <br /> mutual funds
            </p>
          </div>
        </div>
        <div className="invest-items">
          <div>
            <img src="assets/ipo.svg" alt="ipo.svg" />
          </div>
          <div>
            <h3>IPO</h3>
            <p className="fs-5 text-muted">
              Apply to the latest IPOs instantly <br /> via UPI
            </p>
          </div>
        </div>
        <div className="invest-items">
          <div>
            <img src="assets/f&o.svg" alt="f&o.svg" />
          </div>
          <div>
            <h3>Futures & options</h3>
            <p className="fs-5 text-muted">
              Hedge and mitigate market risk <br /> through simplified F&O
              trading
            </p>
          </div>
        </div>
      </div>
      <div className="pb-5 text-center pt-5">
        <button className="btn btn-primary p-2 fs-3" style={{ width: "25%" }} >
          Explore Investments
        </button>
      </div>
    </div>
  );
}

export default InvestOption;
