import React, { useState } from 'react'
import ProfileIcon from '../../public/profile1.jfif'

// import img1 from '../../public/SamAltsman.jfif'
// import img2 from '../../public/TimCook.jfif'
import { useNavigate } from 'react-router-dom'

export default function PickedData({ props, topicsData,firstImage  ,firstImageName,secondImage ,secondImageName }) {
  const [showText,setShowText] = useState(false)
  const navigate = useNavigate();
  // const [count,setCount] = useState(0)

  function passtoDebate(){
    props(topicsData,firstImage,secondImage,firstImageName,secondImageName);
    navigate('/generate')
  }

  function showtextOnclick(){
    setShowText(true)
  }

  function hidetextonclick(){
    setShowText(false)
  }

  return (
    <div className='ml-24 h-96 mt-16 border-t-2 border-zinc-900 '>
      <p className='text-center ml-10 mr-10 mt-1' >Your<span onDoubleClick={hidetextonclick} onClick={showtextOnclick} className='bg-stone-700 text-white ml-1 cursor-pointer text-xs rounded p-1'>{showText?"Opponent And topics.":'<>'}</span></p>

      <div className='flex font-bold justify-between ml-10 mr-10 mt-3'>
        <p>Opponent A</p>
        <p>Opponent B</p>
      </div>

      {/* for opponent section starts here */}

        <div className='flex justify-between mt-1'>

            <div className='box-data'>
                <p className='text-sm text-center cursor-text'></p>
                <img src={firstImage?firstImage:ProfileIcon } alt='sam-altsman' className='box-for-opponent-and-topic' />
                <p className='font-bold text-sm text-center cursor-text'>{firstImageName}</p>
            </div>

            <div className='box-data'>
                <img src={secondImage?secondImage:ProfileIcon} alt='Tim Cook' className='box-for-opponent-and-topic' />    
                <p className='font-bold text-sm text-center cursor-text'>{secondImageName}</p>
            </div>

        </div>

      {/* for opponent section ends here */}
      
      <div className='flex flex-col items-center mt-10'>
        <p className='bg-zinc-800 text-sm text-white pt-1 pb-1 pl-3 pr-3 rounded-xl'>Topic</p>
        <p className='text-xl  pl-3 pr-3 pt-4 border-red-800 border-b-2 '>{topicsData}</p>
      </div>

      <div className=' mt-10 flex justify-center'>
      <button className='bg-zinc-900 text-white pt-1 pb-1 pl-4 pr-4 rounded-xl text-center mb-5 ' onClick={passtoDebate}>Generate</button>
      </div>

    </div>
  )
}
