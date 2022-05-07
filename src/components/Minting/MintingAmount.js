import React, { useCallback, useState } from 'react';
import ProgressBar from './ProgressBar';

const MintingAmount = () => {
    const [amount, setAmount] = useState(1);

    const minusCount = useCallback(() => {
        if(amount <= 1) {
            alert("최소한 1개 이상 민팅에 참여해야 합니다!");
            return null;
        }
        setAmount((amount) => amount - 1);
    }, [amount]);

    const plusCount = useCallback(() => {
        if(amount >= 3) {
            alert("최대 3개까지 민팅이 가능합니다!");
            return null;
        }
        setAmount((amount) => amount + 1);
    }, [amount]);

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
                <div className='minting-amount-control-button-minus' onClick={minusCount}>
                    <p className='minting-amount-control-button-minus-text'>-</p>
                </div>
                <div className='minting-amount-control-number'>{amount}</div>
                <div className='minting-amount-control-button-plus' onClick={plusCount}>
                    <p className='minting-amount-control-button-plus-text'>+</p>
                </div>
            </div>
        </div>
    );
};

export default MintingAmount