import { Button, Card, CardContent, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { JobPostingLayout } from "../layout/JobPostingLayout"

import * as yup from "yup";
import Swal from "sweetalert2";
import jobPostingAPi from "../../api/jobPostingApi";
import { Box } from "@mui/system";
const validationSchema = yup.object({
  name: yup
    .string("Ingresa tu nombre completo")
    .required("Campo requerido")
    .max(100, "Máximo 50 caracteres"),
  email: yup
    .string()
    .email("Ingresa un email valido")
    .required("El email es requerido")
    .max(50, "Máxim0 50 caracteres"),
  phone: yup
    .string("Ingresa tú numero de telefonico")
    .required("Campo requerido")
    .matches(/^\+5[0-9]\d{9}$/, "Número telefonico no valido")
 
});

export const CreateJob = () => {

    const onSubmitForm = async (values, actions) => {
     
    console.log(values)
      actions.resetForm();
    };

    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
       age:0
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
    <JobPostingLayout>
      <Grid
        container
        sx={{ width: { xs: "300px", md: "850px" } }}
        display="grid"
        justifyContent="center"
        alignContent="center"
      >
        <Grid item sx={{ mb: 3 }}>
          <Typography variant="h5">Crear empleo</Typography>
          <hr />
        </Grid>

        <Card sx={{ width: { xs: "300px", md: "40vw" } }}>
          <CardContent>
            <Grid item>
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                style={{ width: "100%", display: "grid", gap: 20 }}
              >
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

                <Select
                  labelId="demo-simple-select-label"
                  name="age"
                  id="demo-simple-select"
                  value={values.age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={0} >Selecciona un valor</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>

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
    </JobPostingLayout>
  );
}
