import { atom } from 'recoil';

const theme = atom<string>({
  key: 'theme',
  default: 'dark',
});

export {
  theme
};
