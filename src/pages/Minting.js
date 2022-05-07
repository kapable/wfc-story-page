import React from 'react';
import '../Minting.css';
import MintingHeader from '../components/Minting/MintingHeader';
import MintingCover from '../components/Minting/MintingCover';
import MintingBlockNumber from '../components/Minting/MintingBlockNumber';
import MintingInfo from '../components/Minting/MintingInfo';
import MintingAmount from '../components/Minting/MintingAmount';
import MintingButton from '../components/Minting/MintingButton';
import MintingFooter from '../components/Minting/MintingFooter';

const Minting = () => {

    return (
        <div className='minting-background-div'>
            <MintingHeader />
            <div className='minting-pc-div'>
                <div className='minting-pc-left-div'>
                    <MintingCover />
                </div>
                <div className='minting-pc-right-div'>
                    <div className='minting-pc-right-blockNumber-div'>
                        <MintingBlockNumber />
                    </div>
                    <div className='minting-pc-right-controler-div'>
                        <MintingInfo />
                        <MintingAmount />
                    </div>
                    <MintingButton />
                </div>
            </div>
            <div className='minting-pc-footer-div'>
                <MintingFooter />
            </div>
        </div>
    );
};

export default Minting;