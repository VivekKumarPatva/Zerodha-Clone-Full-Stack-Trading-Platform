import "./AccountCharge.css";

function AccountCharge() {
  return (
    <div className="container pb-4 pt-5">
      <div className="row">
        <h1 className="fs-3 pb-4 ps-0 ">Charges for account opening</h1>
      </div>
      <div className="row">
        <table className="accoChargetab">
          <thead>
            <tr>
              <th>Type of account</th>
              <th> Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>FREE</td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>FREE</td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountCharge;
