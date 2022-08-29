import Typography from "@mui/material/Typography";
import * as React from "react";
import Layout from "../components/ui/layout";

const About = () => {
  return (
    <Layout>
      <Typography variant="body1" sx={{ height: "200px", padding: "30px" }}>
        This is About
      </Typography>
    </Layout>
  );
};

export default About;

// export const Head = () => <title>Home Page</title>;
