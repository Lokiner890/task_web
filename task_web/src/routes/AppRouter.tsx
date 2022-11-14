import React, { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Routes as RouteNames } from './Routes';

import { appActions, appSelectors } from '@/bus/app';
import { authSelectors } from '@/bus/auth';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from '@/components';
import { Empty } from '@/pages';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const initialized = useSelector(appSelectors.getInitialized);
  const logged = useSelector(authSelectors.getLogged);

  const [isAccess, setIsAccess] = useState(false);

  useEffect(() => {
    if (!initialized) {
      dispatch(appActions.bootstrapAsync());
    } else {
      setTimeout(() => {
        setIsAccess(true);
      }, 1000);
    }
  }, [initialized]);

  if (!isAccess) {
  }

  return (
    <Routes>
      <Route
        path={RouteNames.AUTH_ROUTER}
        element={false ? <Redirect to={'PROJECTS'} /> : <AuthRouter />}
      />
      <Route
        path={RouteNames.}
        element={true ? <Redirect to={'TO_SIGN_IN'} /> : <Empty />}
      />
    </Routes>
  );
};
