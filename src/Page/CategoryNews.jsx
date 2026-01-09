import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const[categoryNews,setCategoryNews]=useState([])
    const {id}=useParams()
    const data=useLoaderData()
    // console.log(id,data)
    useEffect(()=>{
        if(id=="0"){
            setCategoryNews(data)
            return
        }else if(id =="1"){
            const filteredNews=data.filter((news)=>news.others.is_today_pick == true);
            setCategoryNews(filteredNews)
        }else{

            const filterNews=data.filter(news=>news.category_id ==id)
           setCategoryNews(filterNews)
        }

    },[id,data])

    return (
        <div>
            <h1>total:{categoryNews.length}</h1>

            <div className='grid grid-cols-1 mb-5 gap-5' >
                {categoryNews.map(news=>
                <NewsCard
                key={news.id}
                news={news}
                ></NewsCard>)}
            </div>


        </div>
    );
};

export default CategoryNews;