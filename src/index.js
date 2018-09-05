import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Product from './components/products/ProductDetail'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

const MainApp = () => (
  <Router>
    <Switch>      
      <Route path="/product" component={Product} />
      <Route exac path="/" component={App} />
    </Switch>
  </Router>
)

ReactDOM.render(<MainApp />, document.getElementById('root'))
registerServiceWorker()
