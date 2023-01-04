import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export const SideBarMenuItems= ({menu}) => {
  
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
}
