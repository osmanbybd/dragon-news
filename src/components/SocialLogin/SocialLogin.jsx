import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold'>Log In With</h1>
            <div className='flex flex-col space-y-3 mt-5'>
                <button className='btn btn-outline btn-secondary'><FcGoogle size={24}/>Login With Google</button>
                <button className='btn btn-outline btn-primaryj'><FaGithub size={24} /> Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;