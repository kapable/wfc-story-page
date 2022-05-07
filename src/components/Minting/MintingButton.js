import React, { useCallback } from 'react';

const MintingButton = () => {
    const onBtnClick = useCallback(() => {
        alert("민팅 기능 준비중입니다!")
    }, []);
    
    return (
        <div className='minting-button-div' onClick={onBtnClick}>
            <p className='minting-button-text'>MINTING</p>
        </div>
    );
};

export default MintingButton;