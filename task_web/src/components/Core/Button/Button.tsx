import {FontWeights} from '@/themes';
import {ButtonKeys} from '@/themes/palletes/types';
import React, {
  AnchorHTMLAttributes,
  FC,
  HTMLProps,
  ReactNode,
  useMemo,
} from 'react';
import {IconWrapper, Text, Wrapper} from './Button.styles';

type TProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
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
  align?: 'center' | 'left' | 'right';

  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
};

export const Button: FC<TProps> = ({
  children,
  onClick = () => {},
  variant = 'square',
  size = 'default',
  color = 'default',
  backgroundType = 'default',
  width = '100%',
  margins,
  uppercase,

  align = 'center',
  fontSize = 14,
  weight = 'regular',

  rightIcon,
  leftIcon,

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
      color={color}
      borderRadius={borderRadius}
      height={height}
      margin={margin}
      type={backgroundType}
      width={width}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}>
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
      <Text
        align={align}
        fontSize={fontSize}
        color={color}
        weight={weight}
        type={backgroundType}>
        {children}
      </Text>
      {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
    </Wrapper>
  );
};
