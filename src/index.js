import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
const REACT_VERSION = React.version
ReactDOM.render(
  <div>
    {REACT_VERSION}
    <App />
  </div>,
  document.getElementById('root')
)
registerServiceWorker()
