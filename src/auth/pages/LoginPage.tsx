import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'
export const LoginPage = () => {

  const { email, password, onInputChange } = useForm({
    email: 'felipe@hotmail.com',
    password: '123456'
  })

  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(checkingAuthentication(email, password));
    console.log('email password', {email, password});
  }

  const onGoogleSignIn = () => {
    console.log('ongoogle');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid 
            size={{ xs: 12, md: 6 }}
            sx={{ mt:2 }}
          >
            <TextField 
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
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
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>


          <Grid 
            container
            spacing={ 2 }
            sx={{ mb:2, mt: 1, width: "100%" }}
          >
            <Grid size={{ xs:12, sm: 6 }}>
              <Button 
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>

            <Grid size={{ xs:12, sm: 6 }}>
              <Button 
                variant="contained"
                fullWidth
                onClick={ onGoogleSignIn }
              >
                <Google/>
                <Typography sx={{ ml: 1 }}>
                  Google
                </Typography>
              </Button>
            </Grid>
          </Grid>


          <Grid 
            container
            direction="row"
            justifyContent="end"
            sx={{ width: "100%" }}
          >
            <Link component={ RouterLink } color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
