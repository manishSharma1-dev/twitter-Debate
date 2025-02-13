import React, { useState } from 'react'
import Opponents from './Opponents'
import Topics from './Topics'
import PickedData from './PickedData'


export default function Header({ getalldatafromHeader }) {
  const [changeParameteState,setChangeParameterState] = useState(true)

  const [ TopicsState,setTopicState ] = useState('Choose Topics')
  // for image 
  const [firstImage,setFirstImage] = useState('')
  // for Name 
  const [ firstImageName , setFirstImageName] = useState('')
  // for Image 
  const [secondImage,setSecondImage] = useState('')
  // for naem 
  const [ secondImageName , setSecondImageName] = useState('')

  function openGithub(){
    window.open('https://github.com/manishSharma1-dev/twitter-Debate')
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
     <div>
          <p className='text-center text-xl pt-8 xs:text-base'>Generate Twitter Debates...</p>
          <div className='flex justify-center py-4'>
            <button className='bg-black rounded-lg text-white px-5 py-2 text-xs' onClick={openGithub}>Star on Github.</button>
          </div>

          <div className='pt-7 xs:flex xs:flex-col xs:gap-5 md:grid md:grid-cols-2 md:gap-3 '>
            <div className='col-start-1 col-end-2'>
              <p className='text-center font-semibold xs:text-base xs:font-normal'>Choose your <span className='underline underline-offset-4'>opponent/topics.</span></p>
              <div className='flex justify-center gap-8 pt-4'> 
                <p className='cursor-pointer bg-black text-white hover:bg-white hover:text-black border border-black py-1 px-4 text-xs rounded-lg' onClick={() => setChangeParameterState(!changeParameteState)}>Opponents</p>
                <p className='cursor-pointer bg-black text-white hover:bg-white hover:text-black border border-black py-1 px-4 text-xs rounded-lg' onClick={() => setChangeParameterState(!changeParameteState)}>Topics</p>
              </div>
              <div>
                {changeParameteState ? <Opponents props={opponentAfind} /> : <Topics props={topicsSelection} />}
              </div>
            </div>

            <div className='col-start-2 col-end-3'>
              <p className='text-center font-semibold xs:text-base xs:font-normal'>Review Picked Data:</p>
              <PickedData topicsData = {TopicsState } firstImage ={firstImage}  firstImageName ={firstImageName } secondImage ={secondImage}  secondImageName ={secondImageName} props={finddatafromPickeddata} />
            </div>
          </div>

     </div>
  )
}