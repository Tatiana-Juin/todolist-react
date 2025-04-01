import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from './components/button/Button'
import Card from './components/card/Card'
import Input from './components/input/Input'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [task,setTask] = useState([]);
  
  return (
    <>
      <div className='div-main'>
        <Input />
        <Button text="Creer une tache " color="#008000" />
      </div>
        
    
    </>
  )
}

export default App
