import React, { Suspense } from 'react';
import Categories from '../components/Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-bars loading-lg">Loading....</span>}>
                
          <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;