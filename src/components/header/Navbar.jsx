import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mb-16 mt-6'>
            <div className=''></div>

            <div className='nav flex gap-10 text-accent font-bold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
                <NavLink to='/Career'>Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-2'>
                <img className='w-10' src={user} alt="" />
                <button className='text-base-100 px-8 btn  bg-primary'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;