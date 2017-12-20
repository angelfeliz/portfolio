import React, { Component } from 'react'
import Presentation from './components/Presentation'
import Products from './components/Products'
import ParallaxBanner from './components/ParalaxBanner'
// import logo from './logo.svg'
import 'bulma/css/bulma.css'
import './components/styles.css'

class App extends Component {
  render () {
    return (
      <div>
        <Presentation />
        <ParallaxBanner />
        <Products />
      </div>
    )
  }
}

export default App
