import {FontWeights} from '@/themes';
import {InputKeys} from '@/themes/palletes/types';
import React, {FC, InputHTMLAttributes, ReactNode, useMemo} from 'react';
import {FieldError} from 'react-hook-form';
import {Label, Wrapper, ErrorText, Area, Content} from './AreaField.styles';

type TProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;

  error?: FieldError;

  color?: keyof InputKeys;

  weight?: keyof typeof FontWeights;
  width?: string;

  height?: string;
  variant?: 'square' | 'round';

  margins?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
};

export const AreaField: FC<TProps> = ({
  label,
  error,

  weight = 'regular',

  margins,

  variant = 'square',
  size = 'default',
  color = 'default',

  width = '100%',
  height = '48px',

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
        <Area {...props} color={error ? 'danger' : color} weight={weight} />
      </Content>
      <ErrorText>{error?.message || ''}</ErrorText>
    </Wrapper>
  );
};
