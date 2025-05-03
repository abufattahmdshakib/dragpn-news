import React from 'react';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';
import LateestNews from './LateestNews';
import Navbar from './Navbar';


const Header = () => {
    return (
        <div>
            <div className='flex flex-col items-center text-black mt-10'>
                <img src={logo} alt="logo" />
                <p className='text-[20px] text-accent'>Journalism Without Fear or Favour</p>
                <div className='flex '>
                    <p className='text-2xl font-medium'>{format(new Date(), "EEEE")}</p>
                    <p className='text-2xl font-medium text-accent'>{format(new Date(), " , MMMM  MM , yyyy")}</p>
                </div>
            </div>
            <section className='w-10/12 mx-auto my-5'><LateestNews></LateestNews></section>
            <nav className='w-10/12 mx-auto my-5'><Navbar></Navbar></nav>
        </div>
    );
};

export default Header;