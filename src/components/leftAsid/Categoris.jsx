import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoriePromis = fetch('/categories.json').then((res) => res.json())

const Categoris = () => {

   const categoreis = use(categoriePromis)
 
    return (
        <div>
            <h1 className='font-bold'>All Categoris</h1>
            <div className='grid grid-cols-1 mt-4 gap-3'>
                {
                    categoreis.map(category =>  <NavLink 
                        className={"btn bg-base-100 border-none hover:bg-base-200 font-semibold"}
                        key={category.id}
                        to={`/category/${category.id}`}
                        >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categoris;