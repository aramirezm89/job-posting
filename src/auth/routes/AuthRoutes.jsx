import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../jobposting/pages';
import { LoginPage, RegisterPage } from '../pages';
import { VariacodeLogin } from '../pages/VariacodeLogin';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="home" index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="variacode" element={<VariacodeLogin />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="/" element={<Navigate to="home" />}></Route>
      <Route path="/*" element={<Navigate to="home" />}></Route>

    </Routes>
  );
}
