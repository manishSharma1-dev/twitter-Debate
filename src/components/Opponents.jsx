import React from 'react'
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
    name : 'SamAltsman',
    shortNote : 'CEO of Open Ai'
  },
  {
    id :2,
    image : img2,
    name : 'TimCook',
    shortNote : 'Current CEO of Apple company'
  },
  {
    id :3,
    image : img3,
    name : 'SundarPichai',
    shortNote : 'CEO of Google'
  },
  {
    id :4,
    image : img4,
    name : 'BillGate',
    shortNote : 'Previos CEO of Microsoft'
  },
  {
    id :5,
    image : img5,
    name : 'SteveJob',
    shortNote : 'Previous CEO of Apple'
  },
  {
    id :6,
    image : img6,
    name : 'Issac',
    shortNote : 'A scientist Gave Netwon laws'
  },
  {
    id :7,
    image : img7,
    name : 'ElonMusk',
    shortNote : 'CEO of twitter,tesla,spacex and more'
  },
  {
    id :8,
    image : img8,
    name : 'Cheng',
    shortNote : 'CEO of nnividia'
  },
  {
    id :9,
    image : img9,
    name : 'ModiJi',
    shortNote : 'PrimeMinister of India'
  },
  {
    id :10,
    image : img10,
    name : 'Andrew',
    shortNote : 'A online influencer that teaches how to make money online'
  },
]

export default function Opponents({props}) {


  return (
    <div className='flex justify-between flex-wrap gap-y-5 gap-x-3 pt-5 md:px-16 xs:px-24' >

      {images.map((image)=>(
        <div className='border border-black border-opacity-35 px-5 py-5' key={image.id} onClick={()=> {
          props(image.image, image.name)
          }} >

          <img src={image.image} alt='Andrew Tate' className='rounded-[50%] w-16 h-16' />
          <p className='text-xs text-center cursor-text'>{image.name}</p>
        </div>
      ))}

    </div>
  )
}
