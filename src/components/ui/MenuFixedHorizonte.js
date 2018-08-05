import React from 'react'

class MenuFixedHorizonte extends React.Component {
  constructor (props) {
    super()
    this.state = {
      showMenu: false
    }
  }

  render () {
    return (
      <div className={`shadowing-topless  bar_nav ${this.props.fix}`}>
        <div className="one-left_botton">{this.props.children}</div>
        {this.props.listMenu.length > 0 ? (
          <div className="rigth_section_nav">
            <div>
              <span
                className="hamberguericon"
                onClick={() => {
                  this.setState({ showMenu: !this.state.showMenu })
                }}
              >
                <i className="fa fa-bars fa-2x icon_hamber_icon_color" />
              </span>
            </div>

            <ul
              className={`${
                this.state.showMenu
                  ? 'navigation'
                  : 'navigation navigation_show'
              }`}
            >
              {this.props.listMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={`${item.link}`}>{item.name}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        ) : null}
      </div>
    )
  }
}

export default MenuFixedHorizonte
