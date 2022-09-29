import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import theme from "./theme";
import { makeStyles } from "@mui/styles";
import logo from "../../images/logo-increase-2.png";
import { Link } from "gatsby";
import useMediaQuery from "@mui/material/useMediaQuery";
import Popover from "@mui/material/Popover";
import Divider from "@mui/material/Divider";
import IconSection from "./IconSection";

// icons
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";

// images
import skype from "../../images/skype.svg";

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
    name: "Services",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },

  {
    name: "Contact Us",
    link: "/contact",
  },
];

const routesMobile = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Embroidery",
    link: "/embrodiery",
  },
  {
    name: "Custom  Patches",
    link: "/patches",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },

  {
    name: "Contact Us",
    link: "/contact",
  },
];

const serviceRoutes = [
  {
    name: "Embroidery",
    link: "/embrodiery",
  },
  {
    name: "Custom Patches",
    link: "/patches",
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const useStyles = makeStyles((theme) => ({
  logo: {
    // width: "100%",
  },
  socialContainer: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  topbarSection: {
    padding: "10px 10px",
    [theme.breakpoints.up("md")]: {
      padding: "10px 10px",
    },
  },
  contactContainer: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: "50px",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      direction: "column",
      spacing: 1,
      // paddingLeft: "20px",
    },
  },
  coloredIndicator: {
    color: "#A1012D",
  },
  listItemText: {
    color: "#A1012D",
  },
}));

const activeIndex = () => {
  if (typeof window != "undefined") {
    const found = routes.indexOf(
      routes.filter(({ name, link }) => link === window.location.pathname)[0]
    );

    return found === -1 ? false : found;
  }
};

const activeIndexMobile = () => {
  if (typeof window != "undefined") {
    const found = routesMobile.indexOf(
      routesMobile.filter(
        ({ name, link }) => link === window.location.pathname
      )[0]
    );

    return found === -1 ? false : found;
  }
};

const activeIndexServices = () => {
  if (typeof window != "undefined") {
    const found = serviceRoutes.indexOf(
      serviceRoutes.filter(
        ({ name, link }) => link === window.location.pathname
      )[0]
    );

    return found === -1 ? false : found;
  }
};

