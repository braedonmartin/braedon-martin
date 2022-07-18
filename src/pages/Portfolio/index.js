import React, { useState, useEffect } from "react";
import Loader from 'react-loaders';
import AnimatedLetters from "../../components/AnimatedLetters";
import portfolioData from '../../data/portfolio.json';
import './styles/index.scss'
import './styles/index_mobile.scss'

function Portfolio() {
    // Changes the page layout based on the screen size
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
    
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 700;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);


    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        
        return () => clearTimeout(timer);
    }, [letterClass]);

    function renderPortfolio(portfolio) {
        return (

                <div className="images-container">
                    {
                        portfolio.map((port, idx) => {
                            return (
                                <div className='image-box' key={idx}>
                                    <img className="portfolio-image" src={port.cover} alt="portfolio" />
                                    <div className="content">
                                        <p className="title">{port.title}</p>
                                        <h4 className="description">{port.description}</h4>
                                        <button className="btn" onClick={() => window.open(port.url)}>VIEW</button>
                                    </div>
                                
                                </div>
                            )
                        })
                    }
                </div>
        )
    }

    return (
        <div className={`${isMobile ? "mobile" : "non-mobile"}`}>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idex={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman"/>
        </div>
    );
}

export default Portfolio;