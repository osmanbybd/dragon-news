import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import RightAside from '../components/rightAside/RightAside';
import NewsDetailsCaed from './NewsDetailsCaed';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {


    const data = useLoaderData()
    const {id} =useParams()
    const [news, setNews] = useState({})
    // console.log(data,id)

    useEffect(() =>{

        const newsDetails = data.find(singleData => singleData.id === id)
        setNews(newsDetails)

    }, [data,id])
        


    return (
        <div>
           <header>
            <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
            <section className='col-span-9'>
            <h1 className='text-2xl font-bold py-4'>Dragon News</h1>
                <NewsDetailsCaed news={news}></NewsDetailsCaed>
            </section>
            <aside className='col-span-3 sticky top-0 h-fit'>
                <RightAside></RightAside>
            </aside>
           </main>
        </div>
    );
};

export default NewsDetails;