import Document, { Html, Head, Main, NextScript } from 'next/document';

import i18nextConfig from '../../next-i18next.config.js';

class MyDocument extends Document {
  render() {
    const currentLocale: string | string[] = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale as string}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
