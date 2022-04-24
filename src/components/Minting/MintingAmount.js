import React from 'react';
import ProgressBar from './ProgressBar';

const MintingAmount = () => {
    return (
        <div>
            <div>
                <ProgressBar value={8000} max={9500} />
            </div>
            <div></div>
        </div>
    );
};

export default MintingAmount