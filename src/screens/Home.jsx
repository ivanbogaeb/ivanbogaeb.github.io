import React, { useRef } from 'react'
import '../styles/home.css'

import useHomeController from '../hooks/useHomeController'

const Home = () => {

    const single = useRef(null);
    const multiple = useRef(null);
    const container = useRef(null);

    useHomeController(container, single, multiple);

    return (
        <article id="home">
            <div id="home-animation-container">
                <div className="main-text-container">
                    <h1>HANDCRAFTED</h1>
                </div>
                <div id="main-animated-text-container">
                    <div id="animated-container" ref={container}>
                        <div className="multiple" ref={multiple}></div>
                        <div className="single" ref={single}><span>UNIQUE</span></div>
                    </div>
                </div>
                <div className="main-text-container">
                    <h1>EXPERIENCES</h1>
                </div>
                <div id='home-scroll-down'>
                    <div id="home-scroll"></div>
                    <p>Scroll down to begin</p>
                </div>
            </div>
        </article>
    )
}

export default Home