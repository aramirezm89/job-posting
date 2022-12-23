/* eslint-disable no-useless-escape */
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { JobPostingLayout } from "../layout/JobPostingLayout";


const validationSchema = yup.object({
  name: yup
    .string("Ingresa tu nombre completo")
    .required("El nombre es requerido"),
  email: yup
    .string("Ingresa tu nombre completo")
    .email("Ingresa un email valido")
    .required("El nombre es requerido"),
  phone: yup
    .string("Ingresa tú numero de telefonico")
    .required("El teléfono es requerido")
    .matches(
      /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}$/
    ,"error"),
  lastLaboralExperience: yup.string("Inresa tú ultima experiencia laboral").required("La última experiencia laboral es requerida"),
  curriculum:yup.mixed().required('Curriculum requerido')
});
export const JobAplicant = () => {

 
    
    const onSubmitForm = (values,actions) =>{
      
        console.log(values)

        actions.resetForm();
    }

  
    const formik = useFormik({
        
        initialValues:{
            name:'',
            email:'',
            phone:'',
            lastLaboralExperience:'',
            curriculum : null
        },
        validationSchema:validationSchema,
        onSubmit:onSubmitForm

    })

    const {values,errors,handleChange,handleSubmit,touched,setErrors,isSubmitting} = formik;

      const handleFileInput = (event) => {
        const {target} = event;

        if (target.files[0].type !== "application/pdf") {
          setErrors({curriculum:'dfadfad'})
        }

        handleChange(event);
       
      };
  return (
    <>
      <JobPostingLayout>
        <Grid
          container
          sx={{ minHeight: "75vh" }}
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

          <Grid item>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                sx={{ mb: 2 }}
                id="name"
                name="name"
                label="Nombre"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.email && errors.email}
              />

              <TextField
                fullWidth
                sx={{ mb: 2 }}
                id="email"
                name="email"
                label="email"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                fullWidth
                sx={{ mb: 2 }}
                id="phone"
                name="phone"
                label="Teléfono"
                value={values.phone}
                onChange={handleChange}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />

              <TextField
                fullWidth
                sx={{ mb: 2 }}
                id="lastLaboralExperience"
                name="lastLaboralExperience"
                label="Última experiencia laboral"
                value={values.lastLaboralExperience}
                onChange={handleChange}
                error={touched.phone && Boolean(errors.lastLaboralExperience)}
                helperText={
                  touched.lastLaboralExperience && errors.lastLaboralExperience
                }
              />

              <Grid item sx={{ mb: 2 }}>
                <input
                  id="curriculum"
                  name="curriculum"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileInput}
                  style={{ marginBottom: "12px" }}
                />
                {
                   (touched.phone && Boolean(errors.lastLaboralExperience)) &&
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
                 
                }
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
        </Grid>
      </JobPostingLayout>
    </>
  );
};
