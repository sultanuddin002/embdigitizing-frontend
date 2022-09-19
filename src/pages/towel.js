import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutSection from "../components/ui/about/AboutSection";
import Layout from "../components/ui/layout";
import bannerImg from "../images/embroidery-banner-2.jpg";

const TowelService = () => {
  return (
    <Layout>
      <AboutSection
        title="Towel Digitizing"
        textOne="Towel digitizing isn’t vastly different from different types of machine weaving or does it require particular weaving machines able for executing such weaving. Everything comes down to how configuration is extraordinarily digitized for the towel texture that makes it reasonable to be weaved into it, by picking the most proper underlay and besides, by remunerating utilizing push and draw for this particular precarious texture. Our highly skilled and expertly trained digitizers can turn any and all of your designs into highly effective customized towel embroidery digitized designs, all according to the specifications provided to us by the customer when submitting the design. As said, specialized forms of embroidery like puff can be utilized to give embroidery on your towels much more definition and classiness than just a simple branding method consisting of flat stitched embroidery. "
        backgroundImg={bannerImg}
        showIcons={false}
      />
    </Layout>
  );
};

export default TowelService;

export const Head = () => (
  <title>Towel Digitizing Service - EMBDigitized</title>
);
