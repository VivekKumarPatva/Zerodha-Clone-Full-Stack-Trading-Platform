import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "rgb(250,250,250) Border-Top" }}
      className="border-top"
    >
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-3">
            <img
              src="/public/assets/logo.svg"
              alt="Logo"
              style={{ width: "70%" }}
            />
            <p className="copyright">
              &#xA9; 2010 - 2025, Zerodha Broking Ltd <br /> All rights
              reserved.
            </p>
          </div>
          <div className="col list-head">
            <p>Account</p>
            <ul className="footer-items">
              <li>
                <a href="https://zerodha.com/open-account/">
                  Open demat account
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/open-account/minor/">
                  Minor demat account
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/open-account/nri/">
                  NRI demat account
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/commodities/">Commodity</a>
              </li>
              <li>
                <a href="https://zerodha.com/dematerialise/">
                  Dematerialisation
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/fund-transfer/#tab-deposit_funds">
                  Fund transfer
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/mtf/">MTF</a>
              </li>
              <li>
                <a href="https://zerodha.com/refer/">Referral program</a>
              </li>
            </ul>
          </div>

          <div className="col list-head">
            <p>Support</p>
            <ul className="footer-items">
              <li>
                <a href="https://zerodha.com/contact/">Contact us</a>
              </li>
              <li>
                <a href="https://support.zerodha.com/">Support portal</a>
              </li>
              <li>
                <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha">
                  How to file a complaint?
                </a>
              </li>
              <li>
                <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/track-complaints-or-tickets">
                  Status of your complaints
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/marketintel/bulletin/">Bulletin</a>
              </li>
              <li>
                <a href="https://zerodha.com/marketintel/circulars/">
                  Circular
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/z-connect/">Z-Connect blog</a>
              </li>
              <li>
                <a href="https://zerodha.com/resources/">Downloads</a>
              </li>
            </ul>
          </div>

          <div className="col list-head">
            <p>Company</p>
            <ul className="footer-items">
              <li>
                <a href="https://zerodha.com/about/">About</a>
              </li>
              <li>
                <a href="https://zerodha.com/about/philosophy/">Philosophy</a>
              </li>
              <li>
                <a href="https://zerodha.com/media/">Press & media</a>
              </li>
              <li>
                <a href="https://careers.zerodha.com/">Careers</a>
              </li>
              <li>
                <a href="https://zerodha.com/cares/">
                  Zerodha Cares &#40;CSR&#41;
                </a>
              </li>
              <li>
                <a href="https://zerodha.tech/">Zerodha.tech</a>
              </li>
              <li>
                <a href="https://zerodha.com/open-source/">Open source</a>
              </li>
            </ul>
          </div>

          <div className="col list-head">
            <p>Quick links</p>
            <ul className="footer-items">
              <li>
                <a href="https://zerodha.com/ipo/">Upcoming IPOs</a>
              </li>
              <li>
                <a href="https://zerodha.com/charges/#tab-equities/">
                  Brokerage charges
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/marketintel/holiday-calendar/">
                  Market holidays
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/markets/calendar/">
                  Economic calendar
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/calculators/">Calculators</a>
              </li>
              <li>
                <a href="https://zerodha.com/markets/stocks/">Markets</a>
              </li>
              <li>
                <a href="https://zerodha.com/markets/sector/">Sectors</a>
              </li>
            </ul>
          </div>
          <div className="foot-para">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154,
              4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
              4th Phase, Bengaluru - 560078, Karnataka, India. For any
              complaints pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              India's largest broker based on networth as per NSE. NSE broker
              factsheet
            </p>
            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
            <p>
              *Customers availing insurance advisory services offered by Ditto
              (Tacterial Consulting Private Limited | IRDAI Registered Corporate
              Agent (Composite) License No CA0738) will not have access to the
              exchange investor grievance redressal forum, SEBI SCORES/ODR, or
              arbitration mechanism for such products.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
