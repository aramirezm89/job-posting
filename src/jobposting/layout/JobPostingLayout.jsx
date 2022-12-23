import { Box } from '@mui/system';
import React, { useState } from 'react'
import { NavBar } from '../components/NavBar';
import { Sidebar } from '../components/SideBar';

const drawerWith = 240;

export const JobPostingLayout = ({children}) => {
     const [open, setOpen] = useState(false);

     const handdleDrawer = () => {
       setOpen(!open);
     };

  return (
    <Box
      className="animate__animated animate__fadeIn animate__faster"
      sx={{ display: "flex" }}
    >
      {/*navbar*/}
      <NavBar drawerWith={drawerWith} handdleDrawer={handdleDrawer} />
      {/*sidebar*/}

      <Sidebar
        drawerWith={drawerWith}
        openDrawer={open}
        handdleDrawer={handdleDrawer}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 1, m:10 }}>
        {children}
      </Box>
    </Box>
  );
}
