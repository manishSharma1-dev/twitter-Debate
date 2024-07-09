import React, { useState } from 'react'
import Opponents from './Opponents'
import Topics from './Topics'
import PickedData from './PickedData'

export default function Header() {
  const [ oneOnOne, setOneOnOne] = useState(false)
  const [ opponentSection,SetOpponentSection ] = useState(false);
  const [ topicSection,SetTopicSection ] = useState(false);


  function handleOneOnOne(){
    setOneOnOne(true)
  }

  function ClearChooseContainer(){
    setOneOnOne(false)
  }

  function showOpponentSection(){
    SetTopicSection(false)
    SetOpponentSection(true)
  }

  function showTopicsSection(){
    SetTopicSection(true)
    SetOpponentSection(false)
  }

  return (
     <div className='mt-2 mb-10 ml-1 mr-1'>
        <p className='text-center text-2xl'>Watch twiter debate for what person you ever want.</p> 
        <h1 className='text-3xl font-bold  text-center mt-5'>Choose Opponents</h1>
        <div className='flex justify-between mt-16 underline underline-offset-4 '>
            <p className='cursor-pointer hover:underline underline-offset-4 relative  hover:text-rose-800' onClick={handleOneOnOne} >One on One</p>
            <p className='cursor-pointer hover:underline underline-offset-4 hover:text-rose-800'>multiple</p>
        </div>

        {oneOnOne === true? (  <div className= 'choose-container bg-black text-white flex justify-between w-72 pt-2 pb-2 mt-3 rounded-2xl text-sm box-border pl-4 pr-4 items-center' >
          <p className='cursor-pointer hover:text-orange-400' onClick={showOpponentSection}>Choose Oponents</p>
          <p className='cursor-pointer  hover:text-orange-400'onClick={showTopicsSection}>Topics</p>
          <p className='cursor-pointer text-xs bg-gray-300 text-black pl-2 pr-2 pt-1 pb-1 rounded-lg hover:opacity-55' onClick={ClearChooseContainer}>cancel</p>
        </div>) : ('') }
        
        <div className='flex flex-1 justify-between gap-10 ' >
          <div>
              { opponentSection ? (<Opponents />) :  ('') }
              { topicSection ? (<Topics />) :  ('') }
          </div>
          <PickedData /> 
        </div>

    </div>
  )
}

