import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../components/about";
import { Hero } from "../components/hero";
import { Navbar } from "../components/nav-bar";
import Footer from "../components/footer";
import Metadata from "../components/metadata";
import { useEffect, useRef, useState } from "react";
import { Stellar, StellarTOML } from "../lib/stellar";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Home: NextPage = () => {
  const [toml, setToml] = useState<StellarTOML>();
  useEffect(() => {
    const resolveTOML = async () => {
      return await Stellar.resolveTOML();
    };
    try {
      resolveTOML().then((toml) => {
        setToml(toml);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.3 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div>
      <Head>
        <title>Mesh mZAR</title>
        <meta
          name="description"
          content="The Mesh South African Rand stablecoin"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar className={!isVisible ? " mesh-secondary-gradient" : ""} />
      <main>
        <div ref={ref}>
          <Hero />
        </div>
        <div></div>
        <About />
        <Metadata
          currency={toml?.CURRENCIES[0]}
          orgDocumentation={toml?.DOCUMENTATION}
          issuerAddress={toml?.ACCOUNTS[0]}
        />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
