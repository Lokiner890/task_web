import {LogoIcon} from '@/components';
import {FC} from 'react';
import {Wrapper} from './Loader.styles';

type TProps = {
  size?: number;
};

export const Loader: FC<TProps> = ({size = 192}) => {
  return (
    <Wrapper size={size}>
      <LogoIcon color="default" size={size} />
    </Wrapper>
  );
};
