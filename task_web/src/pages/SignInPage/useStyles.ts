import styled from 'styled-components';
import {FontWeights} from '@/themes';
import {NavLink} from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;
export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @keyframes eye {
    0% {
      width: 80vw;
    }
    100% {
      width: 80vw;
    }
  }
`;
export const Form = styled.form`
  padding: 20px;
`;
export const SideWrapper = styled.div`
  background-color: ${({theme}) => theme.background.action};
  height: 100%;
  display: flex;
  width: 80vw;
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
export const InputTitle = styled.span`
  margin-right: 100px;
`;
export const Title = styled.h1`
  font-size: xx-large;
  align-self: start;
  font-weight: ${FontWeights.medium};
  margin-bottom: 80px;
`;
export const SubTitle = styled.h4`
  width: 500px;
  margin-bottom: 100px;
`;
export const Footer = styled.div``;
export const SubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
`;
export const Header = styled.div``;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({theme}) => theme.text.action};
`;
