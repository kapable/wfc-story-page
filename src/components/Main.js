import React from 'react';
import MAINFOX from '../images/main-fox.png';
import MAINBG from '../images/main-background.png';

function Main() {
    return (
        <div className='main-div'>
            <p className='main-title'>WALL STREET FOX CLUB</p>
            <p className='main-subtitle'>We're from <span className='main-subtitle-bold'>FOXYNUS</span></p>
            <img src={MAINFOX} alt="main-fox" className="main-fox" />
            <img src={MAINBG} alt="main-background" className="main-background" />
        </div>
    );
};

export default Main;