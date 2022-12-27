import { Home, LinkedIn } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menu = [
  { label: "Home", icon: <Home />, path: "/" },
  { label: "Linkedin", icon: <LinkedIn />, path: "/" },
];

export const SideBarMenuItems = () => {
  const [selectedItem, setSelectedItem] = useState();

  const handleSelectItem = (index) => {
    setSelectedItem(index);
  };

  return (
    <List sx={{ pt: 0 }}>
      {menu.map((item, index) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton
            selected={index === selectedItem}
            onClick={() => handleSelectItem(index)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <NavLink
              style={{ textDecoration: "none", color: "grey" }}
              to={item.path}
            >
              {item.label}
            </NavLink>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
