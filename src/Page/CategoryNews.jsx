import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

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
        </div>
    );
};

export default CategoryNews;