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
      fontSize: "1.87rem",
      fontFamily: "Roboto",
      fontWeight: 600,
      color: white,
    },
    h2: {
      fontSize: "1.56rem",
      fontFamily: "Roboto",
      fontWeight: 500,
      color: black,
    },
    h3: {
      fontSize: "1.25rem",
      fontFamily: "Roboto",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.125rem",
      fontFamily: "Roboto",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "Roboto",
      fontSize: "1.125rem",
      color: black,
    },
    body2: {
      fontFamily: "Roboto",
      fontSize: "1rem",
      color: black,
    },
  },
  overrides: {},
});

export default theme;
