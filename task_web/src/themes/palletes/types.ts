type ColorValue = string;

export type Background = {
  default: ColorValue;
  action: ColorValue;
  light: ColorValue;
  dark: ColorValue;
  gray: ColorValue;
  overlay: ColorValue;
  light_gray: ColorValue;
};

export type Icon = {
  default: ColorValue;
  light: ColorValue;
};
export type Text = {
  default: ColorValue;
  secondary: ColorValue;
  link: ColorValue;
  danger: ColorValue;
  gray: ColorValue;
  light: ColorValue;
  action: ColorValue;
  dark: ColorValue;
  light_action: ColorValue;
};

export type ButtonKeys = {
  default: ColorValue;
  dark: ColorValue;
  danger: ColorValue;
};

type Button = {
  background: ButtonKeys;
  text: ButtonKeys;
  border: ButtonKeys;
};

export type InputKeys = {
  default: ColorValue;
  danger: ColorValue;
};

type Input = {
  background: InputKeys;
  border: InputKeys;
  text: InputKeys;
};

type Border = {
  default: ColorValue;
  action: ColorValue;
};

export type Pallete = {
  background: Background;
  text: Text;
  icon: Icon;
  button: Button;
  border: Border;
  input: Input;
};
