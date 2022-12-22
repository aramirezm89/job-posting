import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List, Toolbar,
    Typography
} from "@mui/material";

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
          <Typography variant="h6" noWrap component="div">
           titulo
          </Typography>
          <IconButton onClick={() => handdleDrawer()}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />

        <List sx={{ pt: 0 }}>
         
        </List>
      </Drawer>
    </Box>
  );
};
