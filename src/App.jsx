import './App.css'
import Debate from './components/Debate'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';

// import Topics from './components/Topics'
// import Opponents from './components/Opponents'

function App() {
  return ( 
    <div className='main-container ml-32 mr-32'>
      <Routes>
        <Route  path="/" element={<Header />} />
        <Route  path="/generate" element={<Debate />} />
      </Routes>
    </div>
  )
}

export default App
