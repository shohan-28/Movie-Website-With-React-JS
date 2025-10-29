import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeartCirclePlus, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const MovieCart = (props) => {
    console.log(props.CartData.title);
    let { card_picture, title, released_date, platform, rating, } = props.CartData;

    return (
            
                <div className="flex flex-col items-center transform transition duration-300 hover:scale-105">
                    <div>
                        <img
                            src={card_picture}
                            alt=""
                            className="h-[250px] w-full object-cover rounded-md"
                        />
                    </div>
                    <div className="mt-2 text-start h-[150px] w-full space-y-1 ">
                        <div className='flex justify-between items-center'>
                            <p className=" text-white font-bold text-lg">{title}</p>
                            <div className='flex pl-2'>
                                <p><FontAwesomeIcon icon={faEye} className="text-base text-white pr-1" /></p>
                                <p><FontAwesomeIcon icon={faHeartCirclePlus} className="text-base text-red-500" /></p>
                            </div>
                        </div>
                        <p className='text-white'>{released_date}</p>
                        <div className='flex justify-between'>
                            <p className='h[8px] w-[50px] bg-amber-400 text-black font-bold rounded-md flex justify-center items-center text-sm'>{platform}</p>
                            <p className='text-white'><FontAwesomeIcon icon={faStarHalfStroke} className="text-base text-amber-400" /> {rating}</p>
                        </div>
                    </div>
                </div>
    );
};

export default MovieCart;