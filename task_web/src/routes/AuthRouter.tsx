import React from 'react';

import {Route, Routes} from 'react-router-dom';
import {Routes as RoutesNames} from './Routes';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path={RoutesNames.SIGN_IN} />
      <Route path={RoutesNames.SIGN_UP} />
    </Routes>
  );
};
