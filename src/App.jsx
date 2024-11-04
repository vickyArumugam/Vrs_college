import { useState } from 'react'
import './App.css'
// import Header from './Components/Core/Header'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Home/>
    </div>
  )
}

export default App
