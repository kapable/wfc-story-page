import React from 'react';
import STORYFOLDIMG from '../images/story_fold.png';
import STORYUNFOLDIMG from '../images/story_unfold.png';

function Story() {
    return (
        <img src={STORYUNFOLDIMG} alt="main-img" className='main-img' />
    );
};

export default Story;