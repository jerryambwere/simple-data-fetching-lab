// create your App component here
import React, { useEffect } from 'react'
import { useState } from 'react'


const App = () => {
const [dog, setDog] = useState('')
const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(dog => {
            setLoading(false)
            setDog(dog)})
    },[])
  return (
    <div>
          {loading ? (
        <p>Loading...</p> 
      ) : (
        <img src={dog.message} alt="A Random Dog" /> 
      )}
    </div>
  )
}

export default App
