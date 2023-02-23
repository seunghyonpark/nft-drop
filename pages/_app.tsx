import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Cracle NFT Minting Page</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="CRACLE IS CREATING A NEW WORLD OPTIMIZED FOR WEB3."
        />
        <meta
          name="keywords"
          content="cracle, nft, mint"
        />

      </Head>
      <Component {...pageProps} />

      {/*
      <ThirdwebGuideFooter />
  */}

    </ThirdwebProvider>
  );
}

export default MyApp;
