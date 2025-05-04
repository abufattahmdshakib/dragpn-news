import React from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import star from '../../assets/star.png'
const NewsCaed = ({ newsCard }) => {
    const { title, thumbnail_url, details, total_view } = newsCard;
    const formattedDate = new Date (newsCard.author.published_date).toLocaleDateString();
    return (
        <div>
            <div className='shadow-2xl mb-8 p-2'>
                <div className='flex  justify-between items-center bg-base-300 px-3 py-2 rounded-sm'>
                    <div className='flex gap-5 '>
                        <img className='w-10 rounded-full' src={newsCard.author.img} alt="" />
                        <div>
                            <h1 className='font-bold'>{newsCard.author.name}</h1>
                            <h3>{formattedDate}</h3>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <button className='btn'><FaRegBookmark /></button>
                        <button className='btn'><IoShareSocialOutline /></button>
                    </div>
                </div>
                <h1 className='text-xl font-bold my-4'>{title}</h1>
                <img className='rounded-sm mb-5' src={thumbnail_url} alt="" />
                <div className='text-accent mb-5'>
                    {details.length > 100 ? (
                        <>
                        {details.slice(0, 200)}...<span className='cursor-pointer font-bold text-amber-500  hover:underline'>Read More</span>
                        </>
                    ) : (
                        details
                    )}
                </div>
                <div className='border-t-2 border-gray-300 border-dashed  items-center flex justify-between'>
                    <div className='flex '>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <p className='ml-2'>{newsCard.rating.badge}</p>
                    <p className='ml-2'>{newsCard.rating.number}</p>
                    </div>
                    <p className='flex items-center gap-2 py-2'><FaEye /> {total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCaed;