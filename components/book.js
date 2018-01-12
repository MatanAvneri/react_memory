import React from 'react'
import PropTypes from 'prop-types'
import { convertToUSD } from '../util'

const Book = ({title, price, zebraClass}) => {
  return (
    <li className={`one-book ${zebraClass}`}>
      {title}, {convertToUSD(price)}
    </li>
  )
}

Book.propTypes = {
  zebraClass: PropTypes.string.isRequired,
  title: PropTypes.string,
  price: PropTypes.number,
}

export default Book
