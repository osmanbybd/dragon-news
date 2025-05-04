import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold mb-5'> Find Us </h1>
            <div>
            <div className="join join-vertical w-full">
            <button className="btn bg-base-100 justify-start join-item"><FaFacebook size={20}></FaFacebook> FaceBook</button>
            <button className="btn bg-base-100 justify-start join-item"><FaTwitter size={20}></FaTwitter> Twitter</button>
            <button className="btn bg-base-100 justify-start join-item"><FaInstagram size={20}></FaInstagram> Instagram</button>
            </div>
            </div>
        </div>
    );
};

export default FindUs;