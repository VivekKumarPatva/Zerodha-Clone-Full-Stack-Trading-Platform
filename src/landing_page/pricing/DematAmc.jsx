function DematAmc() {
  return (
    <div className="container pt-5">
      <div className="row">
        <h1 className="fs-3 pb-4 ps-0 pt-4">
          Demat AMC (Annual Maintenance Charge)
        </h1>
      </div>
      <div className="row">
        <table className="accoChargetab">
          <thead>
            <tr>
              <th>Value of holdings</th>
              <th>AMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td>FREE*</td>
            </tr>
            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹ 100 per year, charged quarterly*</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DematAmc;
