import React from 'react';
import { WFCLOGO } from '../../images/Minting';

const MintingFooter = () => {
    return (
        <div className='minting-footer-wfc-div'>
            <img className='minting-footer-wfc-logo' src={WFCLOGO} alt="wfc-logo" />
            <p className='minting-footer-wfc-name'>&nbsp; WALL STREET FOX CLUB</p>
        </div>
    );
};

export default MintingFooter;