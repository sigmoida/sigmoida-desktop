import { TestTubes,CircleHelp,Settings,LayoutDashboard,SearchCheck, FileChartLine } from 'lucide-react';
import { Link } from "react-router-dom";

const Drawer = () => {
    return (

            <div className='p-4 bg-gray-200 rounded-lg space-y-4 min-w-56'>
                <Link className='rounded-lg bg-slate-100 py-2 px-4 text-md cursor-pointer hover:ring-violet-900 hover:ring-2 flex gap-2 align-center' to={"/workspace"}>

                    <LayoutDashboard className='text-red-500'/>
                    <span>Workspace</span>
                    
                </Link>

                <Link className='rounded-lg bg-slate-100 py-2 px-4 text-md cursor-pointer hover:ring-violet-900 hover:ring-2 flex gap-2 align-center' to={"/analyze"}>

                    <SearchCheck className='text-red-500'/>
                    <span>Analyze</span>

                </Link>

                <Link className='rounded-lg bg-slate-100 py-2 px-4 text-md cursor-pointer hover:ring-violet-900 hover:ring-2 flex gap-2 align-center' to={"/reports"}>

                    <FileChartLine className='text-red-500'/>
                    <span>Reports</span>

                </Link>

                <Link className='rounded-lg bg-slate-100 py-2 px-4 text-md cursor-pointer hover:ring-violet-900 hover:ring-2 flex gap-2 align-center' to={"/samples"}>

                    <TestTubes className='text-red-500'/>
                    <span>Samples</span>

                </Link>

                <Link className='rounded-lg bg-slate-100 py-2 px-4 text-md cursor-pointer hover:ring-violet-900 hover:ring-2 flex gap-2 align-center' to={"/help"}>
                    
                    <CircleHelp className='text-red-500'/>
                    <span>Help</span>
                    
                </Link>
                
                <Link className='rounded-lg bg-slate-100 py-2 px-4 text-md cursor-pointer hover:ring-violet-900 hover:ring-2 flex gap-2 align-center' to={"/settings"}>

                    <Settings className='text-red-500'/>
                    <span>Settings</span>

                </Link>

            </div>

    );
}

export default Drawer;