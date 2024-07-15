import React, { useState } from 'react'
import Opponents from './Opponents'
import Topics from './Topics'
import PickedData from './PickedData'


export default function Header({ getalldatafromHeader }) {
  const [ TopicsState,setTopicState ] = useState('Choose Topics')
  // for image 
  const [firstImage,setFirstImage] = useState('')
  // for Name 
  const [ firstImageName , setFirstImageName] = useState('')
  // for Image 
  const [secondImage,setSecondImage] = useState('')
  // for naem 
  const [ secondImageName , setSecondImageName] = useState('')


  // usestae for navigation or showing component 
  const [ oneOnOne, setOneOnOne] = useState(false)
  const [ opponentSection,SetOpponentSection ] = useState(true);
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

  function openGithub(){
    window.open('https://github.com/manish-sharma-dev')
  }

  // ---------------------------------------------------------------
  function topicsSelection(data){
    setTopicState(data)
  }

  function opponentAfind(image,name){
    if(!firstImage){
      setFirstImage(image)
      setFirstImageName(name)
    } else if (!secondImage){
      setSecondImage(image)
      setSecondImageName(name)
    } else {  
      setFirstImage(image);
      setFirstImageName(name);
      setSecondImage('');
      setSecondImageName('');
    }
  }

  function finddatafromPickeddata(topicsData,firstImage,secondImage,firstImageName,secondImageName){
    getalldatafromHeader(topicsData,firstImage,secondImage,firstImageName,secondImageName)
    console.log("data passesd successuflly from the header to the app.js")
  }

  return (
     <div className='mt-2 mb-10 ml-1 mr-1'>
        <p className='text-center text-xl'>Generate Twitter Debates...</p> 
        <h1 className='text-2xl font-bold  text-center mt-5'>Choose  <span className='underline underline-offset-4 decoration-red-700 decoration-wavy '>Opponents</span></h1>
        <div className='flex justify-between mt-16 underline underline-offset-4 '>
            <p className='cursor-pointer hover:underline underline-offset-4 relative text-sm font-bold  hover:text-rose-800' onClick={handleOneOnOne} >One on One</p>
            <p className='cursor-pointer hover:underline underline-offset-4' onClick={openGithub}>Check on <span className='text-sm underline underline-offset-4 decoration-violet-700 text-rose-700 font-bold' onClick={openGithub}> Github</span></p>
        </div>

        {oneOnOne === true? (  <div className= 'choose-container bg-black text-white flex justify-between w-72 pt-2 pb-2 mt-3 rounded-2xl text-sm box-border pl-4 pr-4 items-center' >
          <p className='cursor-pointer hover:text-orange-400' onClick={showOpponentSection}>Choose Oponents</p>
          <p className='cursor-pointer  hover:text-orange-400'onClick={showTopicsSection}>Topics</p>
          <p className='cursor-pointer text-xs bg-gray-300 text-black pl-2 pr-2 pt-1 pb-1 rounded-lg hover:opacity-55' onClick={ClearChooseContainer}>cancel</p>
        </div>) : ('') }
        
        
        <div className='grid grid-cols-2 gap-20' >
          <div>
              { opponentSection ? (<Opponents props ={opponentAfind} />) :  ('') }
              { topicSection ? (<Topics props={topicsSelection} />) :  ('') }
          </div>
          <PickedData topicsData = {TopicsState } firstImage ={firstImage}  firstImageName ={firstImageName } secondImage ={secondImage}  secondImageName ={secondImageName} props={finddatafromPickeddata} /> 
        </div>


    </div>
  )
}

