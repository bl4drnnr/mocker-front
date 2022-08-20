import { atom } from 'recoil';

const theme = atom<string>({
  key: 'theme',
  default: 'light',
});

export {
  theme
};
