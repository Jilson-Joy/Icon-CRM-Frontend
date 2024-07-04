import React from 'react';
import { Route } from 'react-router-dom';
import SignInPage from '../pages/authentication/sign-in';
import SignUpPage from '../pages/authentication/sign-up';

const AuthRoutes = [
  <Route path="/authentication/sign-in" element={<SignInPage />} key="sign-in" />,
  <Route path="/authentication/sign-up" element={<SignUpPage />} key="sign-up" />,
];

export default AuthRoutes;
