import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import HomeGallery from "../home/HomeGallery";

// image
import portfolioImage from "../../../images/slider-1.jpg";

const useStyles = makeStyles((theme) => ({
  bannerSection: {
    backgroundImage: `url(${portfolioImage})`,
    height: "300px",
    display: "block",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  innerGrid: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}));

const PortfolioContent = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ paddingBottom: "60px" }}
    >
      {/* Banner image */}
      <Grid item classes={{ root: classes.bannerSection }}>
        <Container
          classes={{ root: classes.innerGrid }}
          maxWidth="xl"
        ></Container>
      </Grid>
      {/* Heading and sub heading */}
      <Grid item>
        <Typography
          variant="h1"
          sx={{
            textTransform: "uppercase",
            padding: "50px 0",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          portfolio
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h2"
          sx={{
            textTransform: "uppercase",
            padding: "10px 0 50px 0",
            color: "#000",
            // width: "600px",
            textAlign: "center",
            fontWeight: "200",
          }}
        >
          Check out our embroidery digitizing work
        </Typography>
      </Grid>
      <Grid item>
        <HomeGallery />
      </Grid>
    </Grid>
  );
};

export default PortfolioContent;
