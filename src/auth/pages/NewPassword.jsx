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
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { useFormik } from "formik";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { updatePassword } from "../../api/apiFunctions/auth";
import { alertError, alertSuccess } from "../../helpers/alertHandler";

const validationSchema = yup.object({
  pass: yup
    .string()
    .min(6, "La contraseña debe tener por lo menos 6 caracteres")
    .max(20, "La contraseña debe tener maximo 20 caracteres")
    .required("Campo Obligatorio"),
  duplicatePass: yup
    .string()
    .required("Campo Obligatorio")
    .oneOf([yup.ref("pass"), null], "Las contraseñas deben ser iguales"),
});
export const NewPassword = () => {

    const {token} = useParams();
    const navigate = useNavigate();
      const [showPassword, setShowPassword] = useState(false);
      const handleClickShowPassword = () => setShowPassword((show) => !show);

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };



     const onSubmit = (values, actions) => {
      
        updatePassword(token,values).then(res => {
            console.log(res);
            if(res.status !== 200){
                alertError('Error, no se pudo reestrablecer su contraseña');
            }

            alertSuccess('Contraseña reestablecida, realice el proceso de  login de forma normal');
            navigate('/login');
            actions.resetForm();
        })

     };
     const formik = useFormik({
       initialValues: {
         pass: "",
         duplicatePass: "",
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
            <Grid item xs={12} mb={2} mt={2}>
              <FormControl
                variant="outlined"
                error={touched.pass && Boolean(errors.pass)}
                fullWidth
              >
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  name="pass"
                  value={values.pass}
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
                <FormHelperText>{touched.pass && errors.pass}</FormHelperText>
              </FormControl>
            </Grid>

            {/*  password2 */}
            <Grid item xs={12} mb={2}>
              <FormControl
                variant="outlined"
                error={touched.duplicatePass && Boolean(errors.duplicatePass)}
                fullWidth
              >
                <InputLabel htmlFor="duplicatePass">Password 2</InputLabel>
                <OutlinedInput
                  id="duplicatePass"
                  name="duplicatePass"
                  value={values.duplicatePass}
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
                  label="duplicatePass"
                />
                <FormHelperText>
                  {touched.duplicatePass && errors.duplicatePass}
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
              <Link className="link-button-cancel" to={`/login`}>
                Cancelar
              </Link>

              <Button type="submit" sx={{ ml: 1 }} variant="contained">
                Guardar
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
