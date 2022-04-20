import React, { useCallback } from 'react';
import { TEAMBGLG, TEAMBGSM, TEAMLG, TEAMSM } from '../images';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

function Main() {
    const teamRenderer = useCallback(() => {
        if(window.screen.width < 1024) {
            return (
                <div>
                    <img src={TEAMSM} alt="team-contents" className='team-contents' />
                    <img src={TEAMBGSM} alt="team-background" className='team-background' />
                </div>
            )
        } else {
            return (
                <div>
                    <img src={TEAMLG} alt="team-contents" className='team-contents' />
                    <img src={TEAMBGLG} alt="team-background" className='team-background' />
                </div>
            )
        }
    }, []);
    return (
        <div className='team-div'>
            <p className='team-title'>W.F.C<br /><span className='team-title-bold'>TEAM</span></p>
            {teamRenderer()}
        </div>
    );
};

export default Main;