import React, { Fragment } from 'react';
import { NFTFOX1, NFTFOX2, NFTFOX3, NFTFOX4, NFTFOX5, NFTFOX6, NFTBACKGROUND, OPENSEABTN } from '../images';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NFT() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        dots: false
    };
    const imgList = [NFTFOX1, NFTFOX2, NFTFOX3, NFTFOX4, NFTFOX5, NFTFOX6];
    return (
        <Fragment>
            <div className='nft-background-img-div'>
                <img src={NFTBACKGROUND} alt="nft-background-img" className='nft-background-img' />
                <Slider {...settings}>
                    {imgList.map((v, i) => (
                        <img src={v} style={{display: "block"}} key={`nft-fox-${i}`} alt={`nft-fox-${i}`} />
                    ))}
                </Slider>
                <a href='https://ktestone.com' target="_blank" rel="noreferrer noopener">
                    <img src={OPENSEABTN} alt="go-to-opensea" className='go-to-opensea-btn' />
                </a>
            </div>
        </Fragment>
    );
};

export default NFT;