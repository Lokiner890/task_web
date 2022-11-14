import React from 'react';

import {Button, FilledField} from '@/components';
import {
  Footer,
  Form,
  FormWrapper,
  Header,
  InputTitle,
  InputWrapper,
  Link,
  SideWrapper,
  SubmitWrapper,
  SubTitle,
  Title,
  Wrapper,
} from './useStyles';
import {Controller} from 'react-hook-form';
import {useData} from './useData';
import {Routes} from '@/routes';
export const SignInPage = () => {
  const {control, handleSubmit} = useData();
  return (
    <Wrapper>
      <FormWrapper>
        <Form>
          <Header>
            <Title>Sign In</Title>
          </Header>
          <InputWrapper>
            <InputTitle>Email</InputTitle>
            <Controller
              control={control}
              name="email"
              render={({field: {...props}, fieldState: {error}}) => (
                <FilledField
                  {...props}
                  width={'300px'}
                  type="text"
                  error={error}
                  placeholder="Email"
                />
              )}
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>Password</InputTitle>
            <Controller
              control={control}
              name="password"
              render={({field: {...props}, fieldState: {error}}) => (
                <FilledField
                  {...props}
                  width={'300px'}
                  type="text"
                  error={error}
                  placeholder="Password"
                />
              )}
            />
          </InputWrapper>
          <Footer>
            <SubmitWrapper>
              <Link to={Routes.TO_SIGN_UP}>Sign Up</Link>
              <Button onClick={handleSubmit} width="100px" weight="medium">
                Login
              </Button>
            </SubmitWrapper>
          </Footer>
        </Form>
      </FormWrapper>
      <SideWrapper></SideWrapper>
    </Wrapper>
  );
};
