import {FontWeights} from '@/themes';
import {InputKeys} from '@/themes/palletes/types';
import styled from 'styled-components';

type TWrapperProps = {
  margin: {
    top: string;
    left: string;
    right: string;
    bottom: string;
  };

  width: string;
};

type TContentProps = {
  color: keyof InputKeys;

  height: string;
  borderRadius: number;
};

type TInputProps = {
  color: keyof InputKeys;

  weight: keyof typeof FontWeights;
};

export const Wrapper = styled.div<TWrapperProps>`
  margin: ${({margin: {right, bottom, left, top}}) =>
    `${top} ${right} ${bottom} ${left}`};

  width: ${({width}) => width};
`;

export const Label = styled.p`
  margin: 0;

  margin-bottom: 8px;

  color: ${({theme}) => theme.text.action};
  font-weight: ${FontWeights.medium};
`;

export const Content = styled.div<TContentProps>`
  background: ${({color, theme}) => theme.input.background[color]};
  height: ${({height}) => height};

  transition: 500ms background;

  border: 1px solid ${({theme, color}) => theme.input.border[color]};
  border-radius: ${({borderRadius}) => borderRadius}px;

  display: flex;
  align-items: center;

  padding: ${({borderRadius}) => borderRadius}px;
`;

export const Area = styled.textarea<TInputProps>`
  height: 100%;
  width: 100%;

  background-color: transparent;
  border: none;

  color: ${({color, theme}) => theme.input.text[color]};
  font-weight: ${({weight}) => FontWeights[weight]};

  transition: 500ms color;

  font-size: 14px;

  resize: none;

  &::placeholder {
    font-weight: ${FontWeights.light};

    color: ${({theme, color}) => theme.text.gray};

    font-size: 14px;
  }
`;

export const ErrorText = styled.p`
  color: ${({theme}) => theme.text.danger};

  height: 16px;

  margin: 0;
  margin-top: 8px;

  font-size: 12px;
`;
