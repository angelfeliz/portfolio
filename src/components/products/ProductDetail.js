import React from 'react'

const ProductDetail = prop => {
  return (
    <div className={`full_screen ${prop.show}`}>
      <div className="columns board_detail">
        <div className="column is-two-fifths left-side_detail">
          <img src="https://bulma.io/images/placeholders/256x256.png" />
          <h4>{prop.nameProject}</h4>
        </div>
        <div className="column right-side_detail">
          <div className="is-pulled-right">
            <button
              className=""
              onClick={() => {
                prop.onClickCloseModal()
              }}
            >
              close
            </button>
          </div>
          CHeck out what good bro
          <div>
            <i className="has-text-left">{prop.url}</i>
            <p className="has-text-justified">prop.description</p>
            <div className="child-div"> </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
