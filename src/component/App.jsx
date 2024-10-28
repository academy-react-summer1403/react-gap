import React, { useEffect } from 'react'

const App = () => {
    async function fetchDat() {
        try{
            const res = await fetch('https://classapi.sepehracademy.ir/api')
            const date = res.json();
            return date;
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        console.log (fetchData)
    },[])
  return (
    <div>
      
    </div>
  )
}

export default App
