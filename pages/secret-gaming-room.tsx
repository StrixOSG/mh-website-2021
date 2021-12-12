import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import styles from './secret-gaming-room.module.css';
import Head from 'next/head';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import React, { useEffect } from 'react';
import { RiZoomInLine, RiZoomOutLine, RiRestartLine, RiInformationLine, RiArrowLeftLine } from 'react-icons/ri';
import Link from 'next/link';

const MySwal = withReactContent(Swal);

export default function SecretGamingRoom() {
    useEffect(() => {
        infoModal();
    })
    return (
        <div className={`${styles.zoomWidthAndHeight} relative bg-black`}>
            <Head>
                <title>Secret Gaming Room</title>
            </Head>
            <TransformWrapper maxScale={300} >
                {({ zoomIn, zoomOut, resetTransform }) => (
                    <React.Fragment>
                        <div className="absolute flex left-10 top-10 z-10 space-x-4">
                            <Link href="/">
                                <a className="text-white text-2xl"><RiArrowLeftLine /></a>
                            </Link>
                            <button className="text-white text-2xl" onClick={() => zoomIn()}><RiZoomInLine /></button>
                            <button className="text-white text-2xl" onClick={() => zoomOut()}><RiZoomOutLine /></button>
                            <button className="text-white text-2xl" onClick={() => resetTransform()}><RiRestartLine /></button>
                            <button className="text-white text-2xl" onClick={() => infoModal()}><RiInformationLine /></button>
                        </div>
                        <TransformComponent wrapperClass={styles.zoomWidthAndHeight} contentClass={styles.zoomWidthAndHeight}>
                            <img src="/secret-gaming-room.svg" />
                        </TransformComponent>
                    </React.Fragment>
                )}
            </TransformWrapper>
        </div>
    );
}

function infoModal() {
    MySwal.fire({
        confirmButtonText: 'Close',
        html: <div>
            <p className="text-3xl">You found my secret hideaway 😎</p>
            <p className="text-xl text-left mt-2">Have a look around and find the <b>11 names</b> I've hidden around the room. These are some of the people who've helped develop my passion for Computer Science</p>
        </div>
    })
}