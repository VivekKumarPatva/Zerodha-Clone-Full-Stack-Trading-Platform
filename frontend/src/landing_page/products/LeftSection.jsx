import React from "react";

function LeftSection({
  imageURL,
  porductName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-1 p-5"></div>
        <div className="col-6 p-5 mt-5">
          <h1>{porductName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="assets/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="assets/appstoreBadge.svg"
                style={{ marginLeft: "25px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
