import React from 'react';

const ProgressBar = ({ value, max }) => {
    return (
        <progress className='minting-amount-progressbar' value={value} max={max} />
    );
};

export default ProgressBar;