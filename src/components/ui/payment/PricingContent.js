import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import theme from "../theme";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

// icon
import paypal from "../../../images/paypal.svg";
import creditCard from "../../../images/credit-card.svg";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

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
      width: "180px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

function PricingCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          variant="h3"
          color={theme.palette.primary.main}
          sx={{ textTransform: "uppercase" }}
        >
          {props.title}
        </Typography>
        <Typography variant="h5" component="div">
          {props.subHeading}
        </Typography>
        <Typography
          variant="h2"
          sx={{ mb: 1.5 }}
          color={theme.palette.secondary.main}
        >
          {props.price}
        </Typography>

        {props.features.map((feature) => (
          <Grid container justifyContent="flex-start" alignItems="center">
            <Grid item>
              <CheckBoxIcon sx={{ color: theme.palette.primary.main, pr: 1 }} />
            </Grid>
            <Grid item>
              <Typography variant="body2">{feature}</Typography>
            </Grid>
          </Grid>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

const similarDetails = [
  "Excellent quality",
  "Superfast turnaround",
  "Free file format change",
  "Free design editing",
  "Free design backup",
  "Hold at any time",
  "24/7 support",
];

const basicFeatures = ["10 designs included", "+2 free designs"];

const standardFeatures = [
  "25 designs included",
  "+5 free designs",
  "No urgent fee",
];

const premiumFeatures = [
  "50 designs included",
  "+10 free designs",
  "No urgent fee",
];

const PricingContent = () => {
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
            textAlign: "center",
          }}
        >
          Checkout our pricing options as per your requirement
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
          auctor ligula.
        </Typography>
      </Grid>
      <Grid item>
        {/* Create 3 cards here in horizontal */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnSpacing={{ md: 3 }}
          sx={{ padding: "20px 0" }}
        >
          <Grid item>
            <PricingCard
              title="basic"
              subTitle="Best for starting businesses"
              price="$90/month"
              features={[...basicFeatures, ...similarDetails]}
            />
          </Grid>
          <Grid item>
            <PricingCard
              title="standard"
              subTitle="Best for medium businesses"
              price="$200/month"
              features={[...standardFeatures, ...similarDetails]}
            />
          </Grid>
          <Grid item>
            <PricingCard
              title="premium"
              subTitle="Best for large enterprises"
              price="$400/month"
              features={[...premiumFeatures, ...similarDetails]}
            />
          </Grid>
        </Grid>
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
          justifyContent="center"
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

export default PricingContent;
