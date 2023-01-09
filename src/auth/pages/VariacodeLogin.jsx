import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import * as yup from "yup";
import { useAuthStore } from "../../hooks/useAuthStore";
import { GoogleSigIn } from "../components/GoogleSigIn";

import { AuthLayout } from "../layout/AuthLayout";

export const VariacodeLogin = () => {
  const { status } = useAuthStore();

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  


  
  return (
    <AuthLayout>
     <GoogleSigIn/>
    </AuthLayout>
  );
};
