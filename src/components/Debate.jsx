import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    <div className='ml-[19vw] mr-[19vw]  pl-10 pr-10 bg-yellow-100 h-[100vh]'>
      <button className='pt-3 text-sm underline underline-offset-2 focus:opacity-50 focus:text-orange-400' onClick={movebacktohome}>Home</button>

      <div className='text-sm flex flex-col pt-10'>
        {displayedText.map((segment, index) => (
          <div key={index} className='mb-6'>
            <div className='flex justify-start gap-2 items-center'>
              <img src={segment.includes('Pichai:') ? receivedfirstImage : receivedsecondImage} alt='profile-img' className='rounded-full  w-10 h-10' />
              <div className='flex flex-col text-xs'>
                <p>Full Name</p>
                <p>{segment.includes('Pichai:') ? receivedfirstImageName : receivedsecondImageName}</p>
              </div>
            </div>
            <p className='mt-2 text-xs'>{segment.replace(/Pichai:|Cook:/, '')}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
