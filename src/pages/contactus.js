import Typography from "@mui/material/Typography";
import * as React from "react";
import ContactForm from "../components/ui/contact/ContactForm";
import ContactInfo from "../components/ui/contact/ContactInfo";
import ContactInfoNew from "../components/ui/contact/ContactInfoNew";
import Layout from "../components/ui/layout";

const ContactUs = () => {
  return (
    <Layout>
      <ContactInfoNew />
      {/* <ContactForm /> */}
    </Layout>
  );
};

export default ContactUs;

export const Head = () => <title>Contact Us - EMBDigitized</title>;
