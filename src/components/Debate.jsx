import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import verify from "../../public/verify.png"
import Loader from "../../public/loader.png"

export default function Debate({ receivedtopicsData, receivedfirstImage, receivedfirstImageName, receivedsecondImage, receivedsecondImageName }) {

  const [opponentAsegment, setOpponentAsegment] = useState([]);
  const [opponentBsegment, setOpponentBsegment] = useState([]);

  const [currentOpponentAindex, setCurrentOpponentAindex] = useState(0);
  const [currentOpponentBindex, setCurrentOpponentBindex] = useState(0);

  const [displayedText, setDisplayedText] = useState([]);

  const [fethchingDatafromLlm,setFethchingDatafromLlm] = useState(false)
  const [error,seterror] = useState(null)

  // Fetch and parse the debate text
  useEffect(() => {
    async function fetchdatafromGemini() {

      try {

        setFethchingDatafromLlm(true)

        const payload = {
          receivedtopicsData,
          receivedfirstImageName,
          receivedsecondImageName
        };
  
        console.log(payload)
  
        const response = await fetch('https://twitter-backend-eight-rho.vercel.app/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
  
        if (!response.ok) {
          const errText = await response.text();
          console.log(errText);
          seterror(errText)
          return;
        }
  
        const data = await response.text();

        if(!data){
          const errText = await response.text();
          console.log(errText);
          seterror(errText)
          return;
        }

        console.log("Data from llm fetched")
  
        // Split the text into segments
        const segments = data.split(/\n\s*\n/); // Adjust this based on your text format
  
        const segmentForOpponentA = segments.filter((segment) => segment.includes(`${receivedfirstImageName}:`));
        const segmentForOpponentB = segments.filter((segment) => segment.includes(`${receivedsecondImageName}:`));
  
        setOpponentAsegment(segmentForOpponentA);
        setOpponentBsegment(segmentForOpponentB);

        setFethchingDatafromLlm(false)

      } catch (error) {
        console.log("Failed to Generate: ",error?.message)
        setFethchingDatafromLlm(false)
        seterror(error?.message)
        return;
      }
      
    }
    fetchdatafromGemini();
  }, []);

  // Function to display segments alternately
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newDisplayedText = [...displayedText];

      if (currentOpponentAindex < opponentAsegment.length) {
        // newDisplayedText.push(currentOpponentAindex[currentOpponentAindex].replace('**Pichai:**', 'Pichai:'));
        newDisplayedText.push(opponentAsegment[currentOpponentAindex])
        setCurrentOpponentAindex(prevIndex => prevIndex + 1)
      }

      if (currentOpponentBindex < opponentBsegment.length) {
        // newDisplayedText.push(cookSegments[currentCookIndex].replace('**Cook:**', 'Cook:'));
        newDisplayedText.push(opponentBsegment[currentOpponentBindex]);
        setCurrentOpponentBindex(prevIndex => prevIndex + 1);
      }

      setDisplayedText(newDisplayedText);

      if (currentOpponentAindex >= opponentAsegment.length && currentOpponentBindex >= opponentBsegment.length) {
        clearInterval(interval);
      }
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, [opponentAsegment, opponentBsegment, currentOpponentAindex, currentOpponentBindex, displayedText]);

  const navigate = useNavigate();
  function movebacktohome() {
    navigate('/');
  }

  return (
    <div>
      {fethchingDatafromLlm ? (
          <div className='flex justify-center'>
            <div className='flex items-center gap-2 bg-black px-8 mt-3 py-1 rounded-md'>
              <p className='text-white text-xs'>Loading data! </p>
              <img src={Loader} alt="loading" className='size-3 animate-spin' />
            </div>
          </div>
      ): (
          <div>

            {error && 
                <div className="text-red-500 text-center p-4 xs:text-[10px] md:text-sm">Error: {error}</div>
            }
            
            <div className='flex justify-center py-2'>
              <p className='bg-black text-white inline text-center px-6 py-1 rounded-md text-xs cursor-pointer hover:bg-white hover:text-black border border-black' onClick={movebacktohome}>Generate another...</p>
            </div>
            <div className='flex flex-col lg:px-96 xs:px-10'>
              {displayedText.map((segment, index) => (
                <div key={index} className='mb-6 shadow-md shadow-neutral-200 border border-neutral-200 border-opacity-55 px-3 py-2 rounded-md'>
                  <div className='flex justify-start gap-1 items-center'>
                    <img src={segment.includes(`${receivedfirstImageName}:`) ? receivedfirstImage : receivedsecondImage} alt='profile-img' className='rounded-full  size-8 hover:grayscale cursor-pointer' />
                    <div className='flex flex-col text-xs'>
                      <div className='font-normal flex items-center gap-1'>
                        <p>{segment.includes(`${receivedfirstImageName}:`) ? receivedfirstImageName : receivedsecondImageName}</p>
                        <img src={verify} alt='verified' className='size-3' />
                      </div>
                      <p className='text-[10px] opacity-40'>{segment.includes(`${receivedfirstImageName}:`) ? receivedfirstImageName + "@ef34" : receivedsecondImageName + "$23e"}</p>
                    </div>
                  </div>
                  <p className='mt-2 text-[10px] opacity-80'>{segment.replace(/receivedfirstImageName:|receivedsecondImageName:/, '')}</p>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>  
  );
}