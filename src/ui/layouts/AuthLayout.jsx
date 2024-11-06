import React from 'react';
import Header from '../components/Header';
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
        <div className='space-y-4 p-4 bg-slate-100 h-screen font-stc text-violet-900'>
            <Header/>
           
                <div className='w-full'>

                    <Outlet/>

                </div>

        </div>
    );
}

export default MainLayout;