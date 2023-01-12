import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import * as yup from "yup";
import { useAuthStore } from "../../hooks/useAuthStore";


import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
 
  const { status, startLoginUser } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const isAuthenticating = useMemo(() => status === 'checking',[status])

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Debés ingresar un email valido")
      .required("Campo obligatorio"),
    password: yup
      .string()
      .min(6, "La contraseña debe tener por lo menos 6 caracteres")
      .max(20, "La contraseña debe tener maximo 20 caracteres")
      .required("Campo Obligatorio"),
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (values, actions) => {
  
   startLoginUser(values)
    actions.resetForm();
  };


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const { handleSubmit, handleChange, isSubmitting, values, errors, touched } =
    formik;
  return (
    <AuthLayout>
      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Login</Typography>
          </Grid>
          {/* correo */}
          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="text"
              id="email"
              name="email"
              placeholder="correo@google.com "
              fullWidth
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Grid>
          {/* contraseña */}
          <Grid item xs={12}>
    
            <FormControl
              variant="outlined"
              error={touched.password && Boolean(errors.password)}
              fullWidth
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                name="password"
                value={values.password}
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="password"
              />
              <FormHelperText>
                {touched.password && errors.password}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid container item spacing={1}>
            <Grid item xs={12}>
              <Button
                type="submit"
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>

            {/*  googleAuthComponent */}
            {/* <Grid item xs={12} >
              <GoogleSigIn />
            </Grid> */}
          </Grid>
        </Grid>
      </form>
      <Grid container direction="row" justifyContent="end" sx={{ mt: 1}}>
        <Link mr={2} color="inherit" component={RouterLink} to="/register">
          Crear cuenta
        </Link>
        <Link  color="inherit" component={RouterLink} to="/recoverPassword">
          ¿Olvidaste tu contraseña?
        </Link>
      </Grid>
    </AuthLayout>
  );
};
