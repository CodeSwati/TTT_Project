import { useState } from 'react'

import './App.css'
  import Board from './components/Board'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Board/>
    </div>
  )
}

export default App
