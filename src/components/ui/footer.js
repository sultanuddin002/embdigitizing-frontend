import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import theme from "./theme";
import { makeStyles } from "@mui/styles";
// import logo from "../../images/logo-resize.png";
import logo from "../../images/logo-resized-2.jpg";
import Button from "@mui/material/Button";
import { Link } from "gatsby";
import IconSection from "./IconSection";
import useMediaQuery from "@mui/material/useMediaQuery";

// icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

// images
import amercianExpress from "../../images/americanexpress.png";
import cirrus from "../../images/cirrus.png";
import dinersClub from "../../images/dinersclub.png";
import discover from "../../images/discover.png";
import maestro from "../../images/maestro.png";
import masterCard from "../../images/mastercard.png";
import paypal from "../../images/paypal.png";
import visa from "../../images/visa02.png";
import wirecard from "../../images/wirecard.png";
import worldpay from "../../images/worldpay.png";
import paypalLarge from "../../images/pp-white-bg-3.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    backgroundColor: "#fff",
    borderRadius: "100px",
  },
  button: {
    "&:hover": {
      backgroundColor: "#A1012D!important",
      color: "#fff",
    },
  },
  container: {
    backgroundColor: theme.palette.secondary.main,
    height: "100%",
  },
  divider: {
    borderColor: "#ded8d8   ",
  },
  servicePoint: {
    [theme.breakpoints.up("md")]: {
      paddingTop: "10px",
    },
  },
  serviceHeading: {
    [theme.breakpoints.up("md")]: {
      paddingBottom: "50px",
    },
  },
  mainContainer: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
    },
  },
  contactContainer: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
      alignItems: "center",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
      direction: "column",
      spacing: 1,
    },
  },

  serviceContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    [theme.breakpoints.up("md")]: {
      alignContent: "center",
    },
    [theme.breakpoints.down("md")]: {
      alignContent: "flex-start",
      padding: "30px 0",
    },
  },
  signUpContainer: {
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      alignContent: "center",
    },
    [theme.breakpoints.down("md")]: {
      alignContent: "center",
    },
  },
  paymentImg: {
    padding: "0 5px",
    width: "40px",
  },
}));

const footerPages = [
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "FAQs",
    link: "/faqs",
  },
  { label: "Privacy Policy", link: "/privacy-policy" },
  { label: "Terms and Conditions", link: "/terms-conditions" },
];

const servicesRoutes = [
  {
    label: "Embroidery Digitizing",
    link: "/embrodiery",
  },
  // {
  //   label: "Cap/Hat Digitizing",
  //   link: "/cap",
  // },
  // {
  //   label: "3D Puff Digitizing",
  //   link: "/puffs",
  // },
  // {
  //   label: "Jacket Back Digitizing",
  //   link: "/jacket",
  // },
  // {
  //   label: "Polo Shirts Digitizing",
  // },
  // {
  //   label: "Towel Digitizing",
  //   link: "/towel",
  // },
  // {
  //   label: "Applique Digitizing",
  //   link: "/towel",
  // },
  {
    label: "Custom Patch Digitizing",
    link: "/patches",
  },
];

const paymentArray = [
  {
    img: amercianExpress,
    alt: "American Express",
  },
  {
    img: cirrus,
    alt: "cirrus",
  },
  {
    img: dinersClub,
    alt: "Diners Club",
  },
  { img: discover, alt: "Discover" },
  { img: maestro, alt: "Maestro" },
  { img: masterCard, alt: "Master Card" },
  { img: paypal, alt: "PayPal" },
  { img: visa, alt: "Visa" },
  { img: wirecard, alt: "Wirecard" },
  { img: worldpay, alt: "WorldPay" },
];

