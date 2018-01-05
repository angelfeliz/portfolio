import React, { Component } from 'react'
import Presentation from './components/Presentation'
import Products from './components/products/Products'
import ParallaxBanner from './components/ParalaxBanner'
import Contact from './components/Contact.js'
// import logo from './logo.svg'
import 'bulma/css/bulma.css'
import './components/styles.css'
import 'font-awesome/css/font-awesome.css'

class App extends Component {
  render () {
    return (
      <div>
        <Presentation />
        <ParallaxBanner />
        <Products />
        <Contact />
      </div>
    )
  }
}

export default App
