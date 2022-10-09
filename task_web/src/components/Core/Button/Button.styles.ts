import {FontWeights} from '@/themes';
import {ButtonKeys} from '@/themes/palletes/types';
import styled from 'styled-components';

type TType = 'outline' | 'default';

type TWrapperProps = {
  color: keyof ButtonKeys;

  margin: {
    top: string;
    left: string;
    right: string;
    bottom: string;
  };

  type: TType;

  borderRadius: number;
  width: string;
  height: number;
};

type TTextProps = {
  type: TType;

  weight: keyof typeof FontWeights;
  fontSize: number;
  align?: 'center' | 'left' | 'right';

  uppercase?: boolean;

  color: keyof ButtonKeys;
};

const isBackground = (type: TType) => type === 'default';

export const Wrapper = styled.a<TWrapperProps>`
  display: flex;
  align-items: center;

  height: ${({height}) => height}px;
  width: ${({width}) => width};

  border: 1px solid ${({color, theme}) => theme.button.background[color]};
  border-radius: ${({borderRadius}) => borderRadius}px;

  background: ${({color, theme, type}) =>
    isBackground(type) ? theme.button.background[color] : 'transparent'};

  margin: ${({margin: {right, bottom, left, top}}) =>
    `${top} ${right} ${bottom} ${left}`};
`;
export const Text = styled.span<TTextProps>`
  color: ${({theme, color, type}) =>
    theme.button[isBackground(type) ? 'text' : 'background'][color]};

  font-weight: ${({weight}) => FontWeights[weight]};
  font-size: ${({fontSize}) => fontSize}px;

  text-transform: ${({uppercase}) => (uppercase ? 'uppercase' : 'none')};

  flex: 1;

  text-align: ${({align}) => align};
`;

export const IconWrapper = styled.div``;
