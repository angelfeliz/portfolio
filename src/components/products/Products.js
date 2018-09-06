import React, { Component } from 'react'
// import ProductDetail from './ProductDetail'
import { getAllRepo, listOfRepoToShow } from '../../helpers/gitHubApi'
import { palletColors } from '../../helpers/valueString'
import clientsProject from '../../helpers/clientsProjectsDoc'
import ProductShowcase from './ProductShowcase'
import './productDetail.css'
import { Link } from 'react-router-dom'

// import beach from '../images/sea-bay-waterfront-beach.jpeg'

class Products extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showProductDetail: false,
      gitHub_repositories_own: [],
      gitHub_repositories_forks: [],
      clients_proyects: Object.keys(clientsProject[this.props.language]),
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
    let detail = clientsProject[this.props.language][name]
    console.log('detail ', detail)

    this.setState({
      ...this.state,
      showProductDetail: true,
      details: { ...detail }
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
          <div className="detail_box_product shadowing">
            <ProductShowcase
              key={index}
              index={index}
              name={item.name}
              code={item.name}
              palletColors={palletColors()}
              onClickProduct={this.goToGitHubLink}
            />
          </div>
        )
      }),
      tab2: this.state.clients_proyects.map((item, index) => {
        return (
          <Link
            className="detail_box_product shadowing text-none-decoration"
            to={{
              pathname: '/product',
              state: {
                name: clientsProject[this.props.language][item]['name'],
                code: item
              }
            }}
          >
            <ProductShowcase
              key={index}
              index={index}
              name={clientsProject[this.props.language][item]['name']}
              code={item}
              palletColors={palletColors()}
            />
          </Link>
        )
      })
    }

    return (
      <div className="bg-blue product_full_container">
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
            Projects
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
