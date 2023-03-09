import { useState } from 'react'
import './App.css'
import Routes from './routes/AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes />
    </div>
  )
}

export default App
