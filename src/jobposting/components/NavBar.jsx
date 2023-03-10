import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useMemo } from "react";
import logo from "../../assets/variacode_ch_fn_rgb.webp";
import { useAuthStore } from "../../hooks";
import MenuButtonOptions from "./MenuButtonOptions";

export const NavBar = ({ drawerWith = 240, handdleDrawer }) => {

  const {status, user} = useAuthStore();
  
  const state = useMemo(() => handdleDrawer, [handdleDrawer]);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: state === true ? `calc(100% - ${drawerWith}px)` : "100%",
        ml: { sm: `${drawerWith}px` },
      }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          {status === "authenticated" && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={(e) => handdleDrawer(e)}
            >
              <MenuOutlined />
            </IconButton>
          )}
          <img alt="variacode" src={logo} style={{ width: "5rem" }} />
        </Box>
        <Box>
           <Typography variant="p">
              {user.postulant}
           </Typography>
        </Box>
        <Box>
          <MenuButtonOptions />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
