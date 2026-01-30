import React from "react";
import "./ChargeDescription.css";

function ChargeDescription() {
  return (
    <div className="container pb-5">
      <h3
        className="pb-5 pt-5
      "
      >
        Charges explained
      </h3>
      <div className="row">
        <div className="col-6">
          <h4 className="h4-style">Securities/Commodities transaction tax</h4>
          <p className="chargepara">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="chargepara">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h4 className="h4-style">Transaction/Turnover Charges</h4>
          <p className="chargepara">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="chargepara">
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p className="chargepara">
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p className="chargepara">
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p className="chargepara">
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <h4 className="h4-style">Call & trade</h4>
          <p className="chargepara">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h4 className="h4-style">Stamp charges</h4>
          <p className="chargepara">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <h4 className="h4-style">NRI brokerage charges</h4>
          <ul className="chargepara">
            <li>
              For a non-PIS account, 0.5% or ₹50 per executed order for equity
              and F&O (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>
          <h4 className="h4-style">Account with debit balance</h4>
          <p className="chargepara">
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <h4 className="h4-style">
            Charges for Investor's Protection Fund Trust (IPFT) by NSE
          </h4>
          <ul className="chargepara">
            <li>
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
          </ul>
          <p className="chargepara"> </p>
          <h4 className="h4-style">Margin Trading Facility (MTF)</h4>
          <ul className="chargepara">
            <li>
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold.
            </li>
            <li>
              MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
            </li>
            <li>
              MTF pledge charge: ₹15 + GST per pledge and unpledge request per
              ISIN.
            </li>
          </ul>
        </div>

        <div className="col-6 ">
          <h4 className="h4-style">GST</h4>
          <p className="chargepara">
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <h4 className="h4-style">SEBI Charges</h4>
          <p className="chargepara">
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <h4 className="h4-style">DP (Depository participant) charges</h4>
          <p className="chargepara">
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p className="chargepara">
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p className="chargepara">
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <h4 className="h4-style">Pledging charges</h4>
          <p className="chargepara">₹30 + GST per pledge request per ISIN.</p>
          <h4 className="h4-style">AMC (Account maintenance charges)</h4>
          <p className="chargepara">
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA, Click here
          </p>
          <p className="chargepara">
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC, Click here
          </p>
          <h4 className="h4-style">Corporate action order charges</h4>
          <p className="chargepara">
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <h4 className="h4-style">Off-market transfer charges</h4>
          <p className="chargepara"> ₹25 per transaction.</p>
          <h4 className="h4-style">Physical CMR request</h4>
          <p className="chargepara">
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <h4 className="h4-style">Payment gateway charges</h4>
          <p className="chargepara">
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>
          <h4 className="h4-style">Delayed Payment Charges</h4>
          <p className="chargepara">
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account. Learn more.
          </p>
          <h4 className="h4-style">
            Trading using 3-in-1 account with block functionality
          </h4>
          <ul className="chargepara">
            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li>Intraday Brokerage: 0.05% per executed order.</li>
          </ul>
        </div>
      </div>
      <div className="row pb-5 pt-5">
        <h4 className="h4-style">Disclaimer</h4>
        <p className="chargepara">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

export default ChargeDescription;
