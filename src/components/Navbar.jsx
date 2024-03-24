import React from 'react'

import '../styles/navbar.css'
import useNavbarController from '../hooks/useNavbarController'

const Navbar = () => {

    useNavbarController();

    return (
        <nav>
            <div>
                <div className="multiple"></div>
                <div className="multiple"></div>
                <div className="single"><span>WORK</span></div>
            </div>
            <div>
                <div className="multiple"></div>
                <div className="multiple"></div>
                <div className="single"><span>STRATEGY</span></div>
            </div>
            <div>
                <div className="multiple"></div>
                <div className="multiple"></div>
                <div className="single"><span>CAREER</span></div>
            </div>
            <div>
                <div className="multiple"></div>
                <div className="multiple"></div>
                <div className="single"><span>ABOUT</span></div>
            </div>
        </nav>
    )
}

export default Navbar;