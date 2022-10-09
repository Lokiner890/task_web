import {Routes} from '@/routes';
import React, {FC, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

type TProps = {
  to: keyof typeof Routes;
};

export const Redirect: FC<TProps> = ({to}) => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  useEffect(() => {
    if (pathname !== Routes[to]) {
      navigate(Routes[to]);
    }
  }, [pathname, to]);

  return null;
};
