import Typography from "@mui/material/Typography";
import * as React from "react";
import AboutSection from "../components/ui/about/AboutSection";
import Layout from "../components/ui/layout";
import bannerImg from "../images/embroidery-banner-2.jpg";

const JacketBackService = () => {
  return (
    <Layout>
      <AboutSection
        title="Jacket Back Digitizing"
        textOne="EMBdigitized is a pioneer in custom digitizing services, especially for Jacket Backs that give a stylish look of your jacket design by using our jacket back embroidery digitizing service at a reasonable price. Our highly trained and experienced staff will take your design from concept to garment using the very best the software the industry has to offer.A highly mastered and experienced digitizer is required to make sure each and every stitch is made properly. "
        textTwo="This Digitizing Service is popular among the Embroidery Digitizing Services as it requires expertise that is able to handle all the requirements of clients. The process can be finished quickly and your designs can be made in the shortest span of time because we have got a strong backhand team to handle all the work."
        backgroundImg={bannerImg}
        showIcons={false}
      />
    </Layout>
  );
};

export default JacketBackService;

export const Head = () => (
  <title>Jacket Back Digitizing Service - EMBDigitized</title>
);
