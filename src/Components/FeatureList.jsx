import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Feature } from './Feature';
import '../Styles/Features.scss';
import RightArrow from '../Assests/right-arrow.svg';
import LeftArrow from '../Assests/left-arrow.svg'

const FeatureList = () => {

    const [state, setState] = useState({});

    const [currentIndex, setCurrentIndex] = useState(0);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    

    useEffect(() => {
        fetch('https://krds-assignment.github.io/aoc/api-assets/data.json').then((res) => res.json()).then((data) => {
            if(data?.logo && data?.features){
                setState(data)
            }
        })

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);

    }, [])

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < state?.features.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    }

    return(
        <div className={`carousel ${isMobile ? 'mobile' : ''}`}>
            <div className='feature-logo-content'>
                {
                    state.logo && <img src={state.logo} className='logo' />
                }
            </div>
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                <div className='feature-list'>
                
                    {
                        state?.features?.length > 0 &&
                            state.features.map((feature) => {
                                return(
                                    <Feature data={feature} key={feature.title}/>
                                )
                            })
                    }
                </div>
            </div>
            {isMobile && (
                <div className="carousel-nav">
                    <img src={LeftArrow} className='prev' onClick={handlePrevClick} style={{width : '30px'}} />
                    <img src={RightArrow} className='next' onClick={handleNextClick} style={{width : '30px'}} />
                    <div className="carousel-dots">
                        {state?.features?.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            )}
        </div>
       
    )
}

export default FeatureList;