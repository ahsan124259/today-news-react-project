import React, { useEffect, useState } from 'react';
import RightAside from '../Layouts/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/NewsDetailsCard';


const NewsDetails = () => {
    const[news,setNews]=useState({})
   const data=useLoaderData()
   const{id}=useParams()
   
   useEffect(()=>{
    const newsDetails=data.find((singlenews)=>singlenews.id == id)
    setNews(newsDetails)

   },[data,id])

   

    return (
        <div>
           <header>News-Details</header>
           <main className='w-11/12 mx-auto grid grid-cols-12'>
            <section className='col-span-9'>
               <NewsDetailsCard news={news} ></NewsDetailsCard>
                </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>

           </main>
        </div>
    );
};

export default NewsDetails;