import Image from 'next/image';
import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

export default function Header() {
  return <div>
    {/* left */}
    <div className='flex items-center justify-between max-w-6xl'>
        <div className='cursor-pointer h-28 w-28 relative hidden lg:inline-grid'>
            <Image
                src="https://toppng.com/uploads/preview/instagram-text-115510536100dsjrkf7zx.png"
                layout='fill'
                className='object-contain'
                
            />
        </div>
         <div className='cursor-pointer h-28 w-28 relative lg:hidden '>
            <Image
                src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-icon-instagram-logo-instagram-text-icon-18.png"
                layout='fill'
                className='object-contain'
            />

        </div>
        <div className='relative mt-1' >
                <div className='absolute top-2 left-4 '>
                    <SearchIcon className='h-5 text-gray-500 '/>
                </div>
                <input type="text" placeholder='Search' className='bg-gray-50 pl-11 text-center border-gray-500 rounded-md text-sm focus:ring-black focus:border-black ' />
        </div>
        <h1>Right side</h1>
    </div>
    
    </div>
    {/* middle */}


    {/* right */}

    
  
}
