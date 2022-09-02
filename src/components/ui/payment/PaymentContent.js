import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

// icon
import paypal from "../../../images/paypal.svg";
import creditCard from "../../../images/credit-card.svg";

// image
import paymentImg from "../../../images/payment-image.jpg";

const useStyles = makeStyles((theme) => ({
  bannerSection: {
    backgroundImage: `url(${paymentImg})`,
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
  iconSection: {
    width: "90px",
    height: "90px",
    filter:
      "invert(11%) sepia(81%) saturate(4693%) hue-rotate(334deg) brightness(83%) contrast(107%)",
  },
  iconContainer: {
    [theme.breakpoints.up("md")]: {
      width: "450px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

const PaymentContent = () => {
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

      {/* Title and content section */}
      <Grid item sx={{ padding: "0 30px" }}>
        <Typography
          variant="h2"
          sx={{
            color: "#000",
            textTransform: "uppercase",
            padding: "20px 0",
            fontWeight: "bold",
          }}
        >
          Payment Options
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
          auctor ligula. Proin nisi ligula, luctus quis nisl vitae, aliquet
          bibendum ante. Nam viverra pulvinar velit ac euismod. Cras porta
          libero ut velit vehicula, in maximus magna blandit. Proin molestie
          facilisis eros, a pellentesque ipsum pulvinar nec. Maecenas rhoncus
          risus sed dictum pulvinar.
        </Typography>
      </Grid>

      {/* icon section */}
      <Grid item>
        <Typography
          variant="h1"
          sx={{
            color: "#000",
            textTransform: "uppercase",
            padding: "60px 0 30px 0",
            textAlign: "center",
          }}
        >
          Accepted Payment options
        </Typography>
      </Grid>

      {/* Icon section */}
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ padding: "20px 0" }}
        >
          <Grid
            item
            sx={{ textAlign: "center" }}
            classes={{ root: classes.iconContainer }}
          >
            <img src={paypal} className={classes.iconSection} />
            <Typography
              variant="h3"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                padding: "30px 0",
              }}
            >
              Paypal
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ textAlign: "center" }}
            classes={{ root: classes.iconContainer }}
          >
            <img src={creditCard} className={classes.iconSection} />
            <Typography
              variant="h3"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                padding: "30px 0",
              }}
            >
              Credit Card
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaymentContent;