function ServiceBullets(props) {
  const classes = useStyles();

  return (
    <Grid item>
      <Grid
        container
        alignItems="flex-start!important"
        classes={{ root: classes.servicePoint }}
      >
        <Grid item>
          <ChevronRightIcon sx={{ color: "#fff", fontWeight: "bold" }} />
        </Grid>
        <Grid item>
          <Typography
            component={Link}
            to={props.link}
            variant="h4"
            sx={{ color: "#fff", textDecoration: "none", fontWeight: "400" }}
          >
            {props.text}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

function PaymentSection(props) {
  const classes = useStyles();
  return <img src={props.img} alt={props.alt} className={classes.paymentImg} />;
}

const Footer = () => {
  const classes = useStyles();
  // media query
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  // Main Grid
  return (
    <div className={classes.container}>
      <Grid
        container
        rowSpacing={{ xs: 3, md: 0 }}
        alignItems="flex-start"
        // justifyContent="flex-start"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          padding: "40px",
        }}
        classes={{ root: classes.mainContainer }}
      >
        <Grid item md={3} sm={12}>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item>
              <img src={logo} alt="logo item" className={classes.logo} />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{ color: "#fff", paddingTop: "30px" }}
              >
                EMBdigitized has been working professionally since 2000. We are
                a leading embroidery digitizing service provider in many
                countries working in the embroidery industry with various
                companies and individuals for quality and award winning
                embroidery digitizing.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} sm={12}>
          <Grid
            container
            direction="column"
            columnSpacing={{ sm: 1 }}
            classes={{ root: classes.serviceContainer }}
          >
            <Grid item>
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                }}
                classes={{ root: classes.serviceHeading }}
              >
                Our Services
              </Typography>
            </Grid>
            {servicesRoutes.map((service) => (
              <ServiceBullets text={service.label} link={service.link} />
            ))}
          </Grid>
        </Grid>
        <Grid item md={3} sm={12}>
          <Grid
            container
            direction="column"
            classes={{ root: classes.signUpContainer }}
            spacing={2}
          >
            <Grid item>
              <Button
                className="footerButton"
                classes={{ root: classes.button }}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  ...theme.typography.body1,
                }}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid item>
              <Typography
                variant="h3"
                sx={{ color: "#fff", fontSize: "2.0rem" }}
              >
                to get
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h1"
                sx={{ color: "#fff", fontSize: "3.5rem" }}
              >
                100%
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2" sx={{ color: "#fff" }}>
                Off at Your First Order
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} sm={12}>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            alignContent="center"
            columnSpacing={{ sm: 1 }}
            sx={{ padding: matchesSM ? "30px 0 " : "0" }}
          >
            <Grid item>
              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                }}
                classes={{ root: classes.serviceHeading }}
              >
                Contact Us
              </Typography>
            </Grid>
            <Grid
              container
              columnSpacing={{ md: 4, xs: 1 }}
              sx={{ paddingLeft: "30px" }}
              classes={{ root: classes.contactContainer }}
            >
              <Grid item>
                <IconSection text="+1(234)-567-890">
                  <PhoneIcon sx={{ color: theme.palette.common.white }} />
                </IconSection>
              </Grid>
              <Grid item>
                <IconSection text="embdigitized22@gmail.com">
                  <EmailIcon sx={{ color: theme.palette.common.white }} />
                </IconSection>
              </Grid>
            </Grid>
            <Grid item sx={{ pt: 2, paddingTop: matchesSM ? "20px" : "0" }}>
              {paymentArray.map((payment) => (
                <PaymentSection img={payment.img} alt={payment.alt} />
              ))}
            </Grid>
            <Grid item>
              <img
                src={paypalLarge}
                alt="Paypal Icon"
                style={{ width: "200px" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr className={classes.divider} />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <Grid container justifyContent="center" alignItems="center">
            {footerPages.map((page) => (
              <Grid item>
                <Typography
                  component={Link}
                  to={page.link}
                  variant="body1"
                  sx={{
                    color: "#808CA7",
                    padding: "15px",
                    textDecoration: "none",
                  }}
                >
                  {page.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            All Rights Reserved © 2022 EMBDigitized
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
