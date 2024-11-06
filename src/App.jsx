import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import AppRouter from './Router/AppRouter'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AppRouter/>
    {/* <Home/> */}
    {/* <ConferenceTracks/> */}
    </div>
  )
}

export default App
