import React, { useState } from 'react'
import img1 from '../../public/SamAltsman.jfif'
import img2 from '../../public/TimCook.jfif'
import img3 from '../../public/SundarPichai.jfif'
import img4 from '../../public/Billgates.jfif'
import img5 from '../../public/SteveJobs.jfif'
import img6 from '../../public/Issac.jfif'
import img7 from '../../public/ElonMusk.jfif'
import img8 from '../../public/Nividia.jfif'
import img9 from '../../public/Modiji.jfif'
import img10 from '../../public/Andrew.jfif'

const images = [
  {
    id : 1,
    image : img1,
    name : 'Sam Altsman',
  },
  {
    id :2,
    image : img2,
    name : 'Tim Cook',
  },
  {
    id :3,
    image : img3,
    name : 'Sundar Pichai',
  },
  {
    id :4,
    image : img4,
    name : 'Bill Gate',
  },
  {
    id :5,
    image : img5,
    name : 'Steve Job',
  },
  {
    id :6,
    image : img6,
    name : 'Issac',
  },
  {
    id :7,
    image : img7,
    name : 'Elon Musk',
  },
  {
    id :8,
    image : img8,
    name : 'Cheng',
  },
  {
    id :9,
    image : img9,
    name : 'Modi Ji',
  },
  {
    id :10,
    image : img10,
    name : 'Andrew',
  },
]

export default function Opponents({props}) {


  return (
    <div className='flex justify-between flex-wrap gap-7 mt-16 mb-10' >

      {images.map((image)=>(
        <div className='box-for-opponent' key={image.id} onClick={()=> {
          props(image.image, image.name)
          }} >

          <img src={image.image} alt='Andrew Tate' className='images-section' />
          <p className='font-bold text-sm text-center cursor-text'>{image.name}</p>
        </div>
      ))}

    </div>
  )
}
