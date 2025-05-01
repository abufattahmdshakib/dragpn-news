import React from 'react';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col items-center text-black mt-10'>
            <img src={logo} alt="logo" />
            <p className='text-[20px] text-accent'>Journalism Without Fear or Favour</p>
            <div className='flex '>
            <p className='text-2xl font-medium'>{format(new Date (), "EEEE")}</p>
            <p className='text-2xl font-medium text-accent'>{format(new Date (), " , MMMM  MM , yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;