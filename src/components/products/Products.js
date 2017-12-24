import React, { Component } from 'react'
import ProductDetail from './ProductDetail'
import { getAllRepo } from '../../helpers/gitHubApi'
import { showcaseImg } from '../../helpers/valueString'
import ProductShowcase from './ProductShowcase'
import './productDetail.css'

// import beach from '../images/sea-bay-waterfront-beach.jpeg'

class Products extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showProductDetail: false,
      gitHub_repositories_own: [],
      gitHub_repositories_forks: [],
      tabs: {
        tab1: true,
        tab2: false,
        selected: 'tab1'
      }
    }
  }

  productDetail = number => {
    this.setState({ ...this.state, showProductDetail: true })
  }
  onClickCloseModal = () => {
    this.setState({ ...this.state, showProductDetail: false })
  }
  tabSelected = tabs => {
    this.setState({ ...this.state, tabs: { ...this.state.tabs, ...tabs } })
  }
  componentDidMount () {
    getAllRepo()
      .then(res => {
        let own = res.filter(item => {
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
    let repoDependOnTabActive = {
      tab1: this.state.gitHub_repositories_own.map((item, index) => {
        return (
          <ProductShowcase
            key={index}
            index={index}
            name={item.name}
            showcaseImg={showcaseImg()}
          />
        )
      }),
      tab2: this.state.gitHub_repositories_forks.map((item, index) => {
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
      })
    }
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
          <span
            className={`tab_botton ${
              this.state.tabs.tab1 ? 'tab_botton_selected' : null
            }`}
            onClick={() =>
              this.tabSelected({ tab1: true, tab2: false, selected: 'tab1' })
            }
          >
            Private
          </span>
          <span
            className={`tab_botton ${
              this.state.tabs.tab2 ? 'tab_botton_selected' : null
            }`}
            onClick={() =>
              this.tabSelected({ tab1: false, tab2: true, selected: 'tab2' })
            }
          >
            Collaborated
          </span>
          <div className="flex_container-row">
            {repoDependOnTabActive[this.state.tabs.selected]}
          </div>
        </section>
      </div>
    )
  }
}

export default Products
