import {FontWeights} from '@/themes';
import styled from 'styled-components';

type TProps = {
  checked: boolean;
};

export const Wrapper = styled.label`
  cursor: pointer;

  display: flex;
  align-items: center;

  margin: 4px 0;
`;

export const Square = styled.div<TProps>`
  border: 1px solid
    ${({theme, checked}) => (!checked ? theme.border.default : 'transparent')};
  background-color: ${({checked, theme}) =>
    theme.background[checked ? 'dark' : 'default']};

  display: flex;
  justify-content: center;
  align-items: center;

  height: 20px;
  width: 20px;

  margin-right: 4px;

  border-radius: 8px;
`;
export const Title = styled.p`
  margin: 0;

  font-weight: ${FontWeights.light};
`;
