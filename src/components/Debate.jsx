import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Verify from '../../public/verify.png'

export default function Debate({ receivedtopicsData, receivedfirstImage, receivedfirstImageName, receivedsecondImage, receivedsecondImageName }) {

  const [pichaiSegments, setPichaiSegments] = useState([]);
  const [cookSegments, setCookSegments] = useState([]);
  const [currentPichaiIndex, setCurrentPichaiIndex] = useState(0);
  const [currentCookIndex, setCurrentCookIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState([]);

  // Fetch and parse the debate text
  useEffect(() => {
    async function fetchdatafromGemini() {
      const payload = {
        receivedtopicsData,
        receivedfirstImageName,
        receivedsecondImageName
      };

      const response = await fetch('http://localhost:3000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Response not received');
      }

      const data = await response.text();

      // Split the text into segments
      const segments = data.split(/\n\s*\n/); // Adjust this based on your text format
      const pichaiSegs = segments.filter((segment) => segment.includes('**Pichai:**'));
      const cookSegs = segments.filter((segment) => segment.includes('**Cook:**'));

      setPichaiSegments(pichaiSegs);
      setCookSegments(cookSegs);
    }

    fetchdatafromGemini();
  }, []);

  // Function to display segments alternately
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newDisplayedText = [...displayedText];

      if (currentPichaiIndex < pichaiSegments.length) {
        newDisplayedText.push(pichaiSegments[currentPichaiIndex].replace('**Pichai:**', 'Pichai:'));
        setCurrentPichaiIndex(prevIndex => prevIndex + 1);
      }

      if (currentCookIndex < cookSegments.length) {
        newDisplayedText.push(cookSegments[currentCookIndex].replace('**Cook:**', 'Cook:'));
        setCurrentCookIndex(prevIndex => prevIndex + 1);
      }

      setDisplayedText(newDisplayedText);

      if (currentPichaiIndex >= pichaiSegments.length && currentCookIndex >= cookSegments.length) {
        clearInterval(interval);
      }
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, [pichaiSegments, cookSegments, currentPichaiIndex, currentCookIndex, displayedText]);

  const navigate = useNavigate();
  function movebacktohome() {
    navigate('/');
  }

  return (
    <div className=' mt-1 mb-1 ml-60 mr-60 pl-10 pr-10 border-gray-300 border-x-2 min-h-[100vh] h-auto'>
      <button className='pt-3 text-sm underline decoration-red-500 decoration-wavy underline-offset-2 focus:opacity-50 focus:text-orange-400' onClick={movebacktohome}>Home</button>

      <div className='text-sm flex flex-col pt-10'>
        {displayedText.map((segment, index) => (
          <div key={index} className='mb-6'>
            <div className='flex gap-3 items-start'>
              <img src={segment.includes('Pichai:') ? receivedfirstImage : receivedsecondImage} alt='profile-img' className='rounded-full w-7 h-7 shadow-slate-600 shadow ' />
              <div className='flex items-center text-xs gap-1 mb-0 '>
                <p className='font-semibold'>{segment.includes('Pichai:') ? receivedfirstImageName : receivedsecondImageName}</p>
                <img src={Verify} alt='verify' className='w-3 h-3' />
              </div>
            </div>
            <p className=' text-xs ml-10 mb-3'>{segment.replace(/Pichai:|Cook:/, '')}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
