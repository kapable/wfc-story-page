import React from 'react';

const ProgressBar = ({ value, max }) => {
    return (
        <progress style={{direction: "rtl"}} value={value} max={max} />
    );
};

export default ProgressBar;