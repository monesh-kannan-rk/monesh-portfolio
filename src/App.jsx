import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Textcard from './components/Textcard'
import Float from './components/Float'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Card/>
      <Textcard/>
      <Float/>
    </div>
  )
}

export default App
