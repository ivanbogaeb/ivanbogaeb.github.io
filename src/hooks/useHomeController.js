import { useEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const useHomeController = (container, single, multiple) => {

    useEffect(() => {

        const body = document.getElementById('body-wrapper');
        const textArray = ['UNIQUE', 'VISUALLY STUNNING', 'BRILLIANT', 'FUTURE PROOF', 'OPTIMIZED', 'POWERFUL', 'DESIGN DRIVEN', 'REFRESHING', 'USER CENTRIC'];
        const animationControl = {
            frame: 0,
            halt: false,
            debouceResize: setTimeout,
        }

        gsap.registerPlugin(ScrollTrigger);

        gsap.to("body", {
            scrollTrigger: {
                trigger: '#home',
                start: "center+=35% center",
                end: "center",
                scrub: true,
            },
            backgroundColor: "#f5f5f5",
        });

        gsap.to("#home", {
            scrollTrigger: {
                trigger: '#home',
                start: "center center",
                end: "center",
                scrub: true,
            },
            opacity: 0,
            onEnter(){
                document.getElementById("home").style.justifyContent = null;
            }
        });
        
        gsap.to(".main-text-container", {
            scrollTrigger: {
                trigger: '#home',
                start: "center center",
                end: "center-=35%",
                scrub: true,
            },
            display: 'none',
            opacity: 0,
        })

        gsap.to(".single", {
            scrollTrigger: {
                trigger: '#home',
                start: "center center",
                end: "center-=35%",
                scrub: true,
            },
            display: 'none',
            opacity: 0,
        })

        gsap.to("#main-animated-text-container", {
            scrollTrigger: {
                trigger: '#home',
                start: "center+=100px center",
                end: "center",
                scrub: true,
                onEnter(){
                    document.getElementById("animated-container").children[0].style.width = '100vw !important'
                    document.getElementById("animated-container").children[1].style.width = '100vw !important'
                    animationControl.halt = true;
                    animationControl.frame = 0;
                    frameDetection();
                },
                onEnterBack(){
                    document.getElementById("animated-container").children[0].style.width = ""
                    document.getElementById("animated-container").children[1].style.width = ""
                    container.current.className = "animate";
                    animationControl.halt = false;
                    animationControl.frame = 0;
                    frameDetection();
                },
                onLeaveBack(){
                    document.getElementById("animated-container").children[0].style.width = ""
                    document.getElementById("animated-container").children[1].style.width = ""
                    container.current.className = "animate";
                    animationControl.halt = false;
                    animationControl.frame = 0;
                    frameDetection();
                }
            },
            height: '100vh'
        })

        gsap.to("#animated-container", {
            scrollTrigger: {
                trigger: '#home',
                start: "center+=15% center",
                end: "center",
                scrub: true,
            },
            width: '100vw',
        });

        function fillHomeAnimation() {
            window.clearTimeout(animationControl.debouceResize);
            animationControl.debouceResize = setTimeout(() => {
                let amountMultipleText = Math.round(body.clientWidth / single.current.clientWidth) * 2;
                amountMultipleText = Math.abs(amountMultipleText % 2) === 1 ? Math.round(amountMultipleText) : Math.round(amountMultipleText) + 1
                multiple.current.innerHTML = (`<span>${single.current.textContent}</span>`).repeat(amountMultipleText);
            }, 250);
        };

        function frameDetection(){
            if (!animationControl.halt){
                if (animationControl.frame < 4){
                    if (animationControl.frame === 3){
                        let textOffset = textArray.indexOf(single.current.textContent);
                        single.current.innerHTML = textOffset + 1 < textArray.length ? textArray[textOffset+1] : single.current.innerHTML = textArray[0];
                        fillHomeAnimation();
                        setTimeout(() => {
                            container.current.className = "";
                            setTimeout(() => {
                                if (!animationControl.halt){
                                    container.current.className = "animate";
                                }
                            }, 500);
                        }, 1500);
                    };
                    animationControl.frame++
                } else {
                    animationControl.frame = 0;
                };
            } else {
                container.current.className = "";
            }
        }

        container.current.addEventListener("animationend", frameDetection);
        window.addEventListener("resize", fillHomeAnimation);
        container.current.className = "animate";

        //container.current.style.width = "100vw !important"

        fillHomeAnimation();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

        return () => {
            window.removeEventListener('resize', fillHomeAnimation);
            container.current.removeEventListener("animationend", frameDetection);
            container.current.className = "";
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }

    }, []);

};

export default useHomeController;