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
import { JobPostingLayout } from "../layout/JobPostingLayout";

import * as yup from "yup";
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
  const onSubmitForm = async (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      position: "",
      description: "",
      location: "",
      recruiterId: "",
      jobTypeId: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmitForm,
  });

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
          <Typography variant="h5">Crear empleo</Typography>
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
                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="Ubicacion"
                  placeholder="Santiago, Chile"
                  value={values.location}
                  onChange={handleChange}
                  error={touched.location && Boolean(errors.location)}
                  helperText={touched.location && errors.location}
                />

                {/*   recruiterId */}
                <FormControl
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
                    <MenuItem value={100}>Fabiola Quijada</MenuItem>
                    <MenuItem value={200}>Rafael Rodriguez</MenuItem>
                    <MenuItem value={300}>Armando Casas</MenuItem>
                  </Select>
                  <FormHelperText>
                    {touched.recruiterId && errors.recruiterId}
                  </FormHelperText>
                </FormControl>

                {/*jobTypeId*/}
                <FormControl
                  error={touched.jobTypeId && Boolean(errors.jobTypeId)}
                >
                  <InputLabel id="jobTypeId">Lugar de trabajo</InputLabel>
                  <Select
                    labelId="jobTypeId"
                    name="jobTypeId"
                    label="Lugar de Trabajo"
                    value={values.jobTypeId}
                    onChange={handleChange}
                  >
                    <MenuItem value={100}>Remoto</MenuItem>
                    <MenuItem value={200}>Semi presencial</MenuItem>
                    <MenuItem value={300}>Presencial</MenuItem>
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
