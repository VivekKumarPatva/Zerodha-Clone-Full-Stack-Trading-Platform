import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="container">
      <div className="row  text-center pt-5">
        <h1 className="pt-5"> Open a free demat and trading account online</h1>
        <p className="fs-4 pt-4">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row p-5">
        <div className="col-6 align-">
          <img src="assets/accountopen.svg" alt="accountopen" />
        </div>
        <div className="col-6">
          <h2 className="pb-2">Signup now</h2>
          <p className="pb-2 fs-4">Or track your existing application</p>
          <form action="">
            <div className="border  border-primary  rounded-2 w-75 mb-4">
              <span>
                <span className="p-3 fs-4">
                  <img src="assets/india-flag.svg" alt="" />
                  +91
                </span>
              </span>
              <input
                className=" custom-input  rounded-2 "
                type="number"
                name=""
                id=""
                placeholder="Enter your mobile number"
                style={{
                  border: "none",
                  width: "20em",
                  height: "4em",
                }}
              />
            </div>
            <div className="pb-5">
              <button
                className="btn btn-primary p-2 fs-5"
                style={{ width: "45%" }}
              >
                Get OTP
              </button>
            </div>
          </form>
          <p className=" pb-3 border-bottom">
            <span>By proceeding, you agree to the Zerodha </span>
            <a href="">terms</a> & <a href=""> privacy policy</a>
          </p>
          <p>
            <span> Looking to open NRI account? </span>
            <a href="https://zerodha.com/open-account/nri">Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
