import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import LeftAside from './LeftAside';

const HomeLayout = () => {
    return (
        <div>
            <header></header>
            <Navbar></Navbar>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 '>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'><Outlet></Outlet></section>
                <section className='col-span-3'>Right-Side</section>
            </main>
        </div>
    );
};

export default HomeLayout;