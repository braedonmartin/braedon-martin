import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect} from 'react';
import AnimatedLetters from '../../components/AnimatedLetters';
import { faCss3, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import C from '../../assets/images/C.png';
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
                    as it has allowed me to do more and power up my JS skills further. But I am not beholden to it. In my opinion one
                    of my main advantages as a developer is to change and adapt, I can easily learn new skills as they're needed. Grow to the scope of whatever project I'm a part of.</p>
                    <p>I have worked solo as a freelancer but I always enjoy working with teams. I think it is essential to bounce ideas off
                    one another in the hopes of accomplishing a shared goal, which I can't really find when I am working by myself.
                    Listening to others perspectives helps all of us understand and deconstruct a problem better.</p> 
                    <p>Currently, I’m deepening my skills in app development with React Native, while also exploring instructional design to create training modules that enhance learning experiences. This exciting journey allows me to blend my technical expertise with design principles, building intuitive content that drives user engagement. I’m always expanding my expertise across diverse areas, staying adaptable and open to new knowledge that strengthens my ability to tackle any project.</p>
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
                          <img src={C} alt="C" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </div>
    )
}

export default About;