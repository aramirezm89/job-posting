import {
  Button,
  Grid,
  Link,
  TextField
} from "@mui/material";
import { useFormik } from "formik";
import { Link as RouterLink } from "react-router-dom";
import * as yup from "yup";
import { GoogleSigIn } from "../components/GoogleSigIn";

import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
 

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

  const onSubmit = (values, actions) => {
  
    console.log(values)
    actions.resetForm();
  };

  const onGoogleSignIn = () => {
    
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
    <AuthLayout title="Login">
      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
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
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
          </Grid>

          <Grid container item spacing={1}>
           
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
              
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
         <GoogleSigIn/>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
        <Link color="inherit" component={RouterLink} to="/auth/register">
          Crear cuenta
        </Link>
      </Grid>
    </AuthLayout>
  );
};
