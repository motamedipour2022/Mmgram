import Image from 'next/image';
import React from 'react'

export default function Header() {
  return <div>
    {/* left */}
    <div className='flex items-center justify-between max-w-6xl'>
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
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
        <h1>Right side</h1>
    </div>
    
    </div>
    {/* middle */}


    {/* right */}

    
  
}
