import {Auth, authActions} from '@/bus/auth';
import {useForm} from 'react-hook-form';
import {schema} from './schema';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();
  const {control, handleSubmit} = useForm<Auth.ReqSignIn>({
    defaultValues: {
      email: '',
      password: '',
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Auth.ReqSignIn) => {
    dispatch(authActions.signInAsync(data));
  };
  return {control, handleSubmit: handleSubmit(onSubmit)};
};
