import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutSection from "../components/ui/about/AboutSection";
import Layout from "../components/ui/layout";
import bannerImg from "../images/embroidery-banner-2.jpg";

const EmbrodieryService = () => {
  return (
    <Layout>
      <AboutSection
        title="Embroidery Digitizing Services"
        textOne="Back in the old days, embroidery used to be done by hand. After the advancements in technology and rapid industrialization, embroidery can be done with the help of machines. As for designers who are responsible to provide instructions to machines to design beautiful and clean embroidery, it’s the job of embroidery digitizers."
        textTwo="At EMBDigitized, we have over 20 years of experience working with numerous designs of various complexities. Whether its embroidery for Cap/Hat, T-shirt, Front, and Left Chest, Sleeve, Jacket Back, 3D Puff, 3D Raised, Flat, Towel, small letters, Applique and Patch, our professional designers can do it seamlessly. If you are interested to learn more about our Embroidery services, contact us and we’ll get back to you ASAP."
        backgroundImg={bannerImg}
        showIcons={false}
      />
    </Layout>
  );
};

export default EmbrodieryService;

export const Head = () => <title>Embrodiery Service - EMBDigitized</title>;
