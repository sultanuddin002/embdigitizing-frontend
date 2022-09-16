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
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: props.bgColor ? theme.palette.primary.main : "#fff",
        // boxShadow: "5px 5px #cccccc",
        boxShadow: "0px 0px 3px 4px rgba(166,166,166,0.76)",
      }}
    >
      <CardContent>
        <Typography
          variant="h3"
          color={props.bgColor ? "#fff" : theme.palette.primary.main}
          sx={{
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: "normal",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            textAlign: "center",
          }}
        >
          {props.subHeading}
        </Typography>
        <Typography
          variant="h2"
          sx={{ mb: 1.5, pt: 2, textAlign: "center", fontSize: "50px" }}
          color={props.bgColor ? "#fff" : theme.palette.secondary.main}
        >
          {props.price}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            mb: 1.5,
            textAlign: "center",
            textTransform: "uppercase",
            fontFamily: "Poppins!important",
          }}
          color={props.bgColor ? "#fff" : theme.palette.secondary.main}
        >
          {props.stitches}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 1.5,
            textTransform: "uppercase",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Anton!important",
            letterSpacing: 2.5,
          }}
          color={props.bgColor ? "#fff" : theme.palette.secondary.main}
        >
          {props.items}
        </Typography>

        {props.features.map((feature) => (
          <Grid container justifyContent="flex-start" alignItems="center">
            <Grid item>
              <CheckBoxIcon
                sx={{
                  color: props.bgColor ? "#fff" : theme.palette.secondary.main,
                  pr: 1,
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color={props.bgColor ? "#fff" : theme.palette.secondary.main}
              >
                {feature}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

const similarDetails = [
  "Best Quality Designs",
  "Free Minor Edits",
  "Major Edits (additional charges)",
  "Free Size Change (within 25%)",
  "All supported formats available",
  "No urgent fees",
  "24/7 Support",
];

const basicFeatures = ["$2 Per 1000 Stitches", "Turnaround 18-24 hrs"];

const standardFeatures = ["$2 Per 1000 Stitches", "Turnaround 8-16 hrs"];

const premiumFeatures = [
  "$2 Per 1000 Stitches",
  "Turnaround time depends on complexity of design ",
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
        {/* <Typography
          variant="body2"
          sx={{
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
          auctor ligula.
        </Typography> */}
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
              items="For caps and left chests"
              price="$15"
              stitches="10,000 stitches"
              features={[...basicFeatures, ...similarDetails]}
            />
          </Grid>
          <Grid item>
            <PricingCard
              title="standard"
              subTitle="Best for medium businesses"
              items="For caps and left chests"
              price="$25"
              stitches="20,000 stitches"
              features={[...standardFeatures, ...similarDetails]}
              bgColor={true}
            />
          </Grid>
          <Grid item>
            <PricingCard
              title="Professional"
              subTitle="Best for large enterprises"
              items="For jacket backs"
              price="$40"
              stitches="50,000 stitches"
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
