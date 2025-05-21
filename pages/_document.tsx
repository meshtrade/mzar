import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
  render() {
    const isDev = process?.env.NODE_ENV === "development";
    return (
      <Html lang="en">
        <Head>
          <link rel="alternate" href="https://mzar.mesh.trade/" hrefLang="en" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400&display=swap"
            rel="stylesheet"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
            }}
          />
        </Head>
        <body className={isDev ? "debug-screens meshScroll overflow-x-hidden" : "meshScroll overflow-x-hidden"}>
          <Main />
          <NextScript />
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52SGPX9" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
