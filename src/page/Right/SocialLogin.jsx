import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-medium text-2xl mb-5'> Login With</h1>
            <div className='space-y-3'>
                <button className='btn btn-outline  text-secondary w-full'> <FcGoogle size={24}/> Login With Google</button>
                <button className='btn btn-outline w-full'><FaGithub size={24} /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;