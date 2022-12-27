import { Add, BusinessCenter } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menu = [
  
  { label: "Crear empleo", icon: <Add />, path: "/createJob" },
  {
    label: "Postular a un empleo",
    icon: <BusinessCenter />,
    path: "/jobApplicant",
  },
];

export const SidebarJobMenuItems = () => {
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
