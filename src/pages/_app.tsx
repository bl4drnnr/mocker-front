import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title></title>
        <meta charSet="UTF-8"/>
        <meta name="keywords" content="placeholder,json,nextjs,jsonplaceholder,mocker,data,distribution,fake"/>
        <meta name="author" content="Mikhail Bahdashych"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default appWithTranslation(MyApp);
