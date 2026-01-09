import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div>
           {news.title}
           <img src={news.image_url} alt="" />
        </div>
    );
};

export default NewsCard;