import React, { Fragment, useCallback, useState } from 'react';
import { Collapse } from 'react-collapse';
import STORYTOP from '../images/story_top.png';
import STORYBOTTOM from '../images/story_bottom.png';
import STORYFOX from '../images/story_fox.png';
import UPARROW from '../images/up_arrow.png';
import DOWNARROW from '../images/down_arrow.png';

function Story() {
    const [opened, setOpened] = useState(false);
    const onCollapseButtonClick = useCallback(() => {
        setOpened(!opened);
    }, [opened]);

    return (
        <Fragment>
            <div style={{position: "relative"}}>
                    <img src={STORYTOP} alt="story-img" className='story-img' />
                <Collapse isOpened={opened}>
                    <img src={STORYBOTTOM} alt="story-img" className='story-img' />
                    <img src={STORYFOX} alt="story-fox-img" className='story-fox-img' />
                    <img src={opened ? UPARROW : DOWNARROW} alt="arrow" className='story-arrow' onClick={onCollapseButtonClick}/>
                </Collapse>
            </div>
        </Fragment>
    );
};

export default Story;