import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import People from './people/people';

function App() {

  return (
    <>      
      <h1>My project</h1>     
      <People number={1}/>
      
    </>
  )
}

export default App
