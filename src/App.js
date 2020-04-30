import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/homepage/homepage.component'

const HatsComponent = () => (
  <div>
    <h1>Hats Component</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsComponent} />
    </div>
  )
}

export default App
