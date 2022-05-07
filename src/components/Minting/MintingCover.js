import React from 'react';
import { SIXFOX } from '../../images/Minting'

const MintingCover = () => {
    return (
        <div className='minting-cover-div'>
            <p className='minting-cover-title'>WALL STREET FOX CLUB</p>
            <p className='minting-cover-subtitle'>We're from <span className='minting-cover-subtitle-bold'>FOXYNUS</span></p>
            <img src={SIXFOX} alt="six-fox-cover" className='minting-cover-six-fox' />
        </div>
    );
};

export default MintingCover;