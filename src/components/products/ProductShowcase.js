import React from 'react'
// import { dirname } from 'path'

const Productshowcase = props => {
  const layout = {
    backgroundImage:
      'linear-gradient(rgba(19, 244, 255, 0.45), rgb(76, 48, 46)), url(' +
      props.showcaseImg +
      ')',
    backgroundSize: 'contain',
    width: '100%',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '1.2em'
  }
  return (
    <div key={props.index} className="detail_box_product">
      <figure
        className="img_box_product"
        onClick={() => props.onClickProduct(props.name)}
      >
        <div style={layout}>
          <span style={{ color: 'white' }}>{props.name}</span>
        </div>
      </figure>
    </div>
  )
}

export default Productshowcase
