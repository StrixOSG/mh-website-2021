import Head from 'next/head';
import React from "react";
import MainParallax from '../components/Parallax/main-parallax';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matthew Hamilton Website</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <MainParallax></MainParallax>
      </main>
    </div>
  )
}
