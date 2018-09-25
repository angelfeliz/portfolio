import React from 'react'
import { Link } from 'react-router-dom'

const ProductClient = props => {
  return (
    <div className="client_product">
      <Link
        key={props.index}
        className="detail_box_product shadowing text-none-decoration"
        to={{
          pathname: '/product',
          state: {
            language: props.language,
            code: props.item
          }
        }}
      >
        <h3>Name of the proyect</h3>
      </Link>
      <div>
        <h4>Goals accomplish</h4>
        <ul className="goal_list">
          <li>goal one</li>
          <li>goal two</li>
          <li>goal three</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductClient
