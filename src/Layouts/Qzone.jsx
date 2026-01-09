import React from 'react';
import playground from '../assets/playground.png'
import classPic from '../assets/class.png'
import swimming from '../assets/swimming.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-5'>
           <h1>Qzone </h1> 
           <div>
            <img src={playground} alt="" />
            <img src={swimming} alt="" />
            <img src={classPic} alt="" />
           </div>
        </div>
    );
};

export default Qzone;