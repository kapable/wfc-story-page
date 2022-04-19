import React from 'react';
import { JACE, JACOB, JAMIE, LOUIS, SEEYONG } from '../images';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

function Main() {
    return (
        <div className='team-div'>
            <div className='team-background-container'>
                <p className='team-title'>W.F.C<br /><span className='team-title-bold'>TEAM</span></p>
                <Row gutter={{ xs: 4, sm: 48, md: 48, lg: 56, xl: 160, xxl:180}} justify='center' className='team-member-row'>
                    <Col xs={12} sm={8} md={6} lg={4} xl={4}>
                        <p className='team-member-name'>JACE</p>
                        <img className='team-member-avatar' src={JACE} alt="JACE" />
                        <p className='team-member-title'>Project<br />director</p>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} xl={4}>
                        <p className='team-member-name'>JAMIE</p>
                        <img className='team-member-avatar' src={JAMIE} alt="JAMIE" />
                        <p className='team-member-title'>Project<br />manager</p>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} xl={4}>
                        <p className='team-member-name'>SEEYONG</p>
                        <img className='team-member-avatar' src={SEEYONG} alt="SEEYONG" />
                        <p className='team-member-title'>Developer</p>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} xl={4}>
                        <p className='team-member-name'>LOUIS</p>
                        <img className='team-member-avatar' src={LOUIS} alt="LOUIS" />
                        <p className='team-member-title'>Blockchain<br />Developer</p>
                    </Col>
                    <Col xs={12} sm={8} md={6} lg={4} xl={4}>
                        <p className='team-member-name'>JACOB</p>
                        <img className='team-member-avatar' src={JACOB} alt="JACOB" />
                        <p className='team-member-title'>Visual<br />director</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Main;