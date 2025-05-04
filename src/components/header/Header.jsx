import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center my-6'>
            <img src={logo} alt="" />
            <p className='text-accent mt-3'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date (), "EEEE, MMMM ,dd , yyyy")}</p>
            <p className='font-semibold text-accent'>{format(new Date (), "hh.mm. ss a")}</p>
        </div>
    );
};

export default Header;