import Typography from "@mui/material/Typography";
import * as React from "react";
import Layout from "../components/ui/layout";
import PaymentContent from "../components/ui/payment/PaymentContent";
import PaymentFaq from "../components/ui/payment/PaymentFaq";
import PricingContent from "../components/ui/payment/PricingContent";
import PricingUpdate from "../components/ui/payment/PricingUpdate";

const Pricing = () => {
  return (
    <Layout>
      {/* <PricingContent /> */}
      <PricingUpdate />
      {/* <PaymentFaq /> */}
    </Layout>
  );
};

export default Pricing;

export const Head = () => <title>Pricing - EMBDigitized</title>;
