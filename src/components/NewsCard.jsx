import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div className=' shadow-md bg-base-100 '>

           {news.title}
           <img src={news.image_url} alt="" />
           <p>{news.details}</p>
        </div>
    );
};

export default NewsCard;