import React from 'react';
import SocialLogin from '../../page/Right/SocialLogin';
import FindUsOn from '../../page/Right/FindUsOn';
import QZone from '../../page/Right/QZone';

const HomeRight = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUsOn></FindUsOn>
            <QZone></QZone>
        </div>
    );
};

export default HomeRight;