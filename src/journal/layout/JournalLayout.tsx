import { Box, Toolbar } from "@mui/material"
import { ReactNode } from "react";
import { NavBar, SideBar } from "../components";
type JournalLayoutProps = { children: ReactNode };

const drawerWidth = 240;
export const JournalLayout = ({ children }: JournalLayoutProps) => {
  return (
    <Box sx={{ display:'flex' }}>
      {/* Navbar */}
      <NavBar drawerWidth={ drawerWidth }/>
      {/* Sidebar */}
      <SideBar drawerWidth={ drawerWidth }/>
      <Box 
        component='main'
        sx={{ flexGrow: 1, p:3 }}
      >
        <Toolbar>

        </Toolbar>
        { children }
      </Box>
    </Box>
  )
}
