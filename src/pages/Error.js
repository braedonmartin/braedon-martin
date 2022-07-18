import React, {useState, useEffect} from 'react';
import AnimatedLetters from '../components/AnimatedLetters';
import './About/styles/index.scss'

const Error = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

  return (
    <div className="container about-page">
      <div className='text-zone'>
        <h1>
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={"Error 404".split("")}
                idx={15} // 1.5 second delay
            />
        </h1>
        <p>Page not found :(</p>
      </div>
    </div>
  )
}

export default Error