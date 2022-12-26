import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useMemo } from "react";
import logo from "../../assets/variacode_ch_fn_rgb.webp"

export const NavBar = ({ drawerWith = 240, handdleDrawer }) => {

  const stado = useMemo(() => handdleDrawer, [handdleDrawer]);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: stado === true ? `calc(100% - ${drawerWith}px)` : "100%",
        ml: { sm: `${drawerWith}px` },
      }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{display:'flex'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handdleDrawer()}
          >
            <MenuOutlined />
          </IconButton>
          <img alt="variacode" src={logo} style={{ width: "5rem" }} />
        </Box>
        <Box>
          <IconButton style={{ color: "white" }}>
            <LogoutOutlined />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
