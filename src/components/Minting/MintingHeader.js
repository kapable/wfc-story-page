import React from 'react';
import { WFCLOGO, KALYTNLOGO } from '../../images/Minting';

const MintingHeader = () => {
    return (
        <div className='minting-header-div'>
            <div className='minting-header-wfc'>
                <div className='minting-header-wfc-inner-div'>
                    <img className='wfc-logo' src={WFCLOGO} alt="wfc-logo" />
                    <p className='wfc-name'>&nbsp; WALL STREET FOX CLUB</p>
                </div>
            </div>
            <div className='minting-header-wallet'>
                <button className='minting-header-wallet-button'>
                    <img className='kaikas-logo' src={KALYTNLOGO} alt="klaytn-logo" />
                    <p className='minting-header-wallet-comment'>&nbsp; Connect Wallet OFF</p>
                </button>
            </div>
        </div>
    );
};

export default MintingHeader;