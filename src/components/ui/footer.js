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
      backgroundColor: "#fff",
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
      paddingTop: "50px",
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

const Footer = () => {
  const classes = useStyles();
  // Main Grid
  return (
    <div className={classes.container}>
      <Grid
        container
        rowSpacing={3}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                at auctor ligula. Proin nisi ligula, luctus quis nisl vitae,
                aliquet bibendum ante. Nam viverra pulvinar velit ac euismod.
                Cras porta libero ut velit vehicula,
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid
            container
            direction="column"
            alignItems="center"
            columnSpacing={{ sm: 4 }}
          >
            <Grid item>
              <Typography
                variant="h2"
                sx={{ color: "#fff", textTransform: "uppercase" }}
              >
                Our Services
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                justifyContent="flex-start"
                classes={{ root: classes.servicePoint }}
              >
                <Grid item>
                  <ChevronRightIcon
                    sx={{ color: "#fff", fontWeight: "bold" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h3" sx={{ color: "#fff" }}>
                    Embroidery Digitizing
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
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
                50%
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2" sx={{ color: "#fff" }}>
                Off Your First Order
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
            All Rights Reserved © 2022 EMB Digitized
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
