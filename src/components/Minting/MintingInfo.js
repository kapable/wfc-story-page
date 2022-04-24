import React from 'react';
import { KALYTNLOGO } from '../../images/Minting';

const MintingInfo = () => {
    return (
        <div className='minting-info-div'>
            <div className='minting-info-div-one'>
                <div className='minting-info-div-one-left'>
                    <p className='minting-info-div-one-left-title'>PER TRANSACTION</p>
                </div>
                <p className='minting-info-div-one-right'>최대 3개</p>
            </div>
            <div className='minting-info-div-two'>
                <div className='minting-info-div-two-left'>
                    <p className='minting-info-div-two-left-title'>PRICE</p>
                </div>
                <p className='minting-info-div-two-right'><img className='minting-info-kalytn-logo' src={KALYTNLOGO} alt="klaytn-logo" /> 300 KLAY</p>
            </div>
            <div className='minting-info-div-three'>
                <div className='minting-info-div-three-left'>
                    <p className='minting-info-div-three-left-title'>PER WALLET</p>
                </div>
                <p className='minting-info-div-three-right'>Unlimited</p>
            </div>
        </div>
    );
};

export default MintingInfo;