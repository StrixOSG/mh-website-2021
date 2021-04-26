import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import React, { useRef } from "react";
import styles from './main-parallax.module.css';

const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


export default function MainParallax() {
    const parallax = useRef<IParallax>(null!)
    return (
        <Parallax ref={parallax} pages={3} style={{ width: '100%', height: '100%', background: '#340068' }}>
            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

            <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
                backgroundImage: url('stars', true),
                backgroundSize: 'cover',
            }}
            />

            <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
                backgroundSize: '80%',
                backgroundPosition: 'center',
                backgroundImage: url('clients', true),
            }}
            />

            <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <img src={url('bash')} style={{ width: '40%' }} />
            </ParallaxLayer>

            <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onClick={() => parallax.current.scrollTo(0)}>
            <img src={url('clients-main')} style={{ width: '40%' }} />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.2} className="flex justify-center flex-wrap-reverse">
                <div className="flex flex-col justify-center">
                    <div className={styles.bitmojiSpaceContainer}>
                        <div className={styles.bitmojiSpaceText}>
                            <p className="absolute text-xl left-28 top-10 md:left-52 md:text-3xl md:top-12">Hi, I'm Matt</p>
                        </div>
                        <div className={styles.bitmojiSpace}>
                            <img className="w-7/12 md:w-full" src="/bitmoji/bitmoji-space.svg"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-end text-3xl md:text-5xl lg:text-7xl xl:justify-center">
                    <h1 className="text-white">WEB | APP | GAME</h1>
                    <h1 className="mt-1 text-white">DEVELOPMENT & DESIGNS</h1>
                </div>
            </ParallaxLayer>
            <ParallaxLayer 
                offset={0.32}
                speed={0.6} 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    pointerEvents: 'none',
                    opacity: 0.4 
                }}>
                <img src="/Cloud-1.svg" style={{ width: '700px' }} />
            </ParallaxLayer>
            <ParallaxLayer 
                offset={0.43}
                speed={0.6} 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    pointerEvents: 'none',
                    opacity: 0.4 
                }}>
                <img src="/Cloud-2.svg" style={{ width: '900px', marginRight: '100px' }} />
            </ParallaxLayer>
        </Parallax>
    )
}