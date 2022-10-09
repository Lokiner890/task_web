import React, {FC, InputHTMLAttributes, useId} from 'react';

import {CheckMarkIcon} from '@/components';
import {Square, Title, Wrapper} from './Checkbox.styles';

type TProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  checked: boolean;
};

export const Checkbox: FC<TProps> = ({title, checked, ...props}) => {
  const id = useId();

  return (
    <Wrapper htmlFor={id}>
      <Square checked={checked}>
        {checked && <CheckMarkIcon size={10} color="light" />}
      </Square>
      <input {...props} hidden id={id} />
      <Title>{title}</Title>
    </Wrapper>
  );
};
