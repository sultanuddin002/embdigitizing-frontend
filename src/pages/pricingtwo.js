import Typography from "@mui/material/Typography";
import * as React from "react";
import Layout from "../components/ui/layout";
import PricingUpdate from "../components/ui/payment/PricingUpdate";

const PricingTwo = () => {
  return (
    <Layout>
      <PricingUpdate />
    </Layout>
  );
};

export default PricingTwo;

export const Head = () => <title>Pricing - EMBDigitized</title>;
