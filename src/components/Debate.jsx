import React from 'react'
import img1 from '../../public/SamAltsman.jfif'
import img2 from '../../public/Billgates.jfif'

export default function Debate() {
  return (
    <div className='text-sm pl-10 pr-10 bg-yellow-100 h-[100vh] pt-20 flex flex-col ml-[18rem] mr-[18rem]' >
       
      <div className='mb-6'>
        <div className='flex justify-start gap-2 items-center'>
            <img src={img1} alt='profile-img' className='rounded-full  w-10 h-10' />

            <div className='flex flex-col text-xs'>
                <p>Full Name</p>
                <p>username</p>
            </div>
        </div>
        
        <p className='mt-2 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magnam quasi adipisci ex repellendus totam! Amet vero fugit eaque nostrum molestias, in recusandae iste odit veritatis.</p>
      </div>

      <div>
        <div className='flex justify-start gap-2 items-center'>
            <img src={img2} alt='profile-img' className='rounded-full w-10 h-10' />

            <div className='flex flex-col text-xs'>
                <p>Full Name</p>
                <p>username</p>
            </div>
        </div>
        
        <p className='mt-2 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magnam quasi adipisci ex repellendus totam! Amet vero fugit eaque nostrum molestias, in recusandae iste odit veritatis.</p>
      </div>

    </div>
  )
}
