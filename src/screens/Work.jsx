import React from 'react'
import '../styles/work.css'

import useWorkController from '../hooks/useWorkController';

const Work = () => {

    useWorkController();

    return (
        <article id="work">
            <div>
              WORK
            </div>


        </article>
    )
}

export default Work;