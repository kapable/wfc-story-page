import React from 'react';
import '../Minting.css';
import MintingHeader from '../components/Minting/MintingHeader';
import MintingBlockNumber from '../components/Minting/MintingBlockNumber';
import MintingInfo from '../components/Minting/MintingInfo';
import MintingAmount from '../components/Minting/MintingAmount';
import MintingButton from '../components/Minting/MintingButton';

const Minting = () => {

    return (
        <div className='minting-background-div'>
            <MintingHeader />
            <MintingBlockNumber />
            <MintingInfo />
            <MintingAmount />
            <MintingButton />
        </div>
    );
};

export default Minting;