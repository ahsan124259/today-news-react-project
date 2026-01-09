import React from 'react';
import { Link } from 'react-router';

const NewsCard = ({news}) => {
    const {id,image_url,title,details}=news
    return (
        <div className=' shadow-md bg-base-100 '>
           {title}
           <img src={image_url} alt="" />
           <p>{details}</p>
           <Link to={`/news-details/${id}`}>SeeMore</Link>
        </div>
    );
};

export default NewsCard;