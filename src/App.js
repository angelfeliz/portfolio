import React, { Component } from 'react'
import Introduction from './components/Introduction'
import Presentation from './components/Presentation'
import Products from './components/products/Products'
import ParallaxBanner from './components/ParalaxBanner'
import Contact from './components/Contact'
// import logo from './logo.svg'
import './App.css'
import 'bulma/css/bulma.css'
import './components/styles.css'
import 'font-awesome/css/font-awesome.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      showMenu: true
    }
  }
  onClickShowMenu = () => {
    console.log('in side')
    this.setState((prevState, props) => {
      return { showMenu: !prevState.showMenu }
    })
  }
  render () {
    console.log(this.state.showMenu)
    return (
      <div>
        <div className="bar_nav">
          <span
            className="hamberguericon"
            onClick={() => this.onClickShowMenu()}
          >
            <i className="fa fa-bars fa-2x" />
          </span>
        </div>
        <ul
          className={`${
            this.state.showMenu ? 'navigation' : 'navigation navigation_show'
          }`}
        >
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <Introduction />
        <Presentation />
        <ParallaxBanner />
        <Products />
        <Contact />
      </div>
    )
  }
}

export default App
