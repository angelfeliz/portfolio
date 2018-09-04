import React, { Component, Fragment } from 'react'
import Introduction from './components/introduction/Introduction'
import Presentation from './components/presentation/Presentation'
import Products from './components/products/Products'
import ParallaxBanner from './components/paralaxBanner/ParalaxBanner'
import Contact from './components/contact/Contact'
import MenuFixedHorizonte from './components/ui/MenuFixedHorizonte'
import './App.css'
import './components/styles.css'
import 'font-awesome/css/font-awesome.css'


/* const TOP_MENU = {
  en: [
    {
      link: '#about',
      name: 'About'
    },
    {
      link: '#projets',
      name: 'Projets'
    }
  ],
  es: [
    {
      link: '#about',
      name: 'Sobre mi'
    },
    {
      link: '#projets',
      name: 'Proyectos'
    }
  ]
} */
class App extends Component {
  constructor () {
    super()
    this.state = {
      showMenu: true,
      language: 'en'
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
      <Fragment>
        <MenuFixedHorizonte listMenu={[]}>
          <div>
            <span
              className={`shadowing ${
                this.state.language === 'en' ? 'active' : null
              }`}
              onClick={() => this.setState({ ...this.state, language: 'en' })}
            >
              EN
            </span>

            <span
              className={`shadowing ${
                this.state.language === 'es' ? 'active' : null
              }`}
              onClick={() => this.setState({ ...this.state, language: 'es' })}
            >
              ES
            </span>
          </div>
        </MenuFixedHorizonte>

        <Introduction language={this.state.language} />
        <Presentation language={this.state.language} />
        <ParallaxBanner language={this.state.language} />
        <Products language={this.state.language} />
        <Contact language={this.state.language} />
      </Fragment>
    )
  }
}

export default App
