import {FontWeights} from '@/themes';
import {ButtonKeys} from '@/themes/palletes/types';
import styled from 'styled-components';

type TType = 'outline' | 'default';

type TProps = {
  color: keyof ButtonKeys;

  margin: {
    top: string;
    left: string;
    right: string;
    bottom: string;
  };

  backgroundType: TType;

  borderRadius: number;
  width: string;
  height: number;

  fontSize: number;

  weight: keyof typeof FontWeights;

  uppercase?: boolean;
};

const isBackground = (type: TType) => type === 'default';

export const Wrapper = styled.button<TProps>`
  height: ${({height}) => height}px;
  width: ${({width}) => width};

  border: 1px solid ${({color, theme}) => theme.button.background[color]};
  border-radius: ${({borderRadius}) => borderRadius}px;

  font-size: ${({fontSize}) => fontSize}px;

  background: ${({color, theme, backgroundType}) =>
    isBackground(backgroundType)
      ? theme.button.background[color]
      : 'transparent'};

  margin: ${({margin: {right, bottom, left, top}}) =>
    `${top} ${right} ${bottom} ${left}`};

  color: ${({theme, color, backgroundType}) =>
    theme.button[isBackground(backgroundType) ? 'text' : 'background'][color]};

  font-weight: ${({weight}) => FontWeights[weight]};

  text-transform: ${({uppercase}) => (uppercase ? 'uppercase' : 'none')};
`;
