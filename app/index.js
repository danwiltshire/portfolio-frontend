import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'promise-polyfill/src/polyfill' // IE compatibility
import BigKahunaBurger from './components/BigKahunaBurger'

// JavaScript standard functional
function App () {
  return <BigKahunaBurger />
}

ReactDOM.render(<App />, document.getElementById('app'))
