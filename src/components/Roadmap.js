import React, { useCallback } from 'react';
import { ROADMAPSM, ROADMAPLG } from '../images';

function Main() {
    const roadmapRenderer = useCallback(() => {
        if(window.screen.width < 1024) {
            return (
                <img src={ROADMAPSM} alt="roadmap-contents" className='roadmap-contents' />
            )
        } else {
            return (
                <img src={ROADMAPLG} alt="roadmap-contents" className='roadmap-contents' />
            )
        }
    }, []);

    return (
        <div className='roadmap-div'>
            <div className='roadmap-background-container'>
                <p className='roadmap-title'>ROAD<span className='roadmap-title-bold'>MAP</span></p>
                {roadmapRenderer()}
            </div>
        </div>
    );
};

export default Main;