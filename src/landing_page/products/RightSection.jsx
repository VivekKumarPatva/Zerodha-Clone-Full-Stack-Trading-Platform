import React from "react";

function RightSection({
  imageURL,
  productTitle,
  productDescription,
  linkName,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 p-5">
          <h1 className="mb-4">{productTitle}</h1>
          <p>{productDescription}</p>
          <a href="">{linkName}</a>
        </div>
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
