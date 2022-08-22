import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Typograghy from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "gatsby";

const routes = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Payment",
  },
  {
    name: "Portfolio",
  },
  {
    name: "Contact Us",
  },
];

const tabs = (
  <Tabs>
    {routes.map((route) => (
      <Tab label={route.name} key={route.name} />
    ))}
  </Tabs>
);

export default function Header() {
  <AppBar>
    <ToolBar>
      <Button>
        <Typograghy variant="h1">EMB Digitizing</Typograghy>
      </Button>
      {tabs}
    </ToolBar>
  </AppBar>;
}
