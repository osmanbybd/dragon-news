import React from 'react';
import swimingIng from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playGround from '../../assets/playground.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 p-5 rounded-lg'>
            <h1 className='font-bold'>Q-Zone</h1>
            <div className='flex flex-col items-center space-y-5'>
                <img src={swimingIng} alt="" />
                <img src={classImg} alt="" />
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default Qzone;