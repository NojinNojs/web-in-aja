// pages/index.tsx
import Head from "next/head";
import HeroParallax from "../components/example/hero-parallax-demo";
import HeroHighlight from "../components/example/hero-highlight-demo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web In Aja</title>
        <meta name="description" content="Jualan website dengan mudah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroHighlight />
        <HeroParallax />
      </main>
    </>
  );
}
