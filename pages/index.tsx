import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../components/about";
import { Hero } from "../components/hero";
import { Navbar } from "../components/nav-bar";
import { Mesh } from "../components/mesh";
import Footer from "../components/footer";
import Metadata from "../components/metadata";
import { useEffect, useState } from "react";
import { Stellar, StellarTOML } from "../lib/stellar";

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

      <Navbar />
      <main>
        <Hero />
        <Mesh />
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
