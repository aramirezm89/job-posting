import { Box } from '@mui/system';
import React, { useState } from 'react'
import { NavBar,Sidebar } from '../components';


const drawerWith = 240;

export const JobPostingLayout = ({children}) => {
     const [open, setOpen] = useState(false);

     const handdleDrawer = (event) => {
   
         if (
           event.type === "keydown" &&
           (event.key === "Tab" || event.key === "Shift")
         ) {
           return;
         }
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
      <Box component="main" sx={{ flexGrow: 1, p: 1, mt:10,ml:2,mr:2,display:"flex" ,justifyContent:"center"}}>
        {children}
      </Box>
    </Box>
  );
}
