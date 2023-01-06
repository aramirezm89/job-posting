import { Add, Home, LinkedIn, List, Person } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Box,
  Divider,
  Drawer,
  IconButton, Toolbar,
  Typography
} from "@mui/material";
import { useEffect, useLayoutEffect } from "react";
import { useAuthStore } from "../../hooks";
import { SideBarMenuItems } from "./SideBarMenuItems";


const menu = [
  { label: "Home", icon: <Home />, path: "/" },
  { label: "Linkedin", icon: <LinkedIn />, path: "/jobPosting" },
];


const jobMenu = [
  { label: "Tablero de empleos", icon: <List />, path: "/jobs" },
  { label: "Mis empleos creados", icon: <List />, path: "/recruiterJobs" },
  { label: "Crear empleo", icon: <Add />, path: "/createJob" },
];



const adminMenu = [
  { label: "Crear reclutador", icon: <Add />, path: "/createRecruiter" },
 
];

const userMenu = [
  { label: "Home", icon: <Home />, path: "/" },
  { label: "Mi cuenta", icon: <Person />, path: "/user" },
  { label: "Tablero de empleos", icon: <List />, path: "/jobs" },
];



export const Sidebar = ({ drawerWith = 240, openDrawer, handdleDrawer }) => {

  const {user} = useAuthStore();
  
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
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h6" noWrap component="div">
              Menu
            </Typography>
          </Box>
          <IconButton onClick={handdleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />

        {user.type === "postulant" ? (
          <>
            {/*user menu*/}


            <SideBarMenuItems menu={userMenu} />

          
          </>
        ) : (
          <>
            <SideBarMenuItems menu={menu} />

            <Divider />

            {/*   menuJob */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 16px",
              }}
            >
              <Typography variant="h6" noWrap component="div">
                Empleos
              </Typography>
            </Box>

            <Divider />

            <SideBarMenuItems menu={jobMenu} />
            <Divider />

            {/*admin menu*/}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 16px",
              }}
            >
              <Typography variant="h6" noWrap component="div">
                Administración
              </Typography>
            </Box>

            <Divider />

            <SideBarMenuItems menu={adminMenu} />
            <Divider />
          </>
        )}
      </Drawer>
    </Box>
  );
};




