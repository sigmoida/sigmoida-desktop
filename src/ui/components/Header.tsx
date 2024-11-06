import { CircleUserRound } from 'lucide-react';

const Header = () => {
    return (

            <div className='p-4 bg-gray-200 flex justify-between items-center rounded-lg max-h-16'>
                <img src="src/ui/assets/logo.png" alt="logo"  className='h-12'/>

                <div className='rounded-lg items-center h-full p-2 text-md flex gap-2 cursor-pointer ring-violet-900 hover:ring-2'>
                    <CircleUserRound className='text-red-500'/>
                    <div>Admin</div>
                </div>
            </div>

    );
}

export default Header;