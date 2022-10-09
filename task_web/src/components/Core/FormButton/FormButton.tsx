import {FontWeights} from '@/themes';
import {ButtonKeys} from '@/themes/palletes/types';
import React, {ButtonHTMLAttributes, FC, useMemo} from 'react';
import {Wrapper} from './FormButton.styles';

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: keyof ButtonKeys;

  margins?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };

  size?: 'default' | 'small';
  backgroundType?: 'outline' | 'default';
  variant?: 'square' | 'round';

  width?: string;

  uppercase?: boolean;

  weight?: keyof typeof FontWeights;
  fontSize?: number;
};

export const FormButton: FC<TProps> = ({
  size = 'default',
  backgroundType = 'default',
  variant = 'square',
  width = '100%',
  weight = 'regular',
  uppercase,
  margins,
  color = 'default',
  fontSize = 14,
  children,
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
      case 'small':
        return 28;
      case 'default':
        return 40;
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
    <Wrapper
      {...props}
      backgroundType={backgroundType}
      borderRadius={borderRadius}
      color={color}
      weight={weight}
      width={width}
      height={height}
      margin={margin}
      fontSize={fontSize}
      uppercase={uppercase}>
      {children}
    </Wrapper>
  );
};
