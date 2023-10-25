import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/favicon.ico" />
      <body
        style={{
          WebkitTouchCallout: 'none',
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
