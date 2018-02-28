import React from 'react'

const Productshowcase = props => {
  const layout = {
    backgroundColor: props.palletColors,
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
      <div
        className="img_box_product"
        onClick={() => props.onClickProduct(props.name)}
      >
        <div style={layout}>
          <span style={{ color: 'white' }}>{props.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Productshowcase
