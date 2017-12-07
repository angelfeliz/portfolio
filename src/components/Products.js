import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-transition-group'
import ProductDetail from './ProductDetail'
// import beach from '../images/sea-bay-waterfront-beach.jpeg'

class Products extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showProductDetail: false
    }
  }

  productDetail = number => {
    this.setState({ ...this.state, showProductDetail: true })
  }
  render () {
    return (
      <div className="section bg-blue">
        <ReactCSSTransitionGroup transitionName="slip">
          <ProductDetail />
        </ReactCSSTransitionGroup>
        {/* <!--porta folio--> */}
        <section>
          <div className="columns">
            <div className="column">
              <h2>Project 1</h2>
              <figure className="image is-4by3">
                <img src="" />
              </figure>
            </div>

            <div className="column">
              <h2>Project 2</h2>
              <figure
                className="image is-4by3"
                onClick={() => this.productDetail('1')}
              >
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
            </div>

            <div className="column">
              <h2>Project 3</h2>
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <h2>Project 4</h2>
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
            </div>

            <div className="column">
              <h2>Project 5</h2>
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
            </div>

            <div className="column">
              <h2>Project 6</h2>
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Products
