import React, {ReactNode, useState} from 'react';

//app themes
import {themes, ThemeContext, ThemesName, light, media} from '@/themes';
import {ThemeProvider} from 'styled-components';
import {Wrapper} from './ThemeLayout.styles';

type TProps = {
  children: ReactNode;
};

export const ThemeLayout: React.FC<TProps> = ({children}) => {
  return (
    <ThemeProvider theme={{...light, ...media}}>
      <ThemeContext.Provider value={themes[ThemesName.LIGHT]}>
        <Wrapper>{children}</Wrapper>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
