import React, { Fragment, useCallback, useState } from 'react';
import { Collapse, UnmountClosed } from 'react-collapse';
import WHOLESTORY from '../images/whole_story.png';
import STORYFOX from '../images/story_fox.png';
import UPARROW from '../images/up_arrow.png';
import DOWNARROW from '../images/down_arrow.png';

function Story() {
    const [opened, setOpened] = useState(false);
    const [coverHeight, setCoverHeight] = useState(window.screen.width > 600 ? "57rem" : "15rem");
    const onCollapseButtonClick = useCallback(() => {
        setOpened(!opened);
        if(window.screen.width > 600) {
            setCoverHeight("57rem");
        } else {
            setCoverHeight("15rem");
        }
    }, [opened]);

    return (
        <Fragment>
            <div style={{position: "relative"}}>
                <div style={{ width: "100%", height: 'auto', backgroundColor:"white"}}>111</div>
                <Collapse isOpened={opened}>
                    <img src={WHOLESTORY} alt="story-img" className='story-img' />
                    <img src={STORYFOX} alt="story-fox-img" className='story-fox-img' />
                    <img src={opened ? UPARROW : DOWNARROW} alt="arrow" className='story-arrow' onClick={onCollapseButtonClick}/>
                </Collapse>
            </div>
        </Fragment>
    );
};

export default Story;