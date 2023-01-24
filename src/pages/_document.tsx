import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'



class MyDocument extends Document {
  render(): any {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />

          {/* PWA primary color */}

          <meta content="#fbfbfb" name="theme-color" />
          <meta content="#fbfbfb" name="msapplication-navbutton-color" />
          <meta content="#fbfbfb" name="apple-mobile-web-app-status-bar-style" />
          <meta content="yes" name="apple-mobile-web-app-capable" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,700;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="../manifest.json" />
            { /* this sets the color of url bar  */}
          <meta name="theme-color" content="#90cdf4" />
          <link rel="apple-touch-icon" href="/logo-96x96.png" />
            { /* this sets the color of url bar in Apple smatphones */}
            <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}



export default MyDocument
