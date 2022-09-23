import { createTheme } from "@mui/material/styles";

const maroon = "#A1012D";
const darkBlue = "#0D2456";
const white = "#ffffff";
const black = "#000000";

const theme = createTheme({
  palette: {
    primary: {
      main: maroon,
    },
    secondary: {
      main: darkBlue,
    },
    common: {
      white,
      black,
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontFamily: "Barlow Condensed",
      fontWeight: 600,
      color: white,
    },
    h2: {
      fontSize: "2.0rem",
      fontFamily: "Barlow Condensed",
      fontWeight: 500,
      color: black,
    },
    h3: {
      fontSize: "1.8rem",
      fontFamily: "Barlow Condensed",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontFamily: "Barlow Condensed",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "Oxygen",
      fontSize: "1.125rem",
      color: black,
    },
    body2: {
      fontFamily: "Oxygen",
      fontSize: "1rem",
      color: black,
    },
  },
  overrides: {},
});

export default theme;
