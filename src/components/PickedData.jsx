import React from 'react'
import ProfileIcon from '../../public/profile1.jfif'
import { useNavigate } from 'react-router-dom'

export default function PickedData({ props, topicsData,firstImage  ,firstImageName,secondImage ,secondImageName }) {

  const navigate = useNavigate();

  function passtoDebate(){
    props(topicsData,firstImage,secondImage,firstImageName,secondImageName);
    navigate('/generate')
  }

  return (
    <div>
      <div className='flex justify-between px-20 pt-3 xs:pt-6 xs:px-16 md:px-16'>
        <p className='text-center'>Opponent A</p>
        <p className='text-center'>Opponent B</p>
      </div>

      <div className='flex justify-between pt-7 px-20 xs:px-24'>
          <div className='border border-black px-4 py-5'>
              <img src={firstImage?firstImage:ProfileIcon } alt='sam-altsman' className='box-for-opponent-and-topic' />
              <p className=' text-xs text-center cursor-text'>{firstImageName}</p>
          </div>

          <div className='border border-black px-4 py-5'>
              <img src={secondImage?secondImage:ProfileIcon} alt='Tim Cook' className='box-for-opponent-and-topic' />    
              <p className='text-xs text-center cursor-text'>{secondImageName}</p>
          </div>
      </div>

      <div>
        <p className='text-center pt-8'>Topics Selected:</p>
        <p className='text-center pt-2 text-xs'>Topic: {topicsData}</p>
      </div>

      <div className='flex justify-center py-4'>
          <button className='bg-black rounded-lg text-white px-5 py-2 text-xs' onClick={passtoDebate}>Generate</button>
      </div>

    </div>
  )
}

{/* <div className='ml-24 h-96 mt-16 border-t-2 border-zinc-900 '>
      <p className='text-center ml-10 mr-10 mt-1' >Your<span onDoubleClick={hidetextonclick} onClick={showtextOnclick} className='bg-stone-700 text-white ml-1 cursor-pointer text-xs rounded p-1'>{showText?"Opponent And topics.":'<>'}</span></p>

      <div className='flex font-bold justify-between ml-10 mr-10 mt-3'>
        <p>Opponent A</p>
        <p>Opponent B</p>
      </div>


        <div className='flex justify-between mt-1'>

            <div className='box-data'>
                <img src={firstImage?firstImage:ProfileIcon } alt='sam-altsman' className='box-for-opponent-and-topic' />
                <p className='font-bold text-sm text-center cursor-text'>{firstImageName}</p>
            </div>

            <div className='box-data'>
                <img src={secondImage?secondImage:ProfileIcon} alt='Tim Cook' className='box-for-opponent-and-topic' />    
                <p className='font-bold text-sm text-center cursor-text'>{secondImageName}</p>
            </div>

        </div>

      
      <div className='flex flex-col items-center mt-10'>
        <p className='bg-zinc-800 text-sm text-white pt-1 pb-1 pl-3 pr-3 rounded-md'>Topic</p>
        <p className='text-xl  pl-3 pr-3 pt-4 border-red-800 border-b-2 '>{topicsData}</p>
      </div>

      <div className=' mt-10 flex justify-center'>
      <button className='bg-zinc-900 text-white pt-1 pb-1 pl-4 pr-4 rounded-md text-center mb-5 ' onClick={passtoDebate}>Generate</button>
      </div>

    </div> */}
