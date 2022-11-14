import {SignInPage, SignUpPage} from '@/pages';
import React from 'react';

import {Route, Routes} from 'react-router-dom';
import {Routes as RoutesNames} from './Routes';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path={RoutesNames.SIGN_IN} element={<SignInPage />} />
    </Routes>
  );
};
