import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header/Header';
import HomeLeft from '../components/HomeLayout/HomeLeft';
import HomeRight from '../components/HomeLayout/HomeRight';


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                
            </header>
            <main className='w-11/12 mx-auto my-8 gap-5 grid grid-cols-12'>
                <aside className='col-span-3'><HomeLeft></HomeLeft></aside>
                <section className='main col-span-6'><Outlet></Outlet></section>
                <aside className='col-span-3'><HomeRight></HomeRight></aside>
            </main>
        </div>
    );
};

export default HomeLayout;