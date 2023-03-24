import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap"
          rel="stylesheet"
        />
        <meta name="author" content="Alireza Nikzad & Vafa Nobakht" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
