function OptionalCharge() {
  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        <h1 className="fs-3 pb-4 ps-0 pt-5">
          Charges for optional value added services
        </h1>
      </div>
      <div className="row">
        <table className="accoChargetab">
          <thead>
            <tr>
              <th>Service</th>
              <th>Billing Frquency</th>
              <th> Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td> Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td> Monthly</td>
              <td> Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OptionalCharge;
