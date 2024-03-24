import React from 'react'
import '../styles/header.css'

const Header = () => {
    return (
        <header className='sticky top-0 z-10 w-100 flex justify-between items-center py-6 px-12 mix-blend-difference'>
            <svg 
                className='w-12 h-12'
            version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                <path d="M310 2560 l0 -2250 2250 0 2250 0 0 2250 0 2250 -2250 0 -2250 0 0
                -2250z m1240 25 l0 -1535 -370 0 -370 0 0 1535 0 1535 370 0 370 0 0 -1535z
                m2010 1506 c447 -84 690 -266 782 -588 30 -103 32 -342 4 -443 -48 -178 -165
                -326 -319 -406 l-79 -41 74 -27 c196 -71 334 -225 389 -433 27 -100 29 -300 4
                -417 -37 -178 -92 -283 -210 -401 -131 -131 -298 -210 -545 -256 -110 -21
                -146 -22 -857 -26 l-743 -4 0 1536 0 1536 693 -4 c657 -4 698 -5 807 -26z"/>
                <path d="M2800 3195 l0 -355 233 0 c310 1 406 18 497 90 22 18 51 55 67 88 26
                52 28 66 28 172 0 132 -18 186 -82 252 -81 83 -197 107 -515 108 l-228 0 0
                -355z"/>
                <path d="M2800 1986 l0 -366 278 0 c314 0 382 9 469 62 60 37 93 75 126 146
                32 68 30 231 -3 316 -30 79 -97 145 -176 177 -57 23 -71 23 -376 27 l-318 3 0
                -365z"/>
            </g>
            </svg>
            <svg id="menu-header-icon" className="w-7 h-7 cursor-pointer rounded-full overflow-hidden" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                <line x1="14" y1="0" x2="14" y2="28"/>
                <line x1="0" y1="14" x2="28" y2="14"/>
            </svg>
        </header>
    )
}

export default Header