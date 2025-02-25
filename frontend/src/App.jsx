import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const getWines = async ()=>{
    await fetch('/api/wines')
      .then(res=>res.json())
      .then(json=>console.log(json))
  }
  getWines()
  return (
    <>
    test
    </>
  )
}

export default App
