import React from 'react'
import ReactDOM from 'react-dom'
import 'promise-polyfill/src/polyfill' // IE compatibility
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import AppRouter from './components/AppRouter'

// JavaScript standard functional
function App () {
  return <AppRouter />
}

ReactDOM.render(<App />, document.getElementById('app'))
