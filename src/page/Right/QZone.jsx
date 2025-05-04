import React from 'react';
import swimming from '../../assets/swimming.png';
import imgesclass from '../../assets/class.png';
import play from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200'>
            <h1 className='text-2xl font-bold mb-5 pt-4 pl-2'>Q-Zone</h1>
            <div className='space-y-5 p-2'>
                <img className='border-2 border-gray-300 border-dashed' src={swimming} alt="swimming" />
                <img className='border-2 border-gray-300 border-dashed' src={imgesclass} alt="imgesclass" />
                <img className='border-2 border-gray-300 border-dashed' src={play} alt="play" />
            </div>
        </div>
    );
};

export default QZone;