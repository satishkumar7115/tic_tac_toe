import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grid numberOfCards={9}/>
    </>
  )
}

export default App
