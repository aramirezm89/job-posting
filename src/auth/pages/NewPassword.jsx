import {
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { useFormik } from "formik";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const validationSchema = yup.object({
  password: yup
    .string()
    .min(6, "La contraseña debe tener por lo menos 6 caracteres")
    .max(20, "La contraseña debe tener maximo 20 caracteres")
    .required("Campo Obligatorio"),
  password2: yup.string().required("Campo Obligatorio").oneOf([yup.ref('password'),null],'Las contraseñas deben ser iguales')
});
export const NewPassword = () => {

      const [showPassword, setShowPassword] = useState(false);
      const handleClickShowPassword = () => setShowPassword((show) => !show);

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };



     const onSubmit = (values, actions) => {
       console.log(values);

       
     };
     const formik = useFormik({
       initialValues: {
         password: "",
         password2: "",
       },
       validationSchema: validationSchema,
       onSubmit: onSubmit,
     });

     const {
       handleSubmit,
       handleChange,
       isSubmitting,
       values,
       errors,
       touched,
     } = formik;
  return (
    <AuthLayout>
      <Grid
        container
        spacing={2}
        sx={{ width: "100%" }}
        display="flex"
        justifyContent="space-between"
        alignContent="center"
      >
        <Grid item xs={12}>
          <Typography variant="h6" mb={2}>
            Actualiza tu contraseña
          </Typography>
          <Divider />

          <form onSubmit={handleSubmit}>
            {/* contraseña */}
            <Grid item xs={12} mb={2}>
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

            {/*  password2 */}
            <Grid item xs={12} mb={2}>
              <FormControl
                variant="outlined"
                error={touched.password2 && Boolean(errors.password2)}
                fullWidth
              >
                <InputLabel htmlFor="password2">Password 2</InputLabel>
                <OutlinedInput
                  id="password2"
                  name="password2"
                  value={values.password2}
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
                  label="password2"
                />
                <FormHelperText>
                  {touched.password2 && errors.password2}
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
              <Link className="link-button-cancel" to={`/login`}>
                Cancelar
              </Link>

              <Button type="submit" sx={{ ml: 1 }} variant="contained">
                Buscar
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
