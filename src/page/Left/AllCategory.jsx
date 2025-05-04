import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromes = fetch("/categories.json").then((response) => response.json());
const AllCategory = () => {
    const categoryPromesData =use(categoryPromes);



    return (
        <div>
            <h1 className='text-xl font-bold'>All Caterogy</h1>
            <div className='grid grid-cols-1 gap-3 mt-6'>
                {
                    categoryPromesData.map(( categoryData) => <NavLink to={`/Category/${categoryData.id}`} className={"btn bg-base-100 border-0  hover:bg-base-200 text-accent"} key={categoryData.id}>{categoryData.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default AllCategory;