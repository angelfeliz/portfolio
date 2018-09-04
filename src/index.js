import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Product from './components/products/ProductDetail';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker'

const MainApp = () => (
    <Router>
        <React.Fragment>
            <Route exac path='/' component={App}/>
            <Route path='/product' component={ Product }/>
        </React.Fragment>
    </Router>
)

ReactDOM.render(<MainApp />, document.getElementById('root'))
registerServiceWorker()
