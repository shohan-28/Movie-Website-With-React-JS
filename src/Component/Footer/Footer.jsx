import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 container mx-auto pt-5 pb-5'>
            <div>
                <h2 className='text-amber-400 text-4xl'>Dramatic</h2>
                <p>Enjoy your Movie time</p>
            </div>
            <div className='text-white flex flex-col space-y-1'>
                <p className='text-gray-400 pb-2'>NAVIGATION</p>
                <a href='#'>HOME</a>
                <a href='#'>TV SHOW</a>
                <a href='#'>MOVIES</a>
                <a href='#'>NEW</a>
            </div>
            <div className='text-white flex flex-col space-y-1'>
                <p className='text-gray-400 pb-2'>LEGAL</p>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms of Service</a>
                <a href='#'>Cookie Preferences</a>
                <a href='#'>Corporate Information</a>
            </div>
            <div className='text-white flex flex-col space-y-1'>
                <p className='text-gray-400 pb-2'>TALK TO US</p>
                <a href='#'>support@ercom.com</a>
                <a href='#'>+66 2399 1145</a>

            </div>
            <div className='space-x-2'>
                <p className='text-gray-400 pb-2'>FOLLOW US</p>
                <div className='flex'>
                    <p><FontAwesomeIcon icon={faTwitter} className="text-2xl text-white" /></p>
                    <p><FontAwesomeIcon icon={faYoutube} className="text-2xl text-white" /></p>
                    <p><FontAwesomeIcon icon={faFacebookF} className="text-2xl text-white" /></p>
                </div>

            </div>
        </div>
    );
};

export default Footer;