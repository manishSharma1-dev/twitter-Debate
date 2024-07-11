import React, { useEffect, useState } from 'react'
import img1 from '../../public/SamAltsman.jfif'
import img2 from '../../public/Billgates.jfif'
import { useNavigate } from 'react-router-dom'

export default function Debate({ receivedtopicsData,receivedfirstImage,receivedfirstImageName,receivedsecondImage,receivedsecondImageName }) {
  const [para1,setPara1] = useState()
  const [para2,setPara2] = useState()
  console.log("clg from debate component ",receivedtopicsData)
  console.log("clg from debate component ",receivedfirstImageName)
  console.log("clg from debate component ",receivedsecondImageName)

  useEffect(() => {

    async function fetchdatafromGemini(){
        const response = await fetch('http://localhost:5000/generate')
        if(!response.ok) {
          throw new Error('response dosent received')
        }
        console.log('inside the fetch method')
        const data = await response.text()
        const paragrapgh1Data = parseReceivedData(data)
        setPara1(paragrapgh1Data)
        setPara2(paragrapgh1Data)
        // console.log(data)

        // setPara1(data)
    }

    fetchdatafromGemini()
  },[])

  function parseReceivedData(text){
    // const samMark = '**Sam Altman:**';
    const startIndex = text.indexOf("**Sam Altman:**");
    const endIndex = text.indexOf("**", startIndex +"**Sam Altman:**".length)
    const receivedData = text.slice(startIndex + "**Sam Altman:**".length, endIndex);
    const responsedata = receivedData.trim();
      return responsedata
  }


// ----------------------------------------------------------------------

  // function makeitsmall(text,maxLength){
  //   if (maxLength >= text.length) {
  //     return text
  //   }

  //   return text.substring(0,maxLength)+'...'
  // }
  
  
  const Navigate = useNavigate();
  function movebacktohome(){
    Navigate('/')
  }

  return (
  <div className='ml-[19vw] mr-[19vw]  pl-10 pr-10 bg-yellow-100 h-[100vh] '>
    <button className='pt-3 text-sm underline underline-offset-2 focus:opacity-50 focus:text-orange-400' onClick={movebacktohome}>Home</button>
    <div className='text-sm flex flex-col pt-10 ' >
      {/* 1st user  */}
      <div className='mb-6'>
        <div className='flex justify-start gap-2 items-center'>
            <img src={receivedfirstImage} alt='profile-img' className='rounded-full  w-10 h-10' />

            <div className='flex flex-col text-xs'>
                <p>Full Name</p>
                <p>{receivedfirstImageName}</p>
            </div>
        </div>
        
        <p className='mt-2 text-xs'>{para1}</p>
      </div>

      {/* 2nd user  */}
      
      <div>
        <div className='flex justify-start gap-2 items-center'>
            <img src={receivedsecondImage} alt='profile-img' className='rounded-full w-10 h-10' />

            <div className='flex flex-col text-xs'>
                <p>Full Name</p>
                <p>{receivedsecondImageName}</p>
            </div>
        </div>
        
        <p className='mt-2 text-xs'>{para2}</p>
      </div>

    </div>
  </div>
  )
}
