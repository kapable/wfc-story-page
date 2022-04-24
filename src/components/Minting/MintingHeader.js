import React, { useState } from 'react';
import axios from 'axios';
import { WFCLOGO, KALYTNLOGO } from '../../images/Minting';

const MintingHeader = () => {
    const [walletAddress, setWalletAddress] = useState(null);
    const onKaikasLoginClick = () => {
        window.klaytn ? kaikasLogin() : alert("Kaikas를 다운로드해주세요!");
    };
    const kaikasLogin = async () => {
        const wallet = await window.klaytn.enable();
        setWalletAddress(wallet);
        let version = await window.klaytn.networkVersion;
        console.log('WALL', wallet[0]);
        console.log(version);
        await axios.get(process.env.REACT_APP_BACK_URL, `/nft/check/${wallet[0]}`)
        .then((res) => (console.log(res)));
    };
    return (
        <div className='minting-header-div'>
            <div className='minting-header-wfc'>
                <div className='minting-header-wfc-inner-div'>
                    <img className='wfc-logo' src={WFCLOGO} alt="wfc-logo" />
                    <p className='wfc-name'>&nbsp; WALL STREET FOX CLUB</p>
                </div>
            </div>
            <div className='minting-header-wallet'>
                {walletAddress
                ? (
                <button className='minting-header-wallet-button'>
                    <img className='kaikas-logo' src={KALYTNLOGO} alt="klaytn-logo" />
                    <p className='kaikas-wallet-address'>&nbsp; {walletAddress[0].slice(0, 7) + '...' + walletAddress[0].slice(-7)}</p>
                </button>)
                : (
                <button onClick={onKaikasLoginClick} className='minting-header-wallet-button'>
                    <img className='kaikas-logo' src={KALYTNLOGO} alt="klaytn-logo" />
                    <p className='minting-header-wallet-comment'>&nbsp; Connect Wallet OFF</p>
                </button>
                )}
                
            </div>
        </div>
    );
};

export default MintingHeader;