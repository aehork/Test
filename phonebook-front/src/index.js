import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.js'
import axios from 'axios'

const promise = axios.get('http://localhost:3001/persons')


const persons = [
]

ReactDOM.render(

  <App />,
  document.getElementById('root')

) 