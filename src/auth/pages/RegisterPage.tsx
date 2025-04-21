import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <form action="">
        <Grid container>

        <Grid 
            size={{ xs: 12, md: 6 }}
            sx={{ mt:2 }}
          >
            <TextField 
              label="Nombre Completo"
              type="text"
              placeholder="Jhon Doe"
              fullWidth
            />
          </Grid>


          <Grid 
            size={{ xs: 12, md: 6 }}
            sx={{ mt:2 }}
          >
            <TextField 
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>


          <Grid 
            size={{ xs: 12, md:6 }}
            sx={{ mt:2 }}
          >
            <TextField 
              label="Contrasena"
              type="password"
              placeholder="contrasena"
              fullWidth
            />
          </Grid>


          <Grid 
            container
            spacing={ 2 }
            sx={{ mb:2, mt: 1, width: '100%' }}
          >
            <Grid size={{ xs:12 }}>
              <Button 
                variant="contained"
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>


          <Grid 
            sx={{ width: '100%' }}
            container
            direction="row"
            justifyContent="end"
          >
            <Typography sx={{ mr: 1 }}>
              Ya tienes una cuenta?
            </Typography>
            <Link component={ RouterLink } color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
