import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Random from './components/Random'
import ResidentInfo from './components/ResidentInfo'
function App() {
  //filter(resident => resident.id.toString() === search)
  const [ search, setSearch ] = useState("")

 

  return (
    <>
    <div className='img1'>
    <img className='img0' src="./src/assets/logo.png" alt="" />
    <Random></Random>
    </div>

    </>
  )
}

export default App
