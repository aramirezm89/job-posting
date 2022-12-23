import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { handleBreakpoints } from "@mui/system";
import { useMemo } from "react";


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
      <Toolbar>
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          VARIACODE
        </Typography>
        <IconButton color="error">
          <LogoutOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
