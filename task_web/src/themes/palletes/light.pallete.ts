import type {Pallete} from './types';

const pallete: Pallete = {
  background: {
    default:
      'linear-gradient(125.15deg, rgba(217, 188, 34, 0.03) 21.96%, rgba(255, 255, 255, 0) 105.42%)',
    action: '#D3BD45',
    light: '#fff',
    dark: '#171B16',
    gray: '#D9D9D9A0',
    overlay: '#0000008C',
    light_gray: '#f4f4f4',
  },
  text: {
    default: '#484B73',
    secondary: '#7A7BBB',
    link: '#05A3D4',
    danger: '#D63333',
    gray: '#484B7380',
    light: '#fff',
    dark: '#171B16',
    action: '#D9BC22',
    light_action: '#D3BD45',
  },
  icon: {
    default: '#171B16',
    light: '#fff',
  },
  button: {
    background: {
      default: '#D3BD45',
      dark: '#171B16',
      danger: '#D63333',
    },
    text: {
      default: '#171B16',
      dark: '#fff',
      danger: '#fff',
    },
    border: {
      default: '#D3BD45',
      dark: '#140F07',
      danger: '#D63333',
    },
  },
  input: {
    background: {
      default: '#E3E3E3',
      danger: '#D633334D',
    },
    border: {
      default: '#E3E3E3',
      danger: '#D63333',
    },
    text: {
      default: '#171B16',
      danger: '#D63333',
    },
  },
  border: {
    default: '#171B16',
    action: '#D3BD45',
  },
};

export default pallete;
