import React, { Fragment } from 'react';
import { NFTFOX1, NFTFOX2, NFTFOX3, NFTFOX4, NFTFOX5, NFTFOX6, NFTBACKGROUND, OPENSEABTN } from '../images';
import Marquee from "react-fast-marquee";

function NFT() {
    const imgList = [NFTFOX1, NFTFOX2, NFTFOX3, NFTFOX4, NFTFOX5, NFTFOX6];
    
    return (
        <Fragment>
            <div className='nft-background-img-div'>
                <p className='nft-title'>W.F.C <span className='nft-title-bold'>NFT</span></p>
                <img src={NFTBACKGROUND} alt="nft-background-img" className='nft-background-img' />
                <Marquee className='nft-marquee-slider' gradient={false} speed={40} pauseOnHover={true}>
                    {imgList.map((v, i) => (
                        <div className='nft-slide' key={`nft-fox-${i}-key`}>
                            <img className='nft-slide-img' src={v} key={`nft-fox-${i}`} alt={`nft-fox-${i}`} />
                        </div> 
                    ))}
                </Marquee>
                <a href='https://ktestone.com' target="_blank" rel="noreferrer noopener">
                    <img src={OPENSEABTN} alt="go-to-opensea" className='go-to-opensea-btn' />
                </a>
            </div>
        </Fragment>
    );
};

export default NFT;