/* eslint-disable no-useless-escape */
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import jobPostingAPi from "../../api/jobPostingApi";


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
});
export const RegisterPage = () => {

  const onSubmitForm = async (values,actions) =>{
    console.log(values)

    try {
    const res = await  jobPostingAPi.post('/postulant',values)
    console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname:"",
      email: "",
      phone: "",
      roleId: "610f513a",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmitForm,
  });

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    touched,
    isSubmitting,
  } = formik;

  return (
    <>
      <Grid
        container
        sx={{ minHeight: "75vh" }}
        display="grid"
        justifyContent="center"
        alignContent="center"
      >
        <Grid item sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            className="animate__animated
                animate__lightSpeedInLeft"
          >
            Formulario de solicitud de trabajo
          </Typography>
          <hr />
        </Grid>

        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Grid item>
              <form
                onSubmit={handleSubmit}
                style={{ width: "40vw", display: "grid", gap: 20 }}
              >
                {/*    name */}
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

                {/* lastName */}
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

                {/* email */}
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
                {/* phone */}
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

                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={isSubmitting}
                >
                  Guardar
                </Button>
              </form>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
