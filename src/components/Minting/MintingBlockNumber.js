import React from 'react';

const MintingBlockNumber = () => {
    return (
        <>
        <div className='minting-blocknumber-div'>
            <div className='minting-blocknumber-title-div'>
                <p className='minting-blocknumber-title'>MINTING <span className='minting-blocknumber-title-bold'>BLOCK NUMBER</span></p>
            </div>
            <div className='minting-blocknumber-contents-div'>
                <div className='minting-blocknumber-contents-upper-div'>
                    <p className='minting-blocknumber-contents-upper-title'>CURRENT BLOCK</p>
                    <div className='minting-blocknumber-contents-upper-number-div'>
                        <p className='minting-blocknumber-contents-upper-number'>#83245184</p>
                    </div>
                </div>
                <div className='minting-blocknumber-contents-bottom-div'>
                    <p className='minting-blocknumber-contents-bottom-title'>MINTING STARTS AT</p>
                    <div className='minting-blocknumber-contents-bottom-number-div'>
                        <p className='minting-blocknumber-contents-bottom-number'>#83245184</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='minting-blocknumber-under-div'></div>
        </>
    );
};

export default MintingBlockNumber;