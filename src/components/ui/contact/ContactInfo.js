import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import theme from "../theme";

// icon
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContactForm from "./ContactForm";

// image
import paymentImg from "../../../images/contact-us-2.jpg";

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
  topContainerLeft: {
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "inline-block",
    height: "100%",
    // backgroundColor: "#FAFAFA",
  },
  topContainerRight: {
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "inline-block",
    height: "100%",
    backgroundColor: "#F4F4F4",
  },
  emailContainer: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  phoneContainer: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

const ContactInfo = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        // sx={{ paddingBottom: "60px" }}
      >
        {/* Banner image */}
        <Grid item classes={{ root: classes.bannerSection }}>
          <Container
            classes={{ root: classes.innerGrid }}
            maxWidth="xl"
          ></Container>
        </Grid>
      </Grid>
      <div className={classes.topContainerLeft}>
        <Grid
          container
          direction="column"
          classes={{ root: classes.emailContainer }}
          sx={{ padding: "20px" }}
        >
          <Grid item>
            <Typography
              variant="h3"
              sx={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              Email
            </Typography>
          </Grid>
          <Grid item>
            <Grid container sx={{ padding: "10px 0" }}>
              <Grid item>
                <EmailIcon
                  sx={{ color: theme.palette.primary.main, padding: "0 10px" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ color: "#8E8E8E" }}>
                  info@embdigitized.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container sx={{ padding: "" }}>
              <Grid item>
                <EmailIcon
                  sx={{
                    color: theme.palette.primary.main,
                    padding: "0 10px",
                    paddingBottom: "30px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ color: "#8E8E8E" }}>
                  embdigitized777@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="h3"
              sx={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              Contact
            </Typography>
          </Grid>
          <Grid item>
            <Grid container sx={{ padding: "10px 0" }}>
              <Grid item>
                <LocalPhoneIcon
                  sx={{
                    color: theme.palette.primary.main,
                    paddingRight: "10px ",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ color: "#8E8E8E" }}>
                  +555-5555-55
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container sx={{ padding: "0" }}>
              <Grid item>
                <WhatsAppIcon
                  sx={{
                    color: theme.palette.primary.main,
                    paddingRight: "10px ",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ color: "#8E8E8E" }}>
                  +5896 47852 (WhatsApp only)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={classes.topContainerRight}>
        <Grid
          container
          direction="column"
          classes={{ root: classes.phoneContainer }}
          sx={{ padding: "20px" }}
        ></Grid>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactInfo;
