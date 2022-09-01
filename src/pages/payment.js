import Typography from "@mui/material/Typography";
import * as React from "react";
import Layout from "../components/ui/layout";
import PaymentContent from "../components/ui/payment/PaymentContent";
import PaymentFaq from "../components/ui/payment/PaymentFaq";

const Payment = () => {
  return (
    <Layout>
      <PaymentContent />
      <PaymentFaq />
    </Layout>
  );
};

export default Payment;

export const Head = () => <title>Payment Options - EMBDigitized</title>;
