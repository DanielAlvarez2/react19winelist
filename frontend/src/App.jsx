import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [wines, setWines] = useState([])

  const getWines = async ()=>{
    await fetch('/api/wines')
      .then(res=>res.json())
      .then(json=>setWines(json))
      .catch(err=>console.log(err))
  }

  useEffect(()=>{
    getWines()
  })
  return (
    <>
      {wines.map((data)=>{
        return(
          <div className='menu-item'>
            <span>{data.bin}</span>
            <span>{data.description}</span>
            <span>{data.vintageSize}</span>
            <span>{data.price}</span>
          </div>
        )
      })}
    </>
  )
}

export default App
