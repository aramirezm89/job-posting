/* eslint-disable no-useless-escape */
import {
  Button, Grid, Link, TextField,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import * as yup from "yup";
import jobPostingAPi from "../../api/jobPostingApi";
import { alertError, alertSuccess } from "../../helpers/alertHandler";
import { AuthLayout } from "../layout/AuthLayout";

const validationSchema = yup.object({
  name: yup
    .string("Ingresa tu nombre completo")
    .required("Campo requerido")
    .matches(
      /^[^$%&|<>#*!¿?¡]*$/,
      "Nombre no puede contener caracteres especiales ($%&|<>#*)"
    )
    .max(50, "Máximo 50 caracteres"),
  lastname: yup
    .string()
    .matches(
      /^[^$%&|<>#*!¿?¡]*$/,
      "Nombre no puede contener caracteres especiales ($%&|<>#*)"
    ),
  email: yup
    .string()
    .email("Ingresa un email valido")
    .required("El email es requerido")
    .max(50, "Máxim0 50 caracteres"),
  phone: yup
    .string("Ingresa tú numero de telefonico")
    .required("Campo requerido")
    .matches(/^\+5[0-9]\d{9}$/, "Número telefonico no valido"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener por lo menos 6 caracteres")
    .max(20, "La contraseña debe tener maximo 20 caracteres")
    .required("Campo Obligatorio"),
});
export const RegisterPage = () => {
  const onSubmitForm = async (values, actions) => {
   
    try {
      const res = await jobPostingAPi.post("/postulant", values);
      if(res.status === 201 || 200){
        alertSuccess('Cuenta creada con éxito')
      }
    } catch (error) {
      console.log(error);
      alertError('Error al realizar la acción')
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      password:"",
      lastname: "",
      email: "",
      phone: "",
      roleId: "610f513a",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmitForm,
  });

  const { values, errors, handleChange, handleSubmit, touched, isSubmitting } =
    formik;

  return (
    <>
      <AuthLayout>
        <form
          className="animate__animated animate__fadeIn animate__faster"
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">Crear cuenta</Typography>
            </Grid>
            {/*    name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Nombre"
                placeholder="Ej: Daniel Araya Norambuena"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
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

            {/* lastName */}

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                id="lastname"
                name="lastname"
                label="Apellidos"
                value={values.lastname}
                onChange={handleChange}
                error={touched.lastname && Boolean(errors.lastname)}
                helperText={touched.lastname && errors.lastname}
              />
            </Grid>
            {/* email */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                placeholder="Ej: abcd@gmail.com"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Grid>

            {/* phone */}

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="phone"
                name="phone"
                label="Teléfono"
                placeholder="Ej:+56912345678"
                value={values.phone}
                onChange={handleChange}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                disabled={isSubmitting}
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
          <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
          <Link color="inherit" component={RouterLink} to="/login">
            Login
          </Link>
        </Grid>
      </AuthLayout>
    </>
  );
};
