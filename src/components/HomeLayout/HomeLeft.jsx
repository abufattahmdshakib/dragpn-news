import React, { Suspense } from 'react';
import AllCategory from '../../page/Left/AllCategory';

const HomeLeft = () => {
    return (
        <div>
           <div>
            <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
            <AllCategory></AllCategory>
            </Suspense>
            </div>
        </div>
    );
};

export default HomeLeft;