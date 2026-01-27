import React from "react";

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="/public/assets/largestBroker.svg" alt="largestBroker.svg" />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>Largest Stock broker in India</h1>
                    <p className="mb-5">
                        2+ millin Zerodha clients contribute to over 15% of all retail order
                        volumes in India daily by trading and investing in:
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivaties</p>
                                </li>
                                <li>
                                    <p>Currency derivaties</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stocks & IPO</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds & Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                        <img src="/public/assets/pressLogos.png" alt="pressLogos" style={{
                            width:"90%"
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
