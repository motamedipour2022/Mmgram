import React from 'react';
import { DotsHorizontalIcon, HeartIcon, ChatIcon ,BookmarkIcon } from '@heroicons/react/outline';

export default function Post({img, userImg, caption, username, id}) {
  return (
    <div className='bg-white my-7 border rounded-md'>
        {/* post header */}
        <div className='flex items-center p-5'>
          <img className='h-12 rounded-full object-cover border p-1 mr-3 ' src={userImg} alt='mm'/>
          <p className='font-bold flex-1 '>{username}</p>
          <DotsHorizontalIcon className='h-5'/>
        </div>
        {/* post img */}

        <img className='object-cover w-full' src={img}/>

        {/* post Button  */}
        <div className='flex justify-between px-4 pt-4'>
            <div className='flex space-x-4'>
                <HeartIcon className='btn'/>
                <ChatIcon className='btn'/>
            </div>
            <BookmarkIcon className='btn'/>
        </div>



    </div>
  );
  
}
