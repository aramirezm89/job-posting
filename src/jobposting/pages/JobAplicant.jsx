/* eslint-disable no-useless-escape */
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { JobPostingLayout } from "../layout/JobPostingLayout";


import jobPostingAPi from "../../api/jobPostingApi";
import Swal from "sweetalert2";

const validationSchema = yup.object({
  name: yup
    .string("Ingresa tu nombre completo")
    .required("Campo requerido")
    .matches(
      /^[^$%&|<>#*!¿?¡]*$/,
      "Nombre no puede contener caracteres especiales ($%&|<>#*)"
    )
    .max(50, "Máximo 50 caracteres"),
  email: yup
    .string()
    .email("Ingresa un email valido")
    .required("El email es requerido")
    .max(50, "Máxim0 50 caracteres"),
  phone: yup
    .string("Ingresa tú numero de telefonico")
    .required("Campo requerido")
    .matches(/^\+5[0-9]\d{9}$/, "Número telefonico no valido"),
  lastLaboralExperience: yup
    .string("Inresa tú ultima experiencia laboral")
    .max(300, "Máximo 300 caracteres")
    .required("Campo requerido"),
  curriculum: yup.mixed().required("Curriculum requerido"),
});

export const JobAplicant = () => {

  const onSubmitForm = async (values, actions) => {

    const formData = new FormData();
    const { name, email, phone, lastLaboralExperience, curriculum } = values;
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("lastLaboralExperience", lastLaboralExperience);
    formData.append("curriculum", curriculum);

   
    try {
       const res = await jobPostingAPi.post("/applicant",formData);
          console.log(res);
           actions.resetForm();
    } catch (error) {

       const msg = error.response.data.errors[0].msg;

       Swal.fire('Error',msg,"error")
    }

   
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      lastLaboralExperience: "",
      curriculum: null,
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
    setFieldValue,
  } = formik;

  const handleFileInput = (event) => {
    const { target } = event;


   if (target.files[0].size > 5242880){
     //TODO:Mandar alerta
     Swal.fire("Error", "El archivo debe tener un tamaño máximo de 5 mb", "error");
   }
     if (target.files[0].type !== "application/pdf") {
       //TODO:Mandar alerta
       Swal.fire(
         "Error",
         "Solo se permite formato pdf para curriculum",
         "error"
       );
       return;
     }

    handleChange(event);
    setFieldValue("curriculum", target.files[0]);
  };
  return (
    <>
      <JobPostingLayout>
        <Grid
          container
          sx={{minHeight:'75vh'}}
          display="grid"
          justifyContent="center"
          alignContent="center"
        >
          <Grid item sx={{ mb: 3 }}>
            <Typography variant="h5">
              Formulario de solicitud de trabajo
            </Typography>
            <hr />
          </Grid>

          <Card sx={{width:"100%"}}>
            <CardContent>
              <Grid item>
                <form
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  style={{ width:'40vw' ,display:"grid",gap:20 }}
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

                  <TextField
                    fullWidth
                    multiline
                    id="lastLaboralExperience"
                    name="lastLaboralExperience"
                    label="Última experiencia laboral"
                    value={values.lastLaboralExperience}
                    onChange={handleChange}
                    error={
                      touched.lastLaboralExperience && Boolean(errors.lastLaboralExperience)
                    }
                    helperText={
                      touched.lastLaboralExperience &&
                      errors.lastLaboralExperience
                    }
                  />

                  <Grid item >
                    <input
                      id="curriculum"
                      name="curriculum"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileInput}
                      style={{ marginBottom: "12px" }}
                    />
                    {touched.phone && Boolean(errors.lastLaboralExperience) && (
                      <Box>
                        <small
                          style={{
                            color: "#ff1744",
                            fontSize: "12px",
                            margin: "0px 14px  ",
                          }}
                        >
                          {touched.curriculum && errors.curriculum}
                        </small>
                      </Box>
                    )}
                  </Grid>

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
    </>
  );
};