const HeaderTwo = () => {
  const classes = useStyles();

  // Popover for sub menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log("Service button clicked");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // Additional services component
  const otherServices = (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Tabs
        orientation="vertical"
        sx={{
          //   marginRight: "auto",
          marginLeft: "auto",
        }}
        value={activeIndexServices()}
        classes={{
          indicator: classes.coloredIndicator,
        }}
      >
        {serviceRoutes.map((singleService) => (
          <Box>
            <Tab
              component={Link}
              to={singleService.link}
              label={singleService.name}
              key={singleService.name}
              sx={{
                color: theme.palette.secondary.main,
                ...theme.typography.body1,
                textTransform: "capitalize",
                alignItems: "flex-start",
                opacity: 1,
              }}
            />
            <Divider />
          </Box>
        ))}
      </Tabs>
    </Popover>
  );

  // selector for menu

  // Drawer element here
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{ width: 250 }}
    >
      <List>
        {routesMobile.map((text, index) => (
          <ListItem
            key={text.name}
            disablePadding
            selected={activeIndexMobile() === index}
            divider
          >
            <ListItemButton component={Link} to={text.link}>
              <ListItemText
                primary={text.name}
                classes={{ primary: classes.listItemText }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // min-width(0px) and (max-width:599px) : for mobiles

  // min-width(600px) and (max-width:899px) : for tablet
  const mobileSizeMatches = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );

  // const tabletSizeMatches = useMediaQuery((theme) =>
  //   theme.breakpoints.between("sm", "md")
  // );

  // const laptopSizeMatches = useMediaQuery((theme) =>
  //   theme.breakpoints.up("md")
  // );

  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  return (
    // Add top bar here
    <>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        classes={{ root: classes.topbarSection }}
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Grid item md={5} xs={12}>
          <Grid
            container
            columnSpacing={{ md: 2, xs: 1 }}
            // justifyContent="flex-start"
            // sx={{ paddingLeft: "80px" }}
            classes={{ root: classes.contactContainer }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#fff",
                textAlign: "center",
                padding: matchesSM ? "10px 0" : "0",
              }}
            >
              To giving embroidery services with a one click to everyone.
            </Typography>
          </Grid>
        </Grid>

        <Grid item md={5} xs={12}>
          <Grid
            container
            direction="row"
            columnSpacing={{ md: 1, xs: 1 }}
            sx={{ padding: matchesSM ? "10px 0" : 0 }}
            classes={{ root: classes.contactContainer }}
          >
            <Grid item>
              <IconSection text="+1(234)-567-890">
                <PhoneIcon sx={{ color: theme.palette.common.white }} />
              </IconSection>
            </Grid>
            <Grid item>
              <IconSection
                component="a"
                href="mailto:embdigitized22@gmail.com"
                text="embdigitized22@gmail.com"
              >
                <EmailIcon sx={{ color: theme.palette.common.white }} />
              </IconSection>
            </Grid>
            <Grid item>
              <IconSection text="24/7 support">
                <WatchLaterIcon sx={{ color: theme.palette.common.white }} />
              </IconSection>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={2} xs={12}>
          <Grid
            container
            direction="row"
            columnSpacing={{ md: 1, xs: 1 }}
            sx={{ paddingLeft: "30px", padding: matchesSM ? "10px 0" : "0" }}
            classes={{ root: classes.contactContainer }}
          >
            <Grid item>
              {/* <TwitterIcon sx={{ color: theme.palette.common.white }} /> */}
              <a
                href="https://join.skype.com/invite/yfzh43Pc6DsO"
                target="_blank"
              >
                <img
                  src={skype}
                  alt="skype icon"
                  style={{
                    width: "23px",
                    filter:
                      "invert(100%) sepia(0%) saturate(7500%) hue-rotate(155deg) brightness(104%) contrast(107%)",
                  }}
                />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://www.facebook.com/profile.php?id=100085852315006"
                target="_blank"
              >
                <FacebookIcon sx={{ color: theme.palette.common.white }} />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.instagram.com/embdigitized" target="_blank">
                <InstagramIcon sx={{ color: theme.palette.common.white }} />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://www.linkedin.com/in/embdigitized"
                target="_blank"
              >
                <LinkedInIcon sx={{ color: theme.palette.common.white }} />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Top bar ends here */}
      <AppBar
        sx={{
          background:
            "linear-gradient(255deg, rgba(255,255,255,1) 74%, rgba(189,196,201,1) 100%)",
        }}
        position="static"
      >
        <Container
          maxWidth="xl"
          sx={{ padding: matchesSM ? "0" : "0px 70px!important" }}
        >
          <Toolbar disableGutters>
            <Box component={Link} to="/">
              <img src={logo} alt="logo" className={classes.logo} />
            </Box>
            {mobileSizeMatches ? (
              <IconButton sx={{ marginLeft: "auto" }}>
                <MenuIcon
                  sx={{
                    color: "#000",
                    fontSize: "40px",
                  }}
                  onClick={toggleDrawer("left", true)}
                />
                <Drawer
                  anchor="left"
                  open={state["left"]}
                  onClose={toggleDrawer("left", false)}
                >
                  {list("left")}
                </Drawer>
              </IconButton>
            ) : (
              <Tabs
                sx={{
                  marginLeft: "auto",
                }}
                value={activeIndex()}
                classes={{
                  indicator: classes.coloredIndicator,
                }}
              >
                {routes.map((route) => (
                  <Tab
                    component={route.name === "Services" ? undefined : Link}
                    to={route.name === "Services" ? undefined : route.link}
                    label={route.name}
                    key={route.name}
                    onClick={
                      route.name === "Services" ? handleClick : undefined
                    }
                    aria-describedby={
                      route.name === "Services" ? id : undefined
                    }
                    sx={{
                      color: theme.palette.secondary.main,
                      ...theme.typography.body1,
                      textTransform: "capitalize",
                    }}
                  />
                ))}
                {otherServices}
              </Tabs>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default HeaderTwo;
