import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect} from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import './styles/index.scss';
import './styles/index_mobile.scss';

function About() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
    
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 700;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);


    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className={`${isMobile ? "mobile" : "non-mobile"}`}>
            <div className="container about-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15} // 1.5 second delay
                        />
                    </h1>
                    <p>I'm a front end developer with a passion for coding and building things! I first learned how to code in 2016 and I've been in love with it ever since. It started with an introduction to C and C++ in school, and I have branched out further learning front-end technologies and taking courses such as Googles Professional Certificate in IT Automation with Python.</p>
                    <p>I'm constantly learning new skills and always looking to gain more experience working with new languages. You can usually find me watching tutorials on something I find interesting or working on new projects!</p>
                    <p></p> 
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon className='fa-fw' icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon className='fa-fw' icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon className='fa-fw' icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon className='fa-fw' icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon className='fa-fw' icon={faPython} color="#3775a8" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon className='fa-fw' icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </div>
    )
}

export default About;