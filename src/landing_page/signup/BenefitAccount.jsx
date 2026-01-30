import Hero from "../home/Hero";

function BenefitAccount() {
  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-6 text-center align-content-center">
          <img src="assets/benefits.svg" alt="" style={{ width: "60%" }} />
          <h3 className="py-5">Benefits of opening a Zerodha demat account</h3>
        </div>

        <div className="col-6 ">
          <h4 className="h4-style fs-3 text-dark pt-2">Unbeatable pricing</h4>
          <p className="text-muted fs-5 py-2">
            Zero charges for equity & mutual fund investments. Flat ₹20 fees for
            intraday and F&O trades.
          </p>
          <h4 className="h4-style fs-3 text-dark pt-2">
            Best investing experience
          </h4>
          <p className="text-muted fs-5 py-2">
            Simple and intuitive trading platform with an easy-to-understand
            user interface.
          </p>
          <h4 className="h4-style fs-3 text-dark pt-2">No spam or gimmicks</h4>
          <p className="text-muted fs-5 py-2">
            Committed to transparency — no gimmicks, spam, "gamification", or
            intrusive push notifications.
          </p>
          <h4 className="h4-style fs-3 text-dark pt-2">The Zerodha universe</h4>
          <p className="text-muted fs-5 py-2">
            More than just an app — gain free access to the entire ecosystem of
            our partner products.
          </p>
        </div>
      </div>
      <div className="container p-5">
        <div className="row text-center">
          <h1>Open a Zerodha account</h1>
          <p className="text-muted fs-4 py-4">
            Modern platforms and apps, &#8377;0 investments, and flat &#8377; 20
            intraday and F&amp;O trades.
          </p>
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "15%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default BenefitAccount;
