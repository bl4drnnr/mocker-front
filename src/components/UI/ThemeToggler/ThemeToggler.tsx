import React from 'react';

import Image from 'next/image';

import { ThemeTogglerProps } from '@components/UI/ThemeToggler/ThemeToggler.interface';
import { Toggler } from '@components/UI/ThemeToggler/ThemeToggler.styles';
import moon from '@public/img/moon.svg';
import sun from '@public/img/sun.svg';

const ThemeToggler = ({ theme, onClick }: ThemeTogglerProps) => {
  return (
    <Toggler onClick={onClick}>
      {theme === 'dark' ? (
        <><Image  src={sun} alt={'Sun'} width={20} height={20}/></>
      ) : (
        <><Image src={moon} alt={'Moon'} width={20} height={20}/></>
      )}
    </Toggler>
  );
};

export default ThemeToggler;
