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
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import * as yup from "yup";
import { getJobTypes, getRecruiters } from "../../api/apiFunctions";
import jobPostingAPi from "../../api/jobPostingApi";
import { getCountriesSouthAmerica } from "../../api/restCountries/restCountries";
import { useAuthStore } from "../../hooks";

import { JobPostingLayout } from "../layout/JobPostingLayout";

const validationSchema = yup.object({
  position: yup
    .string("Cargo requerido")
    .required("Campo requerido")
    .max(80, "Máximo 80 caracteres"),
  description: yup
    .string()
    .required("Campo requerido")
    .max(300, "Máxim0 50 caracteres"),
  location: yup
    .string("")
    .max(80, "Máximo 80 caracteres")
    .required("Campo requerido"),
  recruiterId: yup.string().required("Campo requerido"),
  jobTypeId: yup.string().required("Campo requerido"),
});

export const CreateJob = () => {

  const [jobTypes, setJobTypes] = useState([]);
  const [countries, setCountries] = useState([]);
  const {user} = useAuthStore();
  useEffect(() => {
    getRecruiters().then(({ data }) => {
    
    });
    getJobTypes().then(({ data }) => {
      setJobTypes(data.registros);
      setJobTypes(data.registros);
    });
  }, []);

  const onSubmitForm = async (values, actions) => {
    try {
      await jobPostingAPi.post("/job", values);

      Swal.fire("Bien!!", "Registro creado con éxito", "success");
    } catch (error) {
      Swal.fire("Error", "Error al guardar el registro", "error");
    }
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      position: "",
      description: "",
      location: "",
      recruiterId: user.id,
      jobTypeId: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmitForm,
  });

  useEffect(() => {
    
    getCountriesSouthAmerica().then((countries) => {
      console.log(countries);
      setCountries(countries.data);
    });
  }, []);
  const { values, errors, handleChange, handleSubmit, touched, isSubmitting } =
    formik;

  return (
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
            Crear empleo
          </Typography>
          <hr />
        </Grid>

        <Card sx={{ width: { xs: "300px", md: "40vw" } }}>
          <CardContent>
            <Grid item>
              <form
                onSubmit={handleSubmit}
                style={{ width: "100%", display: "grid", gap: 20 }}
              >
                {/* position */}
                <TextField
                  fullWidth
                  id="position"
                  name="position"
                  label="Cargo"
                  placeholder="Junior developer Node JS"
                  value={values.position}
                  onChange={handleChange}
                  error={touched.position && Boolean(errors.position)}
                  helperText={touched.position && errors.position}
                />
                {/* description */}
                <TextField
                  fullWidth
                  multiline
                  id="description"
                  name="description"
                  label="Descripción del empleo"
                  value={values.description}
                  onChange={handleChange}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                />

                {/* location */}
                <FormControl
                  error={touched.location && Boolean(errors.location)}
                >
                  <InputLabel id="location">Ubicacion</InputLabel>
                  <Select
                    labelId="location"
                    name="location"
                    value={values.location}
                    onChange={handleChange}
                    label="location"
                  >
                    {countries.map(({ name, capital }) => (
                      <MenuItem
                        key={name.common}
                        value={`${name.common}, ${capital[0]}`}
                      >
                        {name.common}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    {touched.location && errors.location}
                  </FormHelperText>
                </FormControl>

                {/*   recruiterId */}
              {/*   <FormControl
                  error={touched.recruiterId && Boolean(errors.recruiterId)}
                >
                  <InputLabel id="recruiterId">Reclutador</InputLabel>
                  <Select
                    labelId="recruiterId"
                    name="recruiterId"
                    value={values.recruiterId}
                    onChange={handleChange}
                    label="Reclutador"
                  >
                    {recruiters.map((recruiter) => (
                      <MenuItem key={recruiter.id} value={recruiter.id}>
                        {recruiter.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    {touched.recruiterId && errors.recruiterId}
                  </FormHelperText>
                </FormControl>
 */}
                {/*jobTypeId*/}
                <FormControl
                  error={touched.jobTypeId && Boolean(errors.jobTypeId)}
                >
                  <InputLabel id="jobTypeId">Lugar de trabajo</InputLabel>
                  <Select
                    labelId="jobtypeId"
                    name="jobTypeId"
                    label="Lugar de Trabajo"
                    value={values.jobTypeId}
                    onChange={handleChange}
                  >
                    {jobTypes.map((jobType) => (
                      <MenuItem key={jobType.id} value={jobType.id}>
                        {jobType.type}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    {touched.jobTypeId && errors.jobTypeId}
                  </FormHelperText>
                </FormControl>
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
};
