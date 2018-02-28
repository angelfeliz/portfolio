import React, { Component } from 'react'
import Introduction from './components/introduction/Introduction'
import Presentation from './components/presentation/Presentation'
import Products from './components/products/Products'
import ParallaxBanner from './components/paralaxBanner/ParalaxBanner'
import Contact from './components/contact/Contact'
// import logo from './logo.svg'
import './App.css'
// import 'bulma/css/bulma.css'
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
          <div>
            <span
              className="hamberguericon"
              onClick={() => this.onClickShowMenu()}
            >
              <i className="fa fa-bars fa-2x icon_hamber_icon_color" />
            </span>
          </div>
          <ul
            className={`${
              this.state.showMenu ? 'navigation' : 'navigation navigation_show'
            }`}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
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
