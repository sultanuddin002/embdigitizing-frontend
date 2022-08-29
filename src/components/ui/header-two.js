import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import theme from "./theme";
import { makeStyles } from "@mui/styles";
import logo from "../../images/logo-main.png";
import { ClassNames } from "@emotion/react";
import { Link } from "gatsby";

// icons
import PhoneIcon from "@mui/icons-material/Phone";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const routes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Payment",
    link: "/payment",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "10%",
  },
}));

const HeaderTwo = () => {
  const classes = useStyles();

  return (
    // Add top bar here
    <>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        sx={{ height: "50px", backgroundColor: theme.palette.secondary.main }}
      >
        <Grid item md={9} xs={6}>
          <Grid
            container
            spacing={4}
            justifyContent="flex-start"
            alignItems="center"
            sx={{ paddingLeft: "30px" }}
          >
            <Grid item>
              <Grid
                container
                spacing={2}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item>
                  <PhoneIcon sx={{ color: theme.palette.primary.main }} />
                </Grid>
                <Grid item>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    555-555-555
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={2}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item>
                  <EmailIcon sx={{ color: theme.palette.primary.main }} />
                </Grid>
                <Grid item>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    admin@example.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={2}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item>
                  <WatchLaterIcon sx={{ color: theme.palette.primary.main }} />
                </Grid>
                <Grid item>
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    Open 24/7
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={3} xs={6}>
          <Grid
            container
            spacing={3}
            justifyContent="flex-end"
            sx={{ paddingRight: "40px" }}
          >
            <Grid item>
              <TwitterIcon sx={{ color: theme.palette.primary.main }} />
            </Grid>
            <Grid item>
              <FacebookIcon sx={{ color: theme.palette.primary.main }} />
            </Grid>
            <Grid item>
              <InstagramIcon sx={{ color: theme.palette.primary.main }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Top bar ends here */}
      <AppBar sx={{ backgroundColor: "#fff" }} position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={logo} alt="logo" className={classes.logo} />
            <Tabs
              sx={{
                //   marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              {routes.map((route) => (
                <Tab
                  component={Link}
                  to={route.link}
                  label={route.name}
                  key={route.name}
                  sx={{
                    color: theme.palette.secondary.main,
                    ...theme.typography.body1,
                    textTransform: "capitalize",
                  }}
                />
              ))}
            </Tabs>

            <AccessAlarmIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default HeaderTwo;
