import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    return (
        <div>
            Dragon News Home-{id}
        </div>
    );
};

export default CategoryNews;