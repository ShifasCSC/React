import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="main">
      <div className="container">
        <h1>TODO LIST</h1>
        <div className="todo">
           <input type="text" />
           <button>add</button>
        </div>
        <div className="task">
          <ul>
            <li><span>hello</span>
            <button>del</button></li>
          </ul>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
