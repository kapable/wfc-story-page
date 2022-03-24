import React, { Fragment } from 'react';

const Minting = () => {
    const onKaikasLoginClick = () => {
        window.klaytn ? kaikasLogin() : alert("Kaikas를 다운로드해주세요!");
    };

    const kaikasLogin = async () => {
        const wallet = await window.klaytn.enable();
        let version = await window.klaytn.networkVersion;
        console.log('WALL', wallet[0]);
        console.log(version);
    };

    return (
        <Fragment>
            <div>Minting</div>
            <button onClick={onKaikasLoginClick}>kaikas login</button>
        </Fragment>
    );
};

export default Minting;