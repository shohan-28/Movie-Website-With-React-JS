import React from 'react';
import "../Header/Headerfont.css";


const Header = () => {
    return (
        <div className='bg-white/30 backdrop-grayscale-[0.5]'>
            <header className=" container mx-auto text-white px-6 py-4 flex items-center justify-between ">
                
                <div className="text-yellow-400 font-bold tracking-wide ">
                <h1 className='love-ya-like-a-sister-regular text-3xl'>DRAMATIC</h1>
                </div>

             
                <nav className="hidden md:flex space-x-6 text-sm font-semibold">
                    <a href="#" className="hover:text-yellow-400 transition">HOME</a>
                    <a href="#" className="hover:text-yellow-400 transition">SHOWS</a>
                    <a href="#" className="hover:text-yellow-400 transition">MOVIES</a>
                    <a href="#" className="hover:text-yellow-400 transition">NEWS</a>
                </nav>

      
                <div className="flex items-center space-x-4">
            
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Clear Search"
                            className="bg-gray-800 text-sm text-white placeholder-gray-400 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <span className="absolute left-3 top-2.5 text-gray-400">
                            <svg xmlns="" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2.5a7.5 7.5 0 010 14.15z" />
                            </svg>
                        </span>
                    </div>


                    <div className="w-8 h-8 rounded-full border-2 border-yellow-400 overflow-hidden">
                        <img src="" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;