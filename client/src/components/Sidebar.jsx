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

export default function Sidebar() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <MedicalServices />
              </ListItemIcon>
              <ListItemText primary="Service" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Diversity1 />
              </ListItemIcon>
              <ListItemText primary="Association" />
            </ListItemButton>
          </ListItem>
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
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
