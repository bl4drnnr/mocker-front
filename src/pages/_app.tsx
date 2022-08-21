import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default appWithTranslation(MyApp);
