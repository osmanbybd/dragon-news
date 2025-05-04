import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../SocialLogin/FindUs';
import Qzone from '../SocialLogin/Qzone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
           <SocialLogin></SocialLogin>
           <FindUs></FindUs>
           <Qzone></Qzone>
        </div>
    );
};

export default RightAside;