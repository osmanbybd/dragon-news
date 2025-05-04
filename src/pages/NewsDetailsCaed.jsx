import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCaed = ({news}) => {
    // console.log(news)
    return (
        <div className='space-y-6'>
                <img className='w-full h-[450px] object-cover' src={news.image_url} alt="" />
                <h1 className='text-2xl font-semibold'>{news.title}</h1>
                <p>{news.details}</p>

                <Link  to={`/category/${news.category_id}`} className='btn btn-secondary '>Back to category</Link>
        </div>
    );
};

export default NewsDetailsCaed;