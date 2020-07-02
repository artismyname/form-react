import React from 'react'
import Inputs from './components/inputsWithFormik'
import './keyframes.css'
import './App.css'

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Registration Session</h1>
      </header>
      <main>
        <Inputs />
      </main>
    </div>
  )
}