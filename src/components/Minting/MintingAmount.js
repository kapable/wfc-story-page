import React from 'react';
import ProgressBar from './ProgressBar';

const MintingAmount = () => {
    return (
        <div className='minting-amount-div'>
            <div className='minting-amount-left-div'>
                <p className='minting-amount-left-title'>NFT 판매 수량</p>
                <ProgressBar value={8000} max={9500} />
                <div className='minting-amount-contents-div'>
                    <p className='minting-amount-total'>9,500</p>
                    <p className='minting-amount-left'>남은 수량: 5,000</p>
                </div>
            </div>
            <div className='minting-amount-control-div'>
                <div className='minting-amount-control-button-minus'>
                    <p className='minting-amount-control-button-minus-text'>-</p>
                </div>
                <div className='minting-amount-control-number'>1</div>
                <div className='minting-amount-control-button-plus'>
                    <p className='minting-amount-control-button-plus-text'>+</p>
                </div>
            </div>
        </div>
    );
};

export default MintingAmount