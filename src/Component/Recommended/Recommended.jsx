import React from 'react';

const Recommended = () => {
    return (
        <div>
            <div className='space-y-4 pt-10 pb-10'>
                <div className=''>
                    <p className='text-white font-bold text-2xl'>Recommended For You</p>
                </div>
                <div className='flex space-x-2 '>
                    <p className='h-[40px] w-[60px] border-1 rounded-3xl text-xl flex justify-center items-center border-amber-300 text-white hover:bg-amber-400'>All</p>
                    <p className='h-[40px] w-[120px] border-1 rounded-3xl text-xl flex justify-center items-center border-amber-300 text-white hover:bg-amber-400'>Bollywood</p>
                    <p className='h-[40px] w-[120px] border-1 rounded-3xl text-xl flex justify-center items-center border-amber-300 text-white hover:bg-amber-400'>Tollywood</p>
                    <p className='h-[40px] w-[120px] border-1 rounded-3xl text-xl flex justify-center items-center border-amber-300 text-white hover:bg-amber-400'>Mollywood</p>
                    <p className='h-[40px] w-[120px] border-1 rounded-3xl text-xl flex justify-center items-center border-amber-300 text-white hover:bg-amber-400'>Hollywood</p>
                </div>
            </div>
        </div>
    );
};

export default Recommended;