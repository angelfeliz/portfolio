import React from 'react'

const Productshowcase = props => {
  const layout = {
    backgroundImage:
      'linear-gradient(rgba(19, 244, 255, 0.45), rgb(76, 48, 46)), url(' +
      props.showcaseImg +
      ')',
    backgroundSize: 'contain',
    width: '100%',
    minHeight: '200px'
  }
  return (
    <div key={props.index} className="detail_box_product">
      <figure
        className="img_box_product"
        onClick={() => this.productDetail('1')}
      >
        <div style={layout}>
          <h2 style={{ color: 'white' }}>{props.name}</h2>
        </div>
      </figure>
    </div>
  )
}

export default Productshowcase
