import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'
import App from './App'

const root = document.getElementById('react-app')
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  root
)
