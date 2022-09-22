import {
  Diversity1,
  Groups,
  Home,
  MedicalServices,
  ModeNight,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [place, setPlace] = ("Home")
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>

              <Link to={"/"} ><ListItemText primary="Homepage" /></Link>
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <Link to={"/groups"}><ListItemText primary="Groups" /></Link>
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <MedicalServices />
              </ListItemIcon>
              <Link to={"/service"}><ListItemText primary="Service" /></Link>

            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Diversity1 />
              </ListItemIcon>
              <Link to={"/association"}><ListItemText primary="Association" /></Link>

            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
