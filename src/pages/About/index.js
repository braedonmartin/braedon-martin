import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect} from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import './styles/index.scss';
import './styles/index_mobile.scss';

function About() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 930);
    
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 930;
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
                    <p>My love for Javascript guided me into the world of frontend. I fell in love with crafting beautiful UI's to
                    improve the user's experience. As a result, I've come to admire the way things are done in the React ecosystem
                    as it has allowed me to do more and power up my JS skills further. But I am not beholden to it. Svelte for example is a very interesting project that has caught my eye recently. I am always paying attention to the paradigm shifts that happen in the Javascript world.</p>
                    <p>I have worked solo as a freelancer but I always enjoy working with teams. I think it is essential to bounce ideas off
                    one another in the hopes of accomplishing a shared goal, which I can't really find when I am working by myself.
                    Listening to others perspectives helps all of us understand and deconstruct a problem better.</p> 
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