import React from 'react';
import { Link } from 'react-router';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
    return (
        <div>
            <h1 className='text-2xl mt-7 font-bold'>Find Us On</h1>
            <div>
                <div className="join join-vertical w-full mt-5">
                    <button className="btn bg-base-100 justify-start join-item"><FaFacebook /> Facebook</button>
                    <button className="btn bg-base-100 justify-start join-item"><FaTwitter /> Twitter</button>
                    <button className="btn bg-base-100 justify-start join-item"><FaSquareInstagram /> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUsOn;