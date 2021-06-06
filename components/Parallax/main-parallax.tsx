import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import React, { useRef } from "react";
import SkillsParallax from './skills-parallax';
import WelcomeParallax from './welcome-parallax';

const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


export default function MainParallax() {
    const parallax = useRef<IParallax>(null!)
    return (
        <Parallax ref={parallax} pages={3} style={{ background: '#B1D4ED' }}>
            <ParallaxLayer offset={0} speed={1} style={{ background: '#340068' }} />
            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#FF6978' }} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#B1EDE8' }} />
            <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }}/>
            <WelcomeParallax></WelcomeParallax>
            <SkillsParallax></SkillsParallax>
        </Parallax>
    )
}