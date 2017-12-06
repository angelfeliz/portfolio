import React, { Component } from 'react'
import Presentation from './components/Presentation'
import Products from './components/Products'
// import logo from './logo.svg'
import './components/styles.css'
import 'bulma/css/bulma.css'

class App extends Component {
  render () {
    return (
      <div>
        <Presentation />
        <Products />
      </div>
    )
  }
}

export default App
