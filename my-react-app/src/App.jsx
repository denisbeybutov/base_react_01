import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import People from './people/people';
import UserProfile from './userProfile/userProfile';
import { USERS } from './users'



function App() {

  let outputUsers = USERS.map((person) => (
     <UserProfile key={person.id} user={person}/>
   ) )


  return (
    <>      
      <h1>My project</h1>     
      <People number={1}/>
      <div className='user__list'>
        {outputUsers}
      </div>
      
      
    </>
  )
}

export default App
