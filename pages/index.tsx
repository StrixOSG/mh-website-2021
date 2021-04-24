import Head from 'next/head';
import React from "react";
import MainParallax from '../components/Parallax/main-parallax';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matthew Hamilton Website</title>
      </Head>
      <main>
        <MainParallax></MainParallax>
      </main>
    </div>
  )
}
