import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Textcard from './components/Textcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="card">
        <Card className="dev-card"/>
        <Textcard/>
      </div>
    </div>
  )
}

export default App
