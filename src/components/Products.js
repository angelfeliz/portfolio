import React, { Component } from 'react'
import ProductDetail from './ProductDetail'
import { getAllRepo } from '../helpers/gitHubApi'
import './Products/productDetail.css'
// import beach from '../images/sea-bay-waterfront-beach.jpeg'

class Products extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showProductDetail: false,
      gitHub_repositories_own: [],
      gitHub_repositories_forks: []
    }
  }

  productDetail = number => {
    this.setState({ ...this.state, showProductDetail: true })
  }
  onClickCloseModal = () => {
    this.setState({ ...this.state, showProductDetail: false })
  }
  componentDidMount () {
    getAllRepo()
      .then(res => {
        let own = res.filter(item => {
          console.log(item.fork)
          if (item.fork === false) {
            return item
          }
        })

        let forks = res.filter(item => {
          if (item.fork) {
            return item
          }
        })
        this.setState({
          ...this.state,
          gitHub_repositories_own: own,
          gitHub_repositories_forks: forks
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    let showModal = this.state.showProductDetail ? 'show_modal' : 'hidden_modal'
    return (
      <div className="section bg-blue">
        {this.state.showProductDetail ? (
          <ProductDetail
            show={showModal}
            onClickCloseModal={this.onClickCloseModal}
            url={'www.githgub.com'}
            description={'react good project'}
            nameProject={'Game of life'}
          />
        ) : null}

        {/* <!--portfolio--> */}
        <section>
          <div className="flex_container-row">
            {this.state.gitHub_repositories_own.map((item, index) => {
              console.log(item)
              return (
                <div key={index} className="detail_box_product">
                  <h2>{item.name}</h2>
                  <figure
                    className="img_box_product"
                    onClick={() => this.productDetail('1')}
                  >
                    <img src="https://bulma.io/images/placeholders/256x256.png" />
                  </figure>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    )
  }
}

export default Products
