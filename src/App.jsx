import { useState } from 'react';
import './App.css'
import Debate from './components/Debate'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';

// import Topics from './components/Topics'
// import Opponents from './components/Opponents'

function App() {
  const [ receivedtopicsData, setReceivedtopicsData ] = useState('')
  const [ receivedfirstImage, setReceivedfirstImage ] = useState('')
  const [ receivedsecondImage, setReceivedsecondImage ] = useState('')
  const [ receivedfirstImageName, setReceivedfirstImageName ] = useState('')
  const [ receivedsecondImageName, setReceivedsecondImageName ] = useState('')
  

  function getalldatafromHeader(topicsData,firstImage,secondImage,firstImageName,secondImageName){
    console.log("data passed to debate compopnetn successfully from app.js")
    console.log('clg from app js ', topicsData)
    setReceivedtopicsData(topicsData)
    setReceivedfirstImage(firstImage)
    setReceivedfirstImageName(firstImageName)
    setReceivedsecondImage(secondImage)
    setReceivedsecondImageName(secondImageName)
  }

  return ( 
    <div className='main-container ml-32 mr-32 xs:ml-0 xs:mr-0 xs:pl-3 xs:pr-3'>
      <Routes>
        <Route  path="/" element={<Header getalldatafromHeader={getalldatafromHeader} />} />
        <Route  path="/generate" element={<Debate receivedtopicsData={receivedtopicsData} receivedfirstImage={receivedfirstImage} receivedsecondImage={receivedsecondImage} receivedfirstImageName={receivedfirstImageName} receivedsecondImageName={receivedsecondImageName} />} />
      </Routes>
    </div>
  )
}

export default App
