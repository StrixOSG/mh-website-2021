import '../styles/styles.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import Footer from '../components/Footer/footer';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
    const { asPath } = useRouter();
    return (
        <div>
            <Head>
                <title>Matthew Hamilton Website</title>
                <link href="https://fonts.googleapis.com/css2?family=Outfit&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
            {asPath !== '/secret-gaming-room' && <Footer />}
            <style global jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div {
                height: 100%;
            }
            `}
            </style>
        </div>
    );
}