import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task'
import Color from './Color'
import Visible from './Visible'
import Text from './Text'

function App() {
 return(
  <>
  <Task/><br />
  <br />
  <Visible/>
  <br />
  <br />
  <Color/>
  <br />
  <br />
  <br />
  <Text/>
  </>
 )
}
export default App
