import { useEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const useWorkController = () => {

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#work", {
            scrollTrigger: {
                trigger: '#work',
                start: "center-=35% center",
                end: "center center",
                scrub: true,
                markers: true,
            },
            opacity: 1,
            delay: 1500,
        });

        return () => {

        }

    }, []);

};

export default useWorkController;