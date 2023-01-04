/* eslint-disable no-useless-escape */
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { JobPostingLayout } from "../layout/JobPostingLayout";

import jobPostingAPi from "../../api/jobPostingApi";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const validationSchema = yup.object({
  lastLaboralExperience: yup
    .string("Inresa tú ultima experiencia laboral")
    .max(300, "Máximo 300 caracteres")
    .required("Campo requerido"),
  curriculum: yup.mixed().required("Curriculum requerido"),
});

export const JobAplicant = () => {

  
  const [postulants, setPostulants] = useState([]);
  //parametro id url

  const { id: jobId } = useParams();

  useEffect(() => {
    getPostulants();
  }, []);

  const getPostulants = async () => {
    try {
      const { data } = await jobPostingAPi.get("/postulant");
      setPostulants(data.registros);
      console.log(data.registros);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitForm = async (values, actions) => {
    const formData = new FormData();
    const { lastLaboralExperience, curriculum, postulant } = values;

    formData.append("jobId", jobId);
    formData.append("postulantId", postulant);
    formData.append("experience", lastLaboralExperience);
    formData.append("curriculum", curriculum);

    try {
      const res = await jobPostingAPi.post("/postulation", formData);
      actions.resetForm();
    } catch (error) {
      console.log(error);
      const msg = error.response.data.errors[0].msg;

      Swal.fire("Error", msg, "error");
    }
  };

  const formik = useFormik({
    initialValues: {
      lastLaboralExperience: "",
      postulant: "",
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

    if (target.files[0].size > 5242880) {
      //TODO:Mandar alerta
      Swal.fire(
        "Error",
        "El archivo debe tener un tamaño máximo de 5 mb",
        "error"
      );
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
                  encType="multipart/form-data"
                  style={{ width: "40vw", display: "grid", gap: 20 }}
                >
                  <TextField
                    fullWidth
                    multiline
                    id="lastLaboralExperience"
                    name="lastLaboralExperience"
                    label="Última experiencia laboral"
                    value={values.lastLaboralExperience}
                    onChange={handleChange}
                    error={
                      touched.lastLaboralExperience &&
                      Boolean(errors.lastLaboralExperience)
                    }
                    helperText={
                      touched.lastLaboralExperience &&
                      errors.lastLaboralExperience
                    }
                  />

                  <FormControl
                    error={touched.postulant && Boolean(errors.postulant)}
                  >
                    <InputLabel id="postulant">Postulantes</InputLabel>
                    <Select
                      labelId="postulant"
                      name="postulant"
                      label="Lugar de Trabajo"
                      value={values.postulant}
                      onChange={handleChange}
                    >
                      {postulants.map((postulant) => (
                        <MenuItem key={postulant.id} value={postulant.id}>
                          {postulant.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>
                      {touched.postulant && errors.postulant}
                    </FormHelperText>
                  </FormControl>

                  <Grid item>
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
