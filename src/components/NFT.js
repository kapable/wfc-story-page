import React, { Fragment } from 'react';
import { NFTFOX1, NFTFOX2, NFTFOX3, NFTFOX4, NFTFOX5, NFTFOX6, NFTBACKGROUND, OPENSEABTN } from '../images';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NFT() {
    const imgList = [NFTFOX1, NFTFOX2, NFTFOX3, NFTFOX4, NFTFOX5, NFTFOX6, NFTFOX1, NFTFOX2, NFTFOX3, NFTFOX4, NFTFOX5, NFTFOX6, NFTFOX1, NFTFOX2, NFTFOX3, NFTFOX4, NFTFOX5, NFTFOX6];
    
    return (
        <Fragment>
            <div className='nft-background-img-div'>
                <p className='nft-title'>W.F.C <span className='nft-title-bold'>NFT</span></p>
                <img src={NFTBACKGROUND} alt="nft-background-img" className='nft-background-img' />
                {/* <Slider {...settings}>
                    {imgList.map((v, i) => (
                        <img src={v} key={`nft-fox-${i}`} alt={`nft-fox-${i}`} />
                    ))}
                </Slider> */}
                <div className='nft-slider'>
                    <div className='nft-slider-track'>
                        {imgList.map((v, i) => (
                            <div className='nft-slide' key={`nft-fox-${i}-key`}>
                                <img className='nft-slide-img' src={v} key={`nft-fox-${i}`} alt={`nft-fox-${i}`} />
                            </div> 
                        ))}
                    </div>
                </div>
                <a href='https://ktestone.com' target="_blank" rel="noreferrer noopener">
                    <img src={OPENSEABTN} alt="go-to-opensea" className='go-to-opensea-btn' />
                </a>
            </div>
        </Fragment>
    );
};

export default NFT;