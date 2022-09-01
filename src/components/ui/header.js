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
import logo from "../../images/logo-resize.png";
import { Link } from "gatsby";
import useMediaQuery from "@mui/material/useMediaQuery";

// icons
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";

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
    // width: "10%",
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
    padding: "10px 0",
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
  coloredIndicator: {
    color: "#A1012D",
  },
  listItemText: {
    color: "#A1012D",
  },
}));

// const desktopMenu = (
//   <Tabs
//     sx={{
//       //   marginRight: "auto",
//       marginLeft: "auto",
//     }}
//     value={activeIndex()}
//     classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
//   >
//     {routes.map((route) => (
//       <Tab
//         component={Link}
//         to={route.link}
//         label={route.name}
//         key={route.name}
//         sx={{
//           color: theme.palette.secondary.main,
//           ...theme.typography.body1,
//           textTransform: "capitalize",
//         }}
//       />
//     ))}
//   </Tabs>
// );

function IconSection(props) {
  return (
    <Grid container spacing={1} justifyContent="flex-start" alignItems="center">
      <Grid item>{props.children}</Grid>
      <Grid item>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  );
}

const activeIndex = () => {
  if (typeof window != "undefined") {
    const found = routes.indexOf(
      routes.filter(({ name, link }) => link === window.location.pathname)[0]
    );

    return found === -1 ? false : found;
  }
};

const HeaderTwo = () => {
  const classes = useStyles();

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
        {routes.map((text, index) => (
          <ListItem
            key={text.name}
            disablePadding
            selected={activeIndex() === index}
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

  const laptopSizeMatches = useMediaQuery((theme) =>
    theme.breakpoints.up("md")
  );
  return (
    // Add top bar here
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      ></Grid>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        classes={{ root: classes.topbarSection }}
        sx={{ backgroundColor: theme.palette.secondary.main }}
      >
        <Grid item md={9} xs={8}>
          <Grid
            container
            columnSpacing={{ md: 4, xs: 1 }}
            // justifyContent="flex-start"
            sx={{ paddingLeft: "30px" }}
            classes={{ root: classes.contactContainer }}
          >
            <Grid item>
              <IconSection text="555-555-555">
                <PhoneIcon sx={{ color: theme.palette.primary.main }} />
              </IconSection>
            </Grid>
            <Grid item>
              <IconSection text="mail@example.com">
                <EmailIcon sx={{ color: theme.palette.primary.main }} />
              </IconSection>
            </Grid>
            <Grid item>
              <IconSection text="24/7 everyday">
                <WatchLaterIcon sx={{ color: theme.palette.primary.main }} />
              </IconSection>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={3} xs={4}>
          <Grid
            container
            spacing={1}
            sx={{ paddingRight: "30px" }}
            classes={{ root: classes.socialContainer }}
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
                  //   marginRight: "auto",
                  marginLeft: "auto",
                }}
                value={activeIndex()}
                classes={{
                  indicator: classes.coloredIndicator,
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
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default HeaderTwo;
