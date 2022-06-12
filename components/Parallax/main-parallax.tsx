import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import React, { useRef } from 'react';
import Footer from '../Footer/footer';
import Stars from '../Shared/Particles/Stars/stars';
import EducationParallax from './Education/education-parallax';
import ProjectsParallax from './Projects/projects-parallax';
import SkillsParallax from './Skills/skills-parallax';
import WelcomeParallax from './Welcome/welcome-parallax';

export default function MainParallax() {
    const parallax = useRef<IParallax>(null!)
    return (
        <div>
            <Parallax ref={parallax} pages={4}>
                <ParallaxLayer offset={0} speed={0} className="bg-purple" />
                <ParallaxLayer offset={1} speed={0} className="bg-red" />
                <ParallaxLayer offset={2} speed={0} className="bg-turquoise" />
                <ParallaxLayer offset={3} speed={0} className="bg-sky-blue" />
                <ParallaxLayer offset={0} speed={0} factor={3.2} className='bg-transparent' >
                    <Stars></Stars>
                </ParallaxLayer>
                <WelcomeParallax></WelcomeParallax>
                <EducationParallax></EducationParallax>
                <SkillsParallax></SkillsParallax>
                <ProjectsParallax></ProjectsParallax>
            </Parallax>
            <Footer />
        </div>
    )
}