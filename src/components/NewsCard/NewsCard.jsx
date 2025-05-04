import React from 'react';
import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';
import { format } from 'date-fns';
import { FcBookmark } from 'react-icons/fc';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    author,
    title,
    details,
    rating,
    total_view,
    thumbnail_url,
    tags,
    id
  } = news;

  return (
    <div className="bg-white p-4 rounded shadow-md space-y-4">
      {/* Author Info */}
      <div className="flex items-center justify-between bg-base-200 p-3 rounded -mx-4 -mt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), 'yyyy-MM-dd')}
            </p>
          </div>
        </div>
        <div>
            <button className='flex items-center gap-2'>
            <FcBookmark size={25} className='cursor-pointer'/>
            <FaShareAlt size={18} className="text-gray-500 cursor-pointer" />
            </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800">
        {title}
      </h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="news"
        className="w-full h-56 object-cover rounded"
      />

      {/* Details */}
      <p className="text-sm text-gray-700">
        {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer">
          {' '}Read More
        </Link>
      </p>

      {/* Tags (optional display) */}
      <p className="text-xs text-gray-400">
        Tags: {tags?.join(', ')}
      </p>

      {/* Footer: Rating & Views */}
      <div className="flex justify-between items-center border-t pt-3 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(Math.round(rating.number))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-800 font-semibold ml-1">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
