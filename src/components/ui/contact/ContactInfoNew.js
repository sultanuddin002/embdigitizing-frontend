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
import { useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

// image
import paymentImg from "../../../images/contact-us-2.jpg";
import ContactFormNew from "./ContactFormNew";
import skype from "../../../images/skype.svg";

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
      width: "50%",
      // MarginLeft: "50px",
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
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "inline-block",
    height: "100%",
    backgroundColor: "#fff",
  },
  emailContainer: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      position: "absolute!important",
      paddingTop: "7%!important",
      alignItems: "flex-start",
      marginLeft: "50px",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginBottom: "30px",
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

const ContactInfoNew = () => {
  const classes = useStyles();

  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));

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
      <div className={classes.topContainerRight}>
        <Grid
          container
          direction="column"
          classes={{ root: classes.phoneContainer }}
          // sx={{ padding: "0 50px" }}
        ></Grid>
        <ContactFormNew />
      </div>
      <div className={classes.topContainerLeft}>
        <Grid
          container
          direction="column"
          // alignItems="center"
          justifyContent="center"
          classes={{ root: classes.emailContainer }}
          sx={{ padding: "20px" }}
        >
          <Grid item>
            <Typography variant="h2" sx={{ color: theme.palette.primary.main }}>
              We will be with you soon.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              sx={{
                color: "#2f2f2f",
                width: matchesSM ? "100%" : "500px",
                pb: "30px",
              }}
            >
              Send Your Questions and Request a Quotation of Your Artwork and
              Get a Quick Response!
            </Typography>
          </Grid>
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
                  support@embdigitized.com
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
                  embdigitized22@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="h3"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                paddingBottom: "5px",
              }}
            >
              Contact
            </Typography>
          </Grid>
          <Grid item>
            <Grid container sx={{ padding: "5px 0" }}>
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
                  +1(234)-567-890
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container sx={{ padding: "5px 0" }}>
              <Grid item>
                <img
                  src={skype}
                  alt="skype icon"
                  style={{
                    width: "23px",
                    paddingRight: "15px",
                    filter:
                      "invert(9%) sepia(98%) saturate(5726%) hue-rotate(338deg) brightness(79%) contrast(101%)",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ color: "#8E8E8E" }}>
                  embdigitized
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container sx={{ padding: "5px 0" }}>
              <Grid item>
                <FacebookIcon
                  sx={{
                    color: theme.palette.primary.main,
                    paddingRight: "10px ",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ color: "#8E8E8E" }}>
                  facebook.com/embdigitized
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container sx={{ padding: "5px 0" }}>
              <Grid item>
                <InstagramIcon
                  sx={{
                    color: theme.palette.primary.main,
                    paddingRight: "10px ",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ color: "#8E8E8E" }}>
                  instagram.com/embdigitized
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ContactInfoNew;
