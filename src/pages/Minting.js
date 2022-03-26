import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Minting = () => {
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
        <Fragment>
            <div>Minting</div>
            <button onClick={onKaikasLoginClick}>kaikas login</button>
            {walletAddress
            ? (
            <button>
                <img className='kaikas-logo' src={'https://cryptologos.cc/logos/klaytn-klay-logo.png'} alt="klaytn" />
                <p className='kaikas-wallet-address'>{walletAddress[0].slice(0, 7) + '...' + walletAddress[0].slice(-7)}</p>
            </button>)
            : <p>카이카스 로그인</p>}
        </Fragment>
    );
};

export default Minting;