import React, {useEffect, useState} from 'react';


import {Route, Routes} from 'react-router-dom';


import {appActions, appSelectors} from '@/bus/app';
import {authSelectors} from '@/bus/auth';

import {useDispatch, useSelector} from 'react-redux';

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

    </Routes>
  );
};
