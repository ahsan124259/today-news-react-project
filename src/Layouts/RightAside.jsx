import React from 'react';
import SocialLink from '../components/SocialLink';
import FindUs from './FindUs';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <SocialLink></SocialLink>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;