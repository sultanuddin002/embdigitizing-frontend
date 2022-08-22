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
import theme from "./theme";
import { makeStyles } from "@mui/styles";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import logo from "../../images/logo-main.png";
import { ClassNames } from "@emotion/react";
import { Link } from "gatsby";

const pages = ["Home", "About", "Payment", "Portfolio", "Contact Us"];
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
  );
};
export default HeaderTwo;
