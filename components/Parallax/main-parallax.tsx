import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import React, { useRef } from 'react';
import Stars from '../Shared/Particles/Stars/stars';
import EducationParallax from './Education/education-parallax';
import SkillsParallax from './Skills/skills-parallax';
import WelcomeParallax from './Welcome/welcome-parallax';

const url = (name: string, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


export default function MainParallax() {
    const parallax = useRef<IParallax>(null!)
    return (
        <Parallax ref={parallax} pages={4}>
            <ParallaxLayer offset={0} speed={0} style={{ background: '#340068' }} />
            <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#FF6978' }} />
            <ParallaxLayer offset={2} speed={0} style={{ background: '#B1D4ED' }} />
            <ParallaxLayer offset={3} speed={0} style={{ backgroundColor: '#B1EDE8' }} />
            <ParallaxLayer offset={0} speed={0} factor={4} className='bg-transparent' >
                <Stars></Stars>
            </ParallaxLayer>
            <WelcomeParallax></WelcomeParallax>
            <EducationParallax></EducationParallax>
            <SkillsParallax></SkillsParallax>
        </Parallax>
    )
}