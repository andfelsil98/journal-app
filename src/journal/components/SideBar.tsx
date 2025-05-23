import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

type SideBarProps = { drawerWidth: number };

export const SideBar = ({ drawerWidth = 240 }: SideBarProps) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm:0 }}}
    >
      <Drawer
        variant="permanent"
        open={ true }
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing:'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component='div'>
            Andres Silva
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo'].map( month => 
              <ListItem
                key={ month }
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={ month }/>
                    <ListItemText secondary={ 'Sint ipsum fugiat enim exercitation elit Lorem est nisi ut do adipisicing anim tempor do.' } />
                  </Grid>
                </ListItemButton>
              </ListItem>
            )
          }
        </List>
      </Drawer>
    </Box>
  )
}
