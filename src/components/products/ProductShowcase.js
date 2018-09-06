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
    fontSize: 'calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)))',
    fontWeight: '100'
  }
  return (
    <div key={props.index}>
      <div
        className="img_box_product"
        onClick={() => props.onClickProduct(props.code)}
      >
        <div style={layout}>
          <span style={{ color: 'white' }}>{props.name}</span>
          <p
            style={{
              fontStyle: 'italic',
              fontSize: '10px',
              justifyContent: 'center'
            }}
          >
            click for detail
          </p>
        </div>
      </div>
    </div>
  )
}

Productshowcase.defaultProps = {
  onClickProduct: function () {}
}
export default Productshowcase
