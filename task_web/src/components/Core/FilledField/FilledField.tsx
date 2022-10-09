import {FontWeights} from '@/themes';
import {InputKeys} from '@/themes/palletes/types';
import React, {FC, InputHTMLAttributes, ReactNode, useMemo} from 'react';
import {FieldError} from 'react-hook-form';
import {
  Label,
  Wrapper,
  ErrorText,
  Icon,
  Input,
  InputWrapper,
  Content,
} from './FilledField.styles';

type TProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;

  rightIcon?: ReactNode;
  leftIcon?: ReactNode;

  error?: FieldError;
  errorEmpty?: boolean;
  color?: keyof InputKeys;

  weight?: keyof typeof FontWeights;
  width?: string;

  size?: 'default';
  variant?: 'square' | 'round';

  margins?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
};

export const FilledField: FC<TProps> = ({
  label,
  error,
  errorEmpty = true,
  leftIcon,
  rightIcon,

  weight = 'regular',

  margins,

  variant = 'square',
  size = 'default',
  color = 'default',

  width = '100%',

  ...props
}) => {
  const margin = useMemo(
    () => ({
      top: margins?.top || '0',
      bottom: margins?.bottom || '0',
      right: margins?.right || '0',
      left: margins?.left || '0',
    }),
    [margins],
  );

  const height = useMemo(() => {
    switch (size) {
      case 'default':
        return 38;

      default:
        return 38;
    }
  }, [size]);

  const borderRadius = useMemo(() => {
    switch (variant) {
      case 'square':
        return 8;
      case 'round':
        return 16;
    }
  }, [variant]);

  return (
    <Wrapper width={width} margin={margin}>
      {label && <Label>{label}</Label>}
      <Content
        color={error ? 'danger' : color}
        height={height}
        borderRadius={borderRadius}>
        {leftIcon && <Icon>{leftIcon}</Icon>}

        <InputWrapper>
          <Input {...props} color={error ? 'danger' : color} weight={weight} />
        </InputWrapper>

        {rightIcon && <Icon>{rightIcon}</Icon>}
      </Content>
      {!errorEmpty && <ErrorText>{error?.message || ''}</ErrorText>}
    </Wrapper>
  );
};
