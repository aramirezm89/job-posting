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
import * as yup from "yup";
import jobPostingAPi from "../../api/jobPostingApi";
import { JobPostingLayout } from "../../jobposting/layout/JobPostingLayout";

const validationSchema = yup.object({
  name: yup
    .string()
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
    )
    .required("Campo requerido")
    .max(50, "Máxim0 50 caracteres"),
  email: yup
    .string()
    .email("Ingresa un email valido")
    .required("El email es requerido")
    .max(50, "Máxim0 50 caracteres"),
  role: yup.string().required("Campo requerido"),
});



export const CreateRecruiter = () => {

  const roles = [
    { id: 1, name: "administrador" },
    { id: 2, name: "reclutador" },
    { id: 3, name: "usuario" }
  ];
  const onSubmitForm = async (values, actions) => {
    console.log(values);

    try {
      const res = await jobPostingAPi.post('/recruiter',values);
      console.log(res);
    } catch (error) {
      console.log(error);

    }
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmitForm,
  });

  const { values, errors, handleChange, handleSubmit, touched, isSubmitting } =
    formik;

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
            <Typography variant="h5">Crear reclutador</Typography>
            <hr />
          </Grid>

          <Card sx={{ width: { xs: "300px", md: "40vw" } }}>
            <CardContent>
              <Grid item>
                <form
                  onSubmit={handleSubmit}
                  style={{ width: "100%", display: "grid", gap: 20 }}
                >
                  {/* name */}
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Nombre"
                    placeholder="Nombre del reclutador"
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

                  {/*role*/}

                  <FormControl
                    error={touched.role && Boolean(errors.role)}
                  >
                    <InputLabel id="role">Rol</InputLabel>
                    <Select
                      labelId="role"
                      name="role"
                      value={values.role}
                      onChange={handleChange}
                      label="Rol"
                    >
                    {roles.map(rol => (
                      <MenuItem key={rol.id} value={rol.id} >{rol.name}</MenuItem>
                    ))}
                    </Select>
                    <FormHelperText>
                      {touched.recruiterId && errors.recruiterId}
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
    </>
  );
};
