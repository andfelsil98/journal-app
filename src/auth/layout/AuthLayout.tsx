import { Typography, Grid } from "@mui/material"
import { ReactNode } from "react";
type AuthLayoutProps = { children: ReactNode, title: string };
export const AuthLayout = ({ children, title = '' }: AuthLayoutProps) => {
  return (
    <Grid 
    container 
    spacing={ 0 }
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >
      <Grid
        className='box-shadow'
        size={{ xs: 12 }}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, width: { sm: 450 } }}
      >
        <Typography
          variant="h5"
          sx={{ mb:1 }}
        >
          { title }
        </Typography>

        {/* Children */}
        { children }
      </Grid>
    </Grid>
    
  )
}
