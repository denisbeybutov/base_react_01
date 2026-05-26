import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import People from './people/people';
import UserProfile from './userProfile/userProfile';

const user = {
  name: 'Ivan',
  email: 'ivan@google.com',
  avatarUrl: 'https://i.pinimg.com/736x/63/5a/57/635a57abc0779e5529df046eb08004f2.jpg',
  bio: "Hello. My name is Ivan. I'm a programmist"
}

function App() {

  return (
    <>      
      <h1>My project</h1>     
      <People number={1}/>
      <UserProfile user={user}/>
      
    </>
  )
}

export default App
