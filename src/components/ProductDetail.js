import React from 'react'

const ProductDetail = prop => {
  return (
    <div className="columns">
      <div className="column is-two-fifths">
        <img src="" />
        <h4>{prop.nameProject}</h4>
      </div>
      <div className="column">
        <div>
          <i className="has-text-left">{prop.url}</i>
          <p className="has-text-justified">prop.description</p>
          <div className="child-div" />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
