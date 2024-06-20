import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center w-full">
      <div className='bg-white h-auto w-4/5 mx-auto py-10 rounded-lg flex items-center justify-center'>
        <ColorRing
          visible={true}
          height="40"
          width="40"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#EC5731', '#EC5731', '#EC5731', '#EC5731', '#EC5731']}
        />
      </div>
    </div>
  );
};

export default Loader;
