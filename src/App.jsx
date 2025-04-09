import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BodyContent from './components/content'
import LogIn from './components/login'

function App() {
  return (
    <>
      <div className='container'>
        <div className='left-section'>
          <LogIn/>
        </div>
        <BodyContent/>
      </div>
    </>
  )
}
export default App
