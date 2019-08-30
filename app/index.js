import React from 'react'
import ReactDOM from 'react-dom'
import 'promise-polyfill/src/polyfill' // IE compatibility
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import BigKahunaBurger from './components/BigKahunaBurger'

// JavaScript standard functional
function App () {
  return <BigKahunaBurger />
}

ReactDOM.render(<App />, document.getElementById('app'))
