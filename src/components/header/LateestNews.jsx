import React from 'react';
import Marquee from "react-fast-marquee";

const LateestNews = () => {
    return (
        <div className='flex gap-8 justify-normal items-center bg-base-200'>
            <p className='text-base-100 bg-secondary px-4 py-1 my-2 ml-5'>Latest</p>
            <Marquee pauseOnHover={true}>
                <p className='text-gray-700 font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...     Bangladesh Army Chief General Waker-uz-Zaman departed for Qatar on an official visit today.
                    During the visit, he will hold courtesy meetings and exchange views with senior military and civilian officials of Qatar, aiming to strengthen bilateral cooperation in military affairs.</p>
            </Marquee>

        </div>
    );
};

export default LateestNews;