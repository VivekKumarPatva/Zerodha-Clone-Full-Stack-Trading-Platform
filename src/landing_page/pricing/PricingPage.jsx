import AccountCharge from "./AccoutCharge";
import Brokerage from "./Brokerage";
import ChargeDescription from "./Chargedescription";
import DematAmc from "./DematAmc";
import OptionalCharge from "./OptionalCharge";

function PricingPage() {
  return (
    <>
      <Brokerage />
      <AccountCharge />
      <DematAmc />
      <OptionalCharge />
      <ChargeDescription />
    </>
  );
}

export default PricingPage;
