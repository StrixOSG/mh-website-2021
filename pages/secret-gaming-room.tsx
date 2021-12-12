import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import styles from './secret-gaming-room.module.css';
import Footer from '../components/Footer/footer';
import Head from 'next/head';

export default function SecretGamingRoom() {
    return (
        <div className={`${styles.zoomWidthAndHeight} bg-black`}>
            <Head>
                <title>Secret Gaming Room</title>
            </Head>
            <TransformWrapper maxScale={300}>
                <TransformComponent wrapperClass={styles.zoomWidthAndHeight} contentClass={styles.zoomWidthAndHeight}>
                    <img src="/secret-gaming-room.svg" />
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
}