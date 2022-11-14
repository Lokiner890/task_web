import {Auth, authActions} from '@/bus/auth';
import {useForm} from 'react-hook-form';
import {schema} from './schema';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const {control, handleSubmit} = useForm<Auth.ReqSignUp>({
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Auth.ReqSignUp) => {
    dispatch(authActions.signUpAsync(data));
  };
  return {control, handleSubmit: handleSubmit(onSubmit)};
};
