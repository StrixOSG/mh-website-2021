import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import styles from './secret-gaming-room.module.css';
import Head from 'next/head';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import React, { useEffect } from 'react';
import { RiZoomInLine, RiZoomOutLine, RiRestartLine, RiInformationLine, RiArrowLeftLine } from 'react-icons/ri';
import Link from 'next/link';
import DropdownItem from '../components/Shared/UI/dropdown-item';

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
                        <div className="absolute flex left-10 top-10 z-10 space-x-4 p-2 rounded-full bg-black/30">
                            <Link href="/">
                                <span className="text-white text-3xl"><RiArrowLeftLine /></span>
                            </Link>
                        </div>
                        <div className="absolute flex right-10 top-10 z-10 space-x-4">
                            <button className="flex text-white bg-purple-200 rounded-md py-1.5 px-4" onClick={() => hintsModal()}>Hints 🤫</button>
                        </div>
                        <div className="absolute flex left-1/2 bottom-5 transform -translate-x-1/2 space-x-10 z-10 p-2 bg-black/30 rounded-md">
                            <button className="text-white text-3xl" onClick={() => zoomIn()}><RiZoomInLine /></button>
                            <button className="text-white text-3xl" onClick={() => zoomOut()}><RiZoomOutLine /></button>
                            <button className="text-white text-3xl" onClick={() => resetTransform()}><RiRestartLine /></button>
                            <button className="text-white text-3xl" onClick={() => infoModal()}><RiInformationLine /></button>
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
        confirmButtonColor: '#7100E2',
        confirmButtonText: 'Close',
        html: <div>
            <p className="text-3xl">You found my secret hideaway 😎</p>
            <p className="text-xl text-left mt-2">Have a look around and find the <b>13 names</b> I've hidden around the room. These are some of the people who've helped develop my passion for Computer Science</p>
            <p className="text-small text-left mt-2"><b>Disclaimer:</b> For the best experience view this on a desktop or laptop screen. Mobile devices may not be able to display all the names</p>
        </div>
    })
}

function hintsModal() {
    MySwal.fire({
        confirmButtonColor: '#7100E2',
        confirmButtonText: 'Close',
        html: <div className="space-y-2">
            <p className="text-3xl">Top Secret Hints 🤫</p>
            <p className="text-xl text-left">This is a very very challenging mini game. Here's some hints on the locations of each name that can be found in the room:</p>
            <DropdownItem title='Top Secret Hint #1' description='Lower half of the purple neon light on the wall'></DropdownItem>
            <DropdownItem title='Super Secret Hint #2' description='Outer ring of the larger bottom blue hexagon light on the wall'></DropdownItem>
            <DropdownItem title='Uber Secret Hint #3' description='Back half of the plane ✈️'></DropdownItem>
            <DropdownItem title='Highkey Secret Hint #4' description='Lid of the desk latte ☕'></DropdownItem>
            <DropdownItem title='Hush hush Secret Hint #5' description='Bottom right of the red blanket'></DropdownItem>
            <DropdownItem title="Incredibly Secret Hint #6" description='Left half middle of the basketball 🏀'></DropdownItem>
            <DropdownItem title="Super duper Secret Hint #7" description='Bottom of the desktop computer 💻'></DropdownItem>
            <DropdownItem title="Okay I'm out Secret Hint #8" description='Middle pink poster on the wall upper right side'></DropdownItem>
            <DropdownItem title="Secret Hint #9" description="Bottom half of the book 📕 I'm holding near the spine"></DropdownItem>
            <DropdownItem title="Forgot this one Secret Hint #10" description="Top left of the window near the border"></DropdownItem>
            <DropdownItem title="Ultra Secret Hint #11" description="Computer monitor line"></DropdownItem>
            <DropdownItem title="Secret Hint #12?" description="Lower part of the lamp 💡"></DropdownItem>
            <DropdownItem title="Okay bye 👋 Secret Hint #13" description="Top book 📕 on the shelf, left side"></DropdownItem>
        </div>
    })
}