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
import useMediaQuery from "@mui/material/useMediaQuery";

// icon
import paypal from "../../../images/paypal.svg";
import creditCard from "../../../images/credit-card.svg";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

// image
import paymentImg from "../../../images/payment-image.jpg";
import { Paper } from "@mui/material";

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
  button: {
    "&:hover": {
      backgroundColor: "#585252!important",
    },
  },
  boxContainer: {
    [theme.breakpoints.down("md")]: {
      width: 350,
    },
  },
}));

function PricingCardOne(props) {
  const classes = useStyles();
  // const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Paper
      sx={{ margin: "20px 0", borderRadius: "40px" }}
      classes={{ root: classes.boxContainer }}
    >
      <Button
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          fontWeight: "bold",
          padding: "10px 30px",
          borderRadius: "20px",
          position: "absolute",
          marginLeft: matchesSM ? props.leftMobile : props.left,
          marginTop: "-20px",
        }}
        classes={{ root: classes.button }}
      >
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: "normal",
          }}
        >
          {props.title}
        </Typography>
      </Button>
      <Card
        sx={{
          minWidth: 275,
          borderRadius: "40px 0px 40px 0px",
        }}
      >
        <CardContent
          sx={{
            padding: 0,
            // background:
            background: `linear-gradient(167deg, ${props.bg1} 78%, ${props.bg2} 100%)`,
          }}
        >
          <Box
            sx={{
              backgroundColor: props.bgHex,
              padding: "20px 10px",
              borderRadius: "0 0 30px 0px",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                textAlign: "center",
                color: "#fff",
              }}
            >
              {props.subHeading}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: 1.5,
                pt: 2,
                textAlign: "center",
                fontSize: "70px",
                color: "#fff",
                fontWeight: "bold",
              }}
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
              color="#fff"
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
                fontFamily: "Lato!important",
                letterSpacing: 2.5,
              }}
              color="#fff"
            >
              {props.items}
            </Typography>
          </Box>
          <Box sx={{ paddingTop: "30px", borderRadius: "20px 0 0 0" }}>
            {props.features.map((feature) => (
              <Grid
                container
                justifyContent="flex-start"
                alignItems="center"
                sx={{ padding: "5px 20px" }}
              >
                <Grid item>
                  <CheckBoxIcon
                    sx={{
                      color: props.bgColor
                        ? "#fff"
                        : theme.palette.secondary.main,
                      pr: 1,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    sx={{ width: "230px" }}
                    color={
                      props.bgColor ? "#fff" : theme.palette.secondary.main
                    }
                  >
                    {feature}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </Paper>
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

const PricingUpdate = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      sx={{ paddingBottom: "60px" }}
    >
      {/* Banner image */}
      <Grid item classes={{ root: classes.bannerSection }}>
        <Container
          classes={{ root: classes.innerGrid }}
          maxWidth="100%"
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
          columnSpacing={{ md: 3, sm: 3 }}
          sx={{ padding: "20px 0" }}
        >
          <Grid item>
            <PricingCardOne
              title="basic"
              subTitle="Best for starting businesses"
              items="For caps and left chests"
              price="$15"
              left="191px"
              leftMobile="191px"
              stitches="10,000 stitches"
              features={[...basicFeatures, ...similarDetails]}
              bg1="rgba(255,255,255,1)"
              bg2="rgba(163,0,47,1)"
              bg3="rgba(130,40,164,1)"
              bg4="rgba(225,106,134,1)"
              bgHex="#a3002f"
            />
          </Grid>
          <Grid item>
            <PricingCardOne
              title="standard"
              subTitle="Best for medium businesses"
              items="For caps and left chests"
              price="$25"
              stitches="20,000 stitches"
              left="147px"
              leftMobile="147px"
              features={[...standardFeatures, ...similarDetails]}
              bg1="rgba(255,255,255,1)"
              bg2="rgba(127,127,127,1)"
              bg3="rgba(71,190,184,1)"
              bg4="rgba(106,60,231,1)"
              bgHex="#7f7f7f"
            />
          </Grid>
          <Grid item>
            <PricingCardOne
              title="Premium"
              subTitle="Best for large enterprises"
              items="For jacket backs"
              price="$40"
              stitches="50,000 stitches"
              leftMobile="11rem"
              left="17rem"
              features={[...premiumFeatures, ...similarDetails]}
              bg1="rgba(255,255,255,1)"
              bg2="rgba(12,38,87,1)"
              bg3="rgba(199,30,71,1)"
              bg4="rgba(250,141,82,1)"
              bgHex="#0c2657"
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

export default PricingUpdate;
