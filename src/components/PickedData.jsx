import React, { useState } from 'react'

// import img1 from '../../public/SamAltsman.jfif'
// import img2 from '../../public/TimCook.jfif'
import { useNavigate } from 'react-router-dom'

export default function PickedData({ props, topicsData,firstImage  ,firstImageName,secondImage ,secondImageName }) {
  const navigate = useNavigate();
  // const [count,setCount] = useState(0)

  function passtoDebate(){
    props(topicsData,firstImage,secondImage,firstImageName,secondImageName);
    navigate('/generate')
  }

  return (
    <div className='ml-24 h-96 mt-16 border-t-2 border-zinc-900 '>
      <p className='text-center text-sm ml-10 mr-10'>this is showing data of what oponent you select and what topics </p>

      <div className='flex font-bold justify-between ml-10 mr-10 mt-3'>
        <p>Opponent A</p>
        <p>Opponent B</p>
      </div>

      {/* for opponent section starts here */}

        <div className='flex justify-between mt-1'>

            <div className='box-data'>
                <p className='text-sm text-center cursor-text'></p>
                <img src={firstImage} alt='sam-altsman' className='box-for-opponent-and-topic' />
                <p className='font-bold text-sm text-center cursor-text'>{firstImageName}</p>
            </div>

            <div className='box-data'>
                <img src={secondImage} alt='Tim Cook' className='box-for-opponent-and-topic' />    
                <p className='font-bold text-sm text-center cursor-text'>{secondImageName}</p>
            </div>

        </div>

      {/* for opponent section ends here */}
      
      <div className='flex flex-col items-center mt-10'>
        <p className='bg-zinc-800 text-sm text-white pt-1 pb-1 pl-3 pr-3 rounded-xl'>Topic</p>
        <p className='text-2xl pl-3 pr-3'  >{topicsData}</p>
      </div>

      <div className=' mt-10 flex justify-center'>
      <button className='bg-zinc-900 text-white pt-1 pb-1 pl-4 pr-4 rounded-xl text-center mb-5 ' onClick={passtoDebate}>Generate</button>
      </div>

    </div>
  )
}
