import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCaed from './NewsCaed';

const CategoryNews = () => {

    const { id } = useParams();
    const paramsId = parseInt(id)

    const newsData = useLoaderData();
    const [showNews, setShowNews] = useState([]);

    useEffect(() => {
        if (paramsId == 0) {
            setShowNews(newsData);
            return;
        }
        else if (paramsId == 1) {
            const filterNewsData = newsData.filter(news => news.others.is_today_pick === true);
            setShowNews(filterNewsData);
        }
        else {
            const filterNewsData = newsData.filter(news => news.category_id === paramsId);
            setShowNews(filterNewsData);
        }
    }, [newsData, paramsId]);


    return (
        <div>
            <p className='text-2xl font-bold mb-5'>Dragon News Home {showNews.length}</p>
            <div className='grid grid-cols-1 gap-4'>
                { 
                    showNews.map((newsCard) => (<NewsCaed key={newsCard.id} newsCard={newsCard}></NewsCaed>))
                }
            </div>
        </div>
    );
};

export default CategoryNews;