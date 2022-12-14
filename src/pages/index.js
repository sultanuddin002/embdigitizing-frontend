import Typography from "@mui/material/Typography";
import * as React from "react";
import HomeAbout from "../components/ui/home/HomeAbout";
import HomeCustom from "../components/ui/home/HomeCustom";
import HomeGallery from "../components/ui/home/HomeGallery";
import HomeServices from "../components/ui/home/HomeServices";
import HomeSlider from "../components/ui/home/HomeSlider";
import HomeTestimonials from "../components/ui/home/HomeTestimonials";
import Layout from "../components/ui/layout";
import theme from "../components/ui/theme";
import Fade from "@mui/material/Fade";

const IndexPage = () => {
  return (
    <Layout>
      <HomeSlider />
      <HomeServices />
      <HomeAbout />
      <HomeGallery
        title="our portfolio"
        bgColor={theme.palette.secondary.main}
        padding="10% 10%"
      />
      {/* <HomeCustom /> */}
      <HomeTestimonials />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <title>Create Custom Embroidery Design - EMBDigitized</title>
);
