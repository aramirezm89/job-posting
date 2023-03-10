import { Logout, Person } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../hooks";

export default function MenuButtonOptions() {

  const { startLogoutGoogle } = useAuthStore();

  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirectLogin = () =>{
    navigate('/login')
  }

  const onLogout = () => {
    startLogoutGoogle();
  };

  return (
    <div>
      <IconButton
        sx={{ color: "white" }}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Person sx={{ scale: "1.5" }} />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={redirectLogin}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "120px",
          }}
        >
          <Person />
          Login
        </MenuItem>

        <MenuItem
          onClick={onLogout}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "120px",
          }}
        >
          <Logout/>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
