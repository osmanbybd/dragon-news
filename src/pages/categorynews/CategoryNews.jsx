import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../components/NewsCard/NewsCard';

const CategoryNews = () => {

    const {id} = useParams();
    const data = useLoaderData()
    const [categoryNews, setCategoryNew] = useState([])

    // console.log(data)

        useEffect(() => {


            if(id == "0"){
                setCategoryNew(data)
                return
            }
            else if(id == "1"){
                const filterNews = data.filter(news => news.others.is_today_pick == true )
                setCategoryNew(filterNews)
            }
            else{
                const filterNews = data.filter(news => news.category_id == id )
                setCategoryNew(filterNews)
                
            }


        }, [data,id])

    return (
        <div>
            Total {categoryNews.length} news found


            <div className='gap-3 grid grid-cols-1 mt-10'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
            
        </div>
    );
};

export default CategoryNews;