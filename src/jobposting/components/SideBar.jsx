import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Box,
  Divider,
  Drawer,
  IconButton, Toolbar,
  Typography
} from "@mui/material";
import { SideBarMenuItems } from "./SideBarMenuItems";

export const Sidebar = ({ drawerWith = 240, openDrawer, handdleDrawer }) => {
 
  return (
    <Box component="nav" sx={{ flexShrink: { sm: 0 } }}>
      <Drawer
        open={openDrawer}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWith },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          <Box  display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h6" noWrap component="div">
              Menu
            </Typography>
           
          </Box>
          <IconButton onClick={handdleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />

        <SideBarMenuItems/>
      </Drawer>
    </Box>
  );
};
