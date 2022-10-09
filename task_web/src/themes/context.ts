import {createContext} from 'react';

//themes
import {Pallete} from './palletes';
import * as palletes from './palletes';

export enum ThemesName {
  LIGHT = 'light',
}

export enum FontWeights {
  extra_light = '100',
  light = '200',
  regular = '400',
  medium = '600',
  bold = '800',
  extra_bold = '1000',
}

type ThemesItem = {
  pallete: Pallete;
  name: ThemesName;
};

type Themes = {
  light: ThemesItem;
};

export const themes: Themes = {
  light: {
    pallete: palletes[ThemesName.LIGHT],
    name: ThemesName.LIGHT,
  },
};

export const ThemeContext = createContext(themes[ThemesName.LIGHT]);
