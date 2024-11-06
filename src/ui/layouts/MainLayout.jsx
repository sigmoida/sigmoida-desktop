import React from 'react';
import Header from '../components/Header';
import Drawer from '../components/Drawer';
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
        <div className='space-y-4 p-4 bg-slate-100 h-screen font-stc text-violet-900'>
            <Header/>
            <div className='flex gap-4'>

                <Drawer/>

                <div className='w-full'>

                    <Outlet/>

                </div>

            </div>
        </div>
    );
}

export default MainLayout;