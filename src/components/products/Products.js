import React, { Component } from 'react'
import ProductDetail from './ProductDetail'
import { getAllRepo, listOfRepoToShow } from '../../helpers/gitHubApi'
import { palletColors } from '../../helpers/valueString'
import clientsProject from '../../helpers/clientsProjectsDoc'
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
      clients_proyects: clientsProject['en'],
      owner: '',
      repo: '',
      tabs: {
        tab1: true,
        tab2: false,
        selected: 'tab1'
      },
      details: {}
    }
  }

  onClickCloseModal = () => {
    this.setState({ ...this.state, showProductDetail: false })
  }
  goToGitHubLink = repo => {
    window.open(`https://github.com/angelfeliz/${repo}`)
  }
  tabSelected = tabs => {
    this.setState({ ...this.state, tabs: { ...this.state.tabs, ...tabs } })
  }
  openDetails = name => {
    let item = this.state.clients_proyects.find(function (item) {
      return item
    })

    this.setState({
      ...this.state,
      showProductDetail: true,
      details: { ...item }
    })
  }
  componentDidMount () {
    getAllRepo()
      .then(res => {
        let own = res.filter(item => {
          if (listOfRepoToShow[item.name] === true) {
            return item
          }
        })

        /* let forks = res.filter(item => {
          if (item.fork && listOfRepoToShow[item.name]) {
            return item
          }
        }) */
        this.setState({
          ...this.state,
          gitHub_repositories_own: own
          // gitHub_repositories_forks: forks
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
            palletColors={palletColors()}
            onClickProduct={this.goToGitHubLink}
          />
        )
      }),
      tab2: this.state.clients_proyects.map((item, index) => {
        return (
          <ProductShowcase
            key={index}
            index={index}
            name={item.name}
            palletColors={palletColors()}
            onClickProduct={this.openDetails}
          />
        )
      })
    }

    return (
      <div className="bg-blue product_full_container">
        {this.state.showProductDetail ? (
          <ProductDetail
            onClickCloseModal={this.onClickCloseModal}
            details={this.state.details}
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
            GitHub
          </span>
          <span
            className={`tab_botton ${
              this.state.tabs.tab2 ? 'tab_botton_selected' : null
            }`}
            onClick={() =>
              this.tabSelected({ tab1: false, tab2: true, selected: 'tab2' })
            }
          >
            Clients
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
