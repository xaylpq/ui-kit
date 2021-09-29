import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './App'


console.log(process.env.MY_CONST);

const rootEl = document.getElementById('root')
render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootEl
)
