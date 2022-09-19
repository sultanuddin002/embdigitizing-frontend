import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutSection from "../components/ui/about/AboutSection";
import Layout from "../components/ui/layout";
import bannerImg from "../images/about-us-2.jpg";

const About = () => {
  return (
    <Layout>
      <AboutSection
        title="about us"
        textOne="At EMBdigitizing, we have experienced and talented Embroidery digitizers with over 22 years of experience in creating quality embroidery designs in fast turnaround time. The knowledge about embroidery digitizing is considered a top-notch requirement as it yields quality as well as fully detailed artwork."
        textTwo="For services offered within EMBdigitized, we cover everything from embroidery digitizing for Cap/Hat, Beanies, Visor, T-shirt, Front, Left Chest, Sleeve, Jacket Back, 3D Puff, 3D Raised, Flat, Towel, Gloves, small letters, Applique and Custom Embroidery Patches, etc. Above everything else, we ensure that customer satisfaction remains of paramount importance around our services as we believe that a happy customer is our true goal to achieve."
        showIcons={true}
        backgroundImg={bannerImg}
      />
    </Layout>
  );
};

export default About;

export const Head = () => <title>About US - EMBDigitized</title>;
