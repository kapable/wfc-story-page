import React, { useCallback, useState } from 'react';
import { Collapse } from 'react-collapse';
import STORYTOP from '../images/story-top.png';
import STORYBOTTOM from '../images/story-bottom.png';
import STORYFOX from '../images/story_fox.png';
import UPARROW from '../images/up_arrow.png';
import DOWNARROW from '../images/down_arrow.png';

function Story() {
    const [opened, setOpened] = useState(false);
    const onCollapseButtonClick = useCallback(() => {
        setOpened(!opened);
    }, [opened]);

    return (
        <div style={{position: "relative", overflow: 'hidden'}}>
            <img src={STORYTOP} alt="story-img" className='story-img' />
            <p className='story-title'>STORY</p>
            <p className='story-comment-top'>
                여러 가지 일이 조건에 의해 시간과 공간의<br />
                갈래가 나뉘어 서로 다른 일이 일어나는<br />
                여러 개의- 다중우주 (Multivers) 속<br />
                Foxynus 행성은 광활한 우주 속에서<br />
                무엇보다 비즈니스에 탁월하고 재치 있는<br />
                행성으로 저명합니다.<br />
                <br />
                W.F.C는 우리 지구와 환경이 비슷한<br />
                또 다른 다중 우주 속 Foxynus 행성의<br />
                Wall Street에서 온 10,000마리의 여우입니다.<br />
                Wall Street는 Foxynus 행성에서<br />
                최고의 여우들이 모이는<br />
                국가이자 도시입니다.<br />
                <br />
                그 Foxunus 행성에서도 80억의 여우 인구 중<br />
                탁월함이 돋보이는 단 1%의 여우만이<br />
                W.F.C라고 알려지는 명예를 누릴 수 있습니다.<br />
                W.F.C 중에서도, 고위관리직은 행성 간 M&A,<br />
                행성 개발 등 Planet Project를 담당하는<br />
                최고의 멤버들이 있습니다.<br />
            </p>
            <Collapse isOpened={opened}>
                <img src={STORYBOTTOM} alt="story-img" className='story-img' />
                <p className='story-comment-bottom'>
                    W.F.C는 메타버스로 접어드는 지구의<br />
                    기술에 관심이 생겼습니다.<br />
                    W.F.C는 지구로 가고 싶지만,<br />
                    지금 차원이동 엔진의 기술적 문제로<br />
                    다중 우주 속 지구의 멤버들을<br />
                    실제로 만날 수 없습니다.<br />
                    <br />
                    그래서, W.F.C 중 10,000명의<br />
                    여우들은 지구의 가상 공간에서 메타버스<br />
                    비즈니스 프로젝트를 추진을 결정했습니다.<br />
                    W.F.C는 지구에서 메타버스 프로젝트를 함께 할<br />
                    10,000명의 동반자를 찾고 있습니다.<br />
                    <br />
                    W.F.C의 목표는 생각보다 단순 명료합니다.<br />
                    정확한 목표의식, 일을 통한 자신의 가치 증명,<br />
                    베푸는 것의 앎, 멤버 간 신의<br />
                    이 네 가지의 대의명분으로 Foxynus는<br />
                    우주 최고의 비즈니스 행성이 되었습니다.<br />
                    <br />
                    W.F.C가 오고 있습니다.<br />
                    WALL STREET FOX CLUB의 동반자가<br />
                    되어 지구를 우주 최고의 메타버스 행성으로.<br />
                    <br />
                    333 7th Ave, Wall Street, FWS 053090 /<br />
                    FOXYNUS<br />
                    <br />
                    Chief Planet Officer / FFF
                </p>
                <img src={STORYFOX} alt="story-fox-img" className='story-fox-img' />
                <img src={opened ? UPARROW : DOWNARROW} alt="arrow" className='story-arrow' onClick={onCollapseButtonClick}/>
            </Collapse>
        </div>
    );
};

export default Story;