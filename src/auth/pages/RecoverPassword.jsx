import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as yup from "yup"
import { recoverPassword } from '../../api/apiFunctions/auth'
import { alertError, alertSuccess } from '../../helpers/alertHandler'
import { AuthLayout } from '../layout/AuthLayout'

 const validationSchema = yup.object({
    email: yup
      .string()
      .email("Debés ingresar un email valido")
      .required("Campo obligatorio"),
 })
export const RecoverPassword = () => {

    const onSubmit = (values,actions) =>{
        console.log(values)
        recoverPassword(values).then((response) =>{
            
            
            if(response.status !==200){
                alertError('Error, el email ingresado no existe en la base de datos')
            }

            alertSuccess('Por favor revise la bandeja de su correo y haga click en el enlace')
            actions.resetForm();
        })
    }
     const formik = useFormik({
       initialValues: {
         email: "",
        
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
        sx={{width:'100%'}}
        display="flex"
        justifyContent="space-between"
        alignContent="center"
      >
        <Grid item xs={12}>
          <Typography variant="h6" mb={2}>
            Recupera tu cuenta
          </Typography>
          <Divider />

          <form onSubmit={handleSubmit}>
            <TextField
              placeholder="Correo electrónico"
              name="email"
              value={values.email}
              fullWidth
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{mb:2}}
            />
        
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
              <Link className="link-button-cancel" to={`/login`}>
                Cancelar
              </Link>

              <Button type="submit" sx={{ ml: 1 }} variant="contained">
                Buscar
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </AuthLayout>
  );
}
