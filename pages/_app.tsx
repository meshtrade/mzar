import "../styles/globals.css";
import type {AppProps} from "next/app";
import {useRouter} from "next/router";
import {useEffect} from "react";
import * as gtag from "../lib/gtag";
import Script from "next/script";

function MyApp({Component, pageProps}: AppProps) {
  // tracking gtag start
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // tracking gtag end

  return (<>
    <Component {...pageProps} />
    {/* Google Tag Manager */}
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
      (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-52SGPX9');
      `}
    </Script>
    {/* End Google Tag Manager */}
  </>)
}

export default MyApp;
