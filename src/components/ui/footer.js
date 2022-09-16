import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import theme from "./theme";
import { makeStyles } from "@mui/styles";
import logo from "../../images/logo-resize.png";
import Button from "@mui/material/Button";
import { Link } from "gatsby";

// icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const useStyles = makeStyles((theme) => ({
  logo: {
    backgroundColor: "#fff",
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
      justifyContent: "center",
    },
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
  {
    label: "Patches Digitizing",
    link: "/patches",
  },
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
            variant="h3"
            sx={{ color: "#fff", textDecoration: "none" }}
          >
            {props.text}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

const Footer = () => {
  const classes = useStyles();
  // Main Grid
  return (
    <div className={classes.container}>
      <Grid
        container
        rowSpacing={{ xs: 3, md: 0 }}
        alignItems="center"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          padding: "40px",
        }}
        classes={{ root: classes.mainContainer }}
      >
        <Grid item md={4}>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item>
              <img src={logo} alt="logo item" className={classes.logo} />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                sx={{ color: "#fff", paddingTop: "30px" }}
              >
                EMBDigitized is an embroidery digitizing service with experience
                working in all types of fabric, stitches, and designs needed for
                your Embroidery work. We deal in Cap/Hat, T-shirts, Front and
                Left Chest, Sleeve, Jacket Back, 3D Puff, 3D Raised, Flat,
                Towel, small letters, Applique and Patch.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            alignContent="center"
            columnSpacing={{ sm: 1 }}
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
        <Grid item md={4}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            alignContent="center"
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
                Sign Up To
              </Button>
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
