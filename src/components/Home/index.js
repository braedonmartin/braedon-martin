import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/Bangela.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from "./Logo";
import BackgroundCode from './BackgroundCode';
import Loader from 'react-loaders';
import './index.scss'

function Home() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['r', 'a', 'e', 'd', 'o', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        
        return () => clearTimeout(timer);
    }, [letterClass]);

    return (
        <>
            <div className="container home-page">
                <effectStyle />
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21} />
                    </h1>
                    <h2>Frontend Developer / Javascript Enthusiast / Freelancer</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
                <BackgroundCode className='UseEffectStyle' />
            </div> 
            <Loader type="pacman"/>
        </>
    );
}

export default Home;